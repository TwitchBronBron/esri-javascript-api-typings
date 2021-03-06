'use strict';
var fetch = require('node-fetch');
var fs = require('fs');
var fsExtra = require('fs-extra');
var tsCompile = require('./compile');
var versionArg = null;
var path = require('path');
//var versionArg = '3.20';
var verbose = false;

console.sleep = function (message) {
    var waitTill = new Date(new Date().getTime() + 0);
    while (waitTill > new Date()) { }
    console.log(message);
}

console.debug = function () {
    if (verbose) {
        console.prototype.log.apply(console, arguments);
    }
}

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
    '3.20': 'https://raw.githubusercontent.com/Esri/jsapi-resources/704dc32810b167cb48192efac44ac73e915625f2/3.x/typescript/arcgis-js-api.d.ts',
    '3.21': 'https://raw.githubusercontent.com/Esri/jsapi-resources/22418dc01c2fcc5a1fd9d5f30ffe179fd6006638/3.x/typescript/arcgis-js-api.d.ts',
    '3.22': 'https://raw.githubusercontent.com/Esri/jsapi-resources/d56e98ea180845aa7f2d8e3054dbf5dc447b859d/3.x/typescript/arcgis-js-api.d.ts',
    '3.23': 'https://raw.githubusercontent.com/Esri/jsapi-resources/819e5c8be36c98b35d64cf8773c4c59598b8b291/3.x/typescript/arcgis-js-api.d.ts',
    '3.24': 'https://raw.githubusercontent.com/Esri/jsapi-resources/18ef87d92e066ea71a2481a2112435c4f4104747/3.x/typescript/arcgis-js-api.d.ts',
    '3.25': 'https://raw.githubusercontent.com/Esri/jsapi-resources/b6a77f911079b6471db95a24b2c4d4f7fb0992d7/3.x/typescript/arcgis-js-api.d.ts',
    '3.26': 'https://raw.githubusercontent.com/Esri/jsapi-resources/d1f2f8d3d9e7cf83fdfdd6d5f20fe87124606748/3.x/typescript/arcgis-js-api.d.ts',
    '3.27': 'https://raw.githubusercontent.com/Esri/jsapi-resources/c15f3f7f8311999aab3615e8afd67801c15bf9ca/3.x/typescript/arcgis-js-api.d.ts',
    '3.28': 'https://raw.githubusercontent.com/Esri/jsapi-resources/f1ee1606e7b6c654c78781f9a92ec8ff71d99231/3.x/typescript/arcgis-js-api.d.ts',
    '3.29': 'https://raw.githubusercontent.com/Esri/jsapi-resources/33f44afe228d336f62dc680ddefa941a1c196c10/3.x/typescript/arcgis-js-api.d.ts',
    '3.30': 'https://raw.githubusercontent.com/Esri/jsapi-resources/91d2ad688ebd4eeb0a9424f2935739bc481c27b8/3.x/typescript/arcgis-js-api.d.ts',
    '3.31': 'https://raw.githubusercontent.com/Esri/jsapi-resources/78a2380dddf77baa5b8684a55e8d3328d2dffb48/3.x/typescript/arcgis-js-api.d.ts',
    '3.32': 'https://raw.githubusercontent.com/Esri/jsapi-resources/f66d8acb734c8bb3a0e1da6bff5defb9808cc55a/3.x/typescript/arcgis-js-api.d.ts',
    '3.33': 'https://raw.githubusercontent.com/Esri/jsapi-resources/5f1ab6dd88c1ccbec78bbe405b6789f86bcffc46/3.x/typescript/arcgis-js-api.d.ts'
};

if (versionArg) {
    var version = urlsByVersion[versionArg];
    urlsByVersion = {};
    urlsByVersion[versionArg] = version;
}

function downloadFiles() {
    var promises = Object.keys(urlsByVersion).map(version => {
        var url = urlsByVersion[version];
        var filePath = getTempFilePath(version);
        if (!fs.existsSync(filePath)) {
            console.log('Downloading version ' + version);
            return fetch(url).then(function (res) {
                return res.text();
            }).then(function (text) {
                fsExtra.ensureDirSync(path.dirname(filePath));
                fsExtra.writeFileSync(filePath, text);
            }).catch((e) => {
                console.error('')
                return Promise.reject(e);
            });
        }
    });
    return Promise.all(promises);
}

function getTempFilePath(version) {
    return 'tmp/src/' + version + '/arcgis-js-api.d.ts';
}

function getDistFilePath(version) {
    return 'dist/' + version + '/index.d.ts';
}

function processVersion(version) {
    console.log('\nprocessing version ' + version);
    var inputFilePath = getTempFilePath(version);
    var contents = fs.readFileSync(inputFilePath).toString();
    var url = urlsByVersion[version];

    //get the top comment block
    var firstCommentBlock = '';
    var lines = contents.split('\n', 10);
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line.indexOf('//') === 0) {
            firstCommentBlock += line + '\n';
        } else {
            break;
        }
    }
    firstCommentBlock += '// Converted from ' + url + '\n';
    firstCommentBlock += '// Converted by https://github.com/TwitchBronBron/esri-javascript-api-typings' + '\n';

    var importExp = new RegExp(/\s*import\s+(\w+)\s=\s+require\("((\w+\/*)+)"\);/gi);
    var result;
    var nameMappings = {};
    console.log('Collecting the module names');
    while ((result = importExp.exec(contents)) !== null) {
        var name = result[1];
        var namespace = result[2];
        nameMappings[name] = namespace;
    }

    //remove all of the import statements
    console.log('Removing import statements');
    contents = contents.replace(importExp, '');
    fsExtra.ensureDirSync('tmp/processing');
    fsExtra.writeFileSync('tmp/processing/1.d.ts', contents);

    var namespaceMappings = {};

    console.log('Mapping local imports to global namespaces');

    //rename all of the objects with their full namespace names
    for (var name in nameMappings) {
        var namespace = nameMappings[name];
        console.debug('Processing name mapping: "' + namespace + '", "' + name + '"');
        var namespaceParts = namespace.split("/");
        if (namespaceParts.length > 1) {
            //remove the last name, since it is NOT always the actual name of the classes inside
            namespaceParts.splice(namespaceParts.length - 1, 1);
        }
        var dotNamespace = namespaceParts.join('.');

        namespaceMappings[namespace] = dotNamespace;
        var classReference = dotNamespace + '.' + name;
        console.debug('Class reference: "' + classReference + '"');

        //examples: "something: Type;" "something: Type," "something: Type[" "| Type"
        var regexp = new RegExp("(:|\\||\\s+)" + name + "(?=\s*)(?=,|;|\\s|\\[|\\))", "g");
        console.debug('RegExp: ' + regexp.toString());
        contents = contents.replace(regexp, "$1" + classReference);
    }
    console.log('Finding other namespaces');


    fsExtra.writeFileSync('tmp/processing/2.d.ts', contents);


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


    fsExtra.writeFileSync('tmp/processing/3.d.ts', contents);


    var regexp = /\s*export\s*=\s*(\w+\.*)*;/g;
    console.log('Removing invalid export statements: regex: ' + regexp.toString());
    contents = contents.replace(regexp, '');


    fsExtra.writeFileSync('tmp/processing/4.d.ts', contents);


    console.log('Exporting all vars');
    contents = contents.replace(/(\s+)(var\s+)/g, '$1export $2');


    fsExtra.writeFileSync('tmp/processing/5.d.ts', contents);


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
                console.debug('found namespace "' + namespace + '" on line ' + lineNumber);
                bracketCount = 1;
                if (line.indexOf('AGSMouseEvent') > -1) {
                    console.debug('Entered namespace: "' + line + '"');
                }

            } else {
                if (line.indexOf('AGSMouseEvent') > -1) {
                    console.debug('Not in namespace: "' + line + '"');
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
                console.debug('found closing namespace on line ', lineNumber);
                if (line.indexOf('AGSMouseEvent') > -1) {
                    console.debug('Exiting namespace: "' + line + '"');
                }

                namespace = null;
            } else {
                if (line.indexOf('AGSMouseEvent') > -1) {
                    console.debug('In namespace: "' + line + '"');
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
        console.debug('\ncreating namespace ', namespace);
        var lines = namespaceContainers[namespace];
        var dotReplacedNamespace = namespace.replace(/\./g, '\\.');
        var regexp = new RegExp(dotReplacedNamespace + "\\.", 'g');
        console.debug('Removing inner namespace references')
        console.debug('RegExp: ' + regexp);
        var esriRegex = /esri\./g;
        //replace any instances of the current namespace in the references for this namespace block.
        //This fixes things like: namespace esri { export class esri.Map { }  }
        for (var outerLineNumber = 0; outerLineNumber < lines.length; outerLineNumber++) {
            var line = lines[outerLineNumber];
            var replacedLine = line.replace(regexp, '');
            if (line.length !== replacedLine.length) {
                console.debug('replaced "' + line + '" with "' + replacedLine + '"');
                lines[outerLineNumber] = replacedLine;
            }
            //if the namespace starts with esri, remove any esri.[Whatever] items that are left. 
            //This prevents removing the esri. in front of non esri namespaces
            if (namespace.indexOf('esri') === 0) {
                var line = lines[outerLineNumber];
                var replacedLine = line.replace(esriRegex, '');
                if (line.length !== replacedLine.length) {
                    console.debug('replaced "' + line + '" with "' + replacedLine + '"');
                    lines[outerLineNumber] = replacedLine;
                }
            }
        }
        contents = contents + 'declare namespace ' + namespace + ' {\n' + lines.join('\n') + '\n}\n';
    }


    fsExtra.writeFileSync('tmp/processing/6.d.ts', contents);


    fsExtra.writeFileSync('tmp/processing/7.d.ts', contents);


    console.log('Exporting all classes');
    contents = contents.replace(/(\s*)(class\s+\w+\s*(!?{|extends))/g, "$1export $2");


    fsExtra.writeFileSync('tmp/processing/8.d.ts', contents);


    console.log('Undo any double export statements');
    contents = contents.replace(/export\s+export/g, 'export');

    console.log('Renaming module to esriTypes to prevent naming conflicts and discourage direct usage');
    contents = contents.replace(/declare\s+namespace\s+esri/g, 'declare namespace esriTypes');

    fsExtra.writeFileSync('tmp/processing/9.d.ts', contents);

    console.log('Creating class constructor interfaces');
    //find every class instance and create a constructor interface for the class
    var lines = contents.split('\n');
    for (var outerLineNumber = 0; outerLineNumber < lines.length; outerLineNumber++) {
        var line = lines[outerLineNumber];
        console.debug('Outer: ' + outerLineNumber + ': ' + line);
        //if this line looks like a class definition
        if (line.indexOf('export class') > -1) {
            console.debug('Line is a class');
            var classNameRegex = /export\s+class\s+(\w+)/g;
            var match = classNameRegex.exec(line);
            if (!match) {
                throw new Error('Unable to find class name from line');
            }
            var className = match[1];
            var constructorName = className + 'Constructor';
            var staticLines = [];
            var bracketCount = 1;
            var endingLineNumber = null;
            //walk to the end of the class
            for (var classLineNumber = outerLineNumber + 1; classLineNumber < lines.length; classLineNumber++) {
                var classLine = lines[classLineNumber];
                console.debug('Inner: ' + outerLineNumber + ': ' + classLine);
                bracketCount += (classLine.match(/{/g) || []).length;
                bracketCount -= (classLine.match(/}/g) || []).length;
                if (bracketCount === 0) {
                    //we are at the end of the class
                    endingLineNumber = classLineNumber;
                    console.debug('Ending line number: ' + endingLineNumber);
                    break;
                } else {
                    if (classLine.indexOf(' static ') > -1 || classLine.indexOf('constructor(') > -1) {
                        console.debug('Found static member or constructor: ' + classLine);
                        var startingJsdocLineNumber = null;
                        console.debug('Looking for jsdoc comments');
                        //walk backwards to see if we have a jsdoc comment
                        for (var jsdocLineNumber = classLineNumber - 1; jsdocLineNumber > -1; jsdocLineNumber--) {
                            var jsdocLine = lines[jsdocLineNumber]
                            console.debug('jsdoc loop: ' + jsdocLineNumber + ': ' + jsdocLine)
                            //if this is the first line and it doesn't have a jsdoc ending comment chunk, assume there is no comment
                            if (jsdocLineNumber === classLineNumber - 1 && jsdocLine.indexOf('*/') === -1) {
                                console.debug('Item has no jsdoc comment');
                                break;
                            }
                            if (jsdocLine.indexOf('/**') > -1) {
                                console.debug('Found jsdoc comment for item');
                                startingJsdocLineNumber = jsdocLineNumber;
                                break;
                            }
                        }
                        if (startingJsdocLineNumber) {
                            console.debug('Removing jsdoc comments');
                            var commentLength = classLineNumber - startingJsdocLineNumber;
                            console.debug('Comment is ' + commentLength + ' lines long');
                            var jsdocLines = lines.splice(startingJsdocLineNumber, commentLength);
                            console.debug('Removed these lines for the jsdoc comment: ' + JSON.stringify(jsdocLines));
                            Array.prototype.push.apply(staticLines, jsdocLines);
                            classLineNumber -= commentLength;
                            endingLineNumber -= commentLength;
                        }
                        staticLines.push(classLine);
                        //remove this line from the file
                        lines.splice(classLineNumber, 1);
                        classLineNumber--;
                        endingLineNumber--;
                    } else {
                        //console.debug('Did not find a static member for this line');
                    }
                }
            }
            console.debug('Creating constructor interface "' + constructorName + '"');
            var foundConstructor = false;
            var insertLines = [];
            insertLines.push('  export interface ' + constructorName + ' {');
            for (var staticLineIdx = 0; staticLineIdx < staticLines.length; staticLineIdx++) {
                var staticLine = staticLines[staticLineIdx];
                //if this isn't a comment block, and it contains the static keyword
                if (staticLine.indexOf('/**') === -1) {
                    staticLine = staticLine.replace(/\s+static\s+/g, '  ');
                }
                if (staticLine.indexOf('constructor(') > -1) {
                    staticLine = staticLine.replace('constructor(', 'new(');
                    staticLine = staticLine.replace(';', ': ' + className + ';');
                    foundConstructor = true;
                }
                insertLines.push('\t' + staticLine);
            }
            if (foundConstructor === false) {
                console.debug('No constructor was found. Creating empty constructor');
                insertLines.push('      new(): ' + className);
            }
            insertLines.push('  }');
            console.debug('Insert Lines: ' + insertLines.join('\n'));
            console.debug('Before line splice: ' + lines.length);

            Array.prototype.splice.apply(lines, [endingLineNumber + 1, 0].concat(insertLines));
            console.debug('After line splice: ' + lines.length);

            //skip the outer loop to the end of this new interface 
            outerLineNumber = endingLineNumber + insertLines.length;
            console.debug('Next loop line: ' + lines[outerLineNumber + 1]);

        }
    }
    contents = firstCommentBlock + lines.join('\n');

    console.log('Saving result');
    var distFilePath = getDistFilePath(version);
    fsExtra.ensureDirSync(path.dirname(distFilePath))
    fsExtra.writeFileSync(distFilePath, contents);
}

/**
 * Runs the d.ts file against the typescript compiler for validation
 * @param {*} version 
 */
function validateVersion(version) {
    var tsFileContents =
        '///<reference path="../../../dist/' + version + '/index.d.ts" />\n' +
        'var map: esriTypes.Map;';

    var folder = './tmp/test/' + version + '/';
    fsExtra.ensureDirSync(folder);
    //write a sample typescript file
    fsExtra.writeFileSync(folder + 'test.ts', tsFileContents);

    //create a tsconfig file
    var config = JSON.parse(fs.readFileSync('tsconfig.json').toString());
    config.files = [
        'test.ts'
    ];
    fsExtra.writeFileSync(folder + 'tsconfig.json', JSON.stringify(config));
    var errors = tsCompile(folder + 'tsconfig.json');
    if (errors.length > 0) {
        console.log('Version ' + version + ' has errors: ');
        errors.forEach(function (error) {
            console.log(error);
        });
        console.log('\n');
    } else {
        console.log('Version ' + version + ' is valid');
    }
}

function main() {
    downloadFiles().then(function () {
        for (var version in urlsByVersion) {
            if (!versionArg || version === versionArg) {
                processVersion(version);
            }
        }
    }).then(() => {
        for (var version in urlsByVersion) {
            if (!versionArg || version === versionArg) {
                validateVersion(version);
            }
        }
    }, function (e) {
        throw e;
    })
}
main();
