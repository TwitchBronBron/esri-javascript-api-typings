'use strict';
var fetch = require('node-fetch');
var fs = require('fs');
var fsPath = require('fs-path');
var ts = require('typescript');

var urlsByVersion = {
    '3.8': 'https://raw.githubusercontent.com/Esri/jsapi-resources/bc98e8b7a17e8ba04efa5ad330621322b8ac063e/typescript/esri.d.ts',
    '3.9': 'https://raw.githubusercontent.com/Esri/jsapi-resources/bb71e7cb44008ecf8e1e29834cdf050301f61641/typescript/esri.d.ts',
    '3.10': 'https://raw.githubusercontent.com/Esri/jsapi-resources/05cfeff2ba034425ec065c549087a745315a1604/typescript/esri.d.ts',
    '3.11': 'https://raw.githubusercontent.com/Esri/jsapi-resources/9f260a52e337a0c2191e868e0e596465254b8506/typescript/esri.d.ts',
    '3.12': 'https://raw.githubusercontent.com/Esri/jsapi-resources/539967858e3234b41d7d6332a75e7a667687ca88/typescript/esri.d.ts',
    '3.13': 'https://raw.githubusercontent.com/Esri/jsapi-resources/e5b6a98a8812ee730c2cdd349731f4ed16a53e02/typescript/arcgis-js-api.d.ts',
    '3.14': 'https://raw.githubusercontent.com/Esri/jsapi-resources/de55d2a72ba801e9bc296735bca224decdae7b25/typescript/arcgis-js-api.d.ts',
    '3.15': 'https://raw.githubusercontent.com/Esri/jsapi-resources/4144bfed04a212dd0c6d3553a4a3a2f048f2ae92/typescript/arcgis-js-api.d.ts',
    '3.16': 'https://raw.githubusercontent.com/Esri/jsapi-resources/761f698bbc0f17c6b888768d316ac6b09086e811/3.x/typescript/arcgis-js-api.d.ts',
    '3.17': 'https://raw.githubusercontent.com/Esri/jsapi-resources/b20fdeb7469ad6ebdc371d0276ed2e6b679e32ac/3.x/typescript/arcgis-js-api.d.ts',
    '3.18': 'https://raw.githubusercontent.com/Esri/jsapi-resources/64abeb4df452a0ac712487f6133211b9a7bfe083/3.x/typescript/arcgis-js-api.d.ts',
    '3.19': 'https://raw.githubusercontent.com/Esri/jsapi-resources/809cf2e15fd10948d5b028e700cc89245d2899ff/3.x/typescript/arcgis-js-api.d.ts',
    '3.20': 'https://raw.githubusercontent.com/Esri/jsapi-resources/704dc32810b167cb48192efac44ac73e915625f2/3.x/typescript/arcgis-js-api.d.ts'
};

function downloadFiles() {
    var promises = [];
    for (var version in urlsByVersion) {
        let url = urlsByVersion[version];
        let filePath = getTempFilePath(version);
        if (!fs.existsSync(filePath)) {
            promises.push(
                fetch(url).then(function (res) {
                    return res.text();
                }).then(function (text) {
                    fsPath.writeFileSync(filePath, text);
                })
            );
        }
    }
    return Promise.all(promises);
}

function getTempFilePath(version) {
    return 'tmp/' + version + '/arcgis-js-api.d.ts';
}

function getDistFilePath(version) {
    return 'dist/' + version + '/index.d.ts';
}

function processVersion(version) {
    console.log('\nprocessing version ' + version);
    let inputFilePath = getTempFilePath(version);
    var contents = fs.readFileSync(inputFilePath).toString();

    var importExp = new RegExp(/\s*import\s+(\w+)\s=\s+require\("((\w+\/*)+)"\);/gi);
    var result;
    var nameMappings = {};
    console.log('Collecting the module names');
    while ((result = importExp.exec(contents)) !== null) {
        let name = result[1];
        let namespace = result[2];
        nameMappings[name] = namespace;
    }

    //remove all of the import statements
    console.log('Removing import statements');
    contents = contents.replace(importExp, '');

    fsPath.writeFileSync('junk/1.d.ts', contents);

    var namespaceMappings = {};

    console.log('Mapping local imports to global namespaces');

    //rename all of the objects with their full namespace names
    for (var name in nameMappings) {
        var namespace = nameMappings[name];
        console.log('\nProcessing name mapping: "' + namespace + '", "' + name + '"');
        var namespaceParts = namespace.split("/");
        if (namespaceParts.length > 1) {
            //remove the last name, since it is NOT always the actual name of the classes inside
            namespaceParts.splice(namespaceParts.length - 1, 1);
        }
        var dotNamespace = namespaceParts.join('.');

        namespaceMappings[namespace] = dotNamespace;
        var classReference = dotNamespace + '.' + name;
        console.log('Class reference: "' + classReference + '"');

        //examples: "something: Type;" "something: Type," "something: Type[" "| Type"
        var regexp = new RegExp("(:|\\||\\s+)" + name + "(?=\s*)(?=,|;|\\s|\\[|\\))", "g");
        console.log('RegExp: ' + regexp.toString());
        contents = contents.replace(regexp, "$1" + classReference);
    }
    console.log('\nFinding other namespaces');


    fsPath.writeFileSync('junk/2.d.ts', contents);


    var regexp = /\s*declare\s+module\s+"((\w+\/*)+)"/g;
    while ((result = regexp.exec(contents)) !== null) {
        var namespace = result[1];
        var namespaceParts = namespace.split("/");
        if (namespaceParts.length > 1) {
            //remove the last name, since it is NOT always the actual name of the class inside
            namespaceParts.splice(namespaceParts.length - 1, 1);
        }
        var dotNamespace = namespaceParts.join('.');

        namespaceMappings[namespace] = dotNamespace;
    }

    console.log('Replacing string modules with dot notation');

    for (var oldNamespace in namespaceMappings) {
        var newNamespace = namespaceMappings[oldNamespace];
        var regexp = new RegExp('declare\\s+module\\s+"' + oldNamespace + '"', "g")
        contents = contents.replace(regexp, 'declare namespace ' + newNamespace);
    }


    fsPath.writeFileSync('junk/3.d.ts', contents);


    var regexp = /\s*export\s*=\s*(\w+\.*)*;/g;
    console.log('Removing invalid export statements: regex: ' + regexp.toString());
    contents = contents.replace(regexp, '');


    fsPath.writeFileSync('junk/4.d.ts', contents);


    console.log('Exporting all vars');
    contents = contents.replace(/(\s+)(var\s+)/g, '$1export $2');


    fsPath.writeFileSync('junk/5.d.ts', contents);


    console.log('Combine all like namespace pieces');
    var namespaceContainers = {};
    var bracketCount = 0;
    var lines = contents.split('\n');
    var namespace = null;
    for (var lineNumber = 0; lineNumber < lines.length; lineNumber++) {
        var line = lines[lineNumber];
        if (!namespace) {
            if ((line.match(/declare\s+namespace/gi) || []).length > 0) {
                var match = line.match(/declare\s+namespace\s((!?\w\.*)*)/);
                namespace = match[1];
                //create a container for this namespace
                if (!namespaceContainers[namespace]) {
                    namespaceContainers[namespace] = [];
                }
                console.log('found namespace "' + namespace + '" on line ' + lineNumber);
                bracketCount = 1;
                if (line.indexOf('AGSMouseEvent') > -1) {
                    console.log('Entered namespace: "' + line + '"');
                }

            } else {
                if (line.indexOf('AGSMouseEvent') > -1) {
                    console.log('Not in namespace: "' + line + '"');
                }

                //not in a namespace, we don't care about this line
                //console.log('SKIP: ', line);
            }
        } else {
            //we are counting brackets
            bracketCount += (line.match(/{/g) || []).length;
            bracketCount -= (line.match(/}/g) || []).length;

            //if we are back to zero, then we have found the closing namespace bracket
            if (bracketCount === 0) {
                console.log('found closing namespace on line ', lineNumber);
                if (line.indexOf('AGSMouseEvent') > -1) {
                    console.log('Exiting namespace: "' + line + '"');
                }

                namespace = null;
            } else {
                if (line.indexOf('AGSMouseEvent') > -1) {
                    console.log('In namespace: "' + line + '"');
                }

                //this is not a closing bracket line, so add it to the namespace list
                //add this line to the namespace lines array
                namespaceContainers[namespace].push(line);
            }
        }
    }

    contents = '';
    //create a namespace for each namespace chunk of code
    for (var namespace in namespaceContainers) {
        console.log('creating namespace ', namespace);
        var lines = namespaceContainers[namespace];

        //replace any instances of the current namespace in the references for this namespace block.
        //This fixes things like: namespace esri { export class esri.Map { }  }
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var replacedLine = line.replace(namespace + ".", '');
            if (line.length !== replacedLine.length) {
                console.log('replaced "' + line + '" with "' + replacedLine + '"');
                lines[i] = replacedLine;
            }
        }
        contents = contents + 'declare namespace ' + namespace + ' {\n' + lines.join('\n') + '\n}\n';
    }


    fsPath.writeFileSync('junk/6.d.ts', contents);


    console.log('Exporting all classes');
    contents = contents.replace(/(\s*)(class\s+\w+\s*(!?{|extends))/g, "$1export $2");


    fsPath.writeFileSync('junk/7.d.ts', contents);


    console.log('Undo any double export statements');
    contents = contents.replace(/export\s+export/g, 'export');


    fsPath.writeFileSync('junk/8.d.ts', contents);


    console.log('Saving result');
    fsPath.writeFileSync(getDistFilePath(version), contents);
}

function validateVersion(version) {
    var fileName = 'file.ts';
    var tsFile =
        '///<reference path="dist/' + version + '/index.d.ts" />\n' +
        'var map:esri.Map;';
    const servicesHost = {
        getScriptFileNames: () => ['file.ts'],
        getScriptVersion: function (fileName) {
            return 1;
        },
        getScriptSnapshot: (fileName) => {
            var fileContents;
            if (fileName === 'file.ts') {
                fileContents = tsFile;
            } else {
                fileContents = fs.readFileSync(getDistFilePath(version)).toString();
            }
            return ts.ScriptSnapshot.fromString(fileContents);
        },
        getCurrentDirectory: function () {
            return process.cwd();
        },
        getCompilationSettings: function () {
            return {
                noResolve: false,
                module: ts.ModuleKind.None,
                lib: [
                    'es5',
                    'dom'
                ]

            };
        },
        getDefaultLibFileName: function (options) {
            return ts.getDefaultLibFilePath(options);
        }
    };

    // Create the language service files
    const services = ts.createLanguageService(servicesHost, ts.createDocumentRegistry())
    let allDiagnostics = services.getCompilerOptionsDiagnostics()
        .concat(services.getSyntacticDiagnostics('file.ts'))
        .concat(services.getSemanticDiagnostics('file.ts'));

    allDiagnostics.forEach(diagnostic => {
        let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
        if (diagnostic.file) {
            let { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
            console.log(`  Error ${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`);
        }
        else {
            //we don't care about these errors
            console.log(`  Error: ${message}`);
        }
    });
}

downloadFiles().then(function () {
    for (var version in urlsByVersion) {
        if (version === '3.20') {
            processVersion(version);
        }
    }
}).then(() => {
    for (var version in urlsByVersion) {
        if (version === '3.20') {
            validateVersion(version);
        }
    }
})
