var fetch = require('node-fetch');
var fs = require('fs');
var fsPath = require('fs-path');

var urlsByVersion = {
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
    console.log('processing version ' + version);
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

    var namespaceMappings = {};

    console.log('Mapping local imports to global namespaces');

    //rename all of the objects with their full namespace names
    for (var name in nameMappings) {
        var namespace = nameMappings[name];
        var namespaceParts = namespace.split("/");
        //remove the last name, since it is NOT always the actual name of the classes inside
        namespaceParts.splice(namespaceParts.length - 1, 1);
        var dotNamespace = namespaceParts.join('.');

        namespaceMappings[namespace] = dotNamespace;

        var regexp = new RegExp(":\\s+" + name + "(?=,|;|\s|\\[)", "g");
        contents = contents.replace(regexp, ': ' + dotNamespace + '.' + name);
    }

    console.log('Finding other namespaces');

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
        var regexp = new RegExp('module\\s+"' + oldNamespace + '"', "g")
        contents = contents.replace(regexp, 'module ' + newNamespace);
    }

    console.log('Removing invalid export statements');
    contents = contents.replace(/\s*export\s*=\s*\w*;/g, '');

    console.log('Exporting all classes');
    contents = contents.replace(/(\s*)(class\s+\w+\s*(!?{|extends))/g, "$1export $2");

    console.log('Saving result');
    fsPath.writeFileSync(getDistFilePath(version), contents);
}

downloadFiles().then(function () {
    for (var version in urlsByVersion) {
        processVersion(version);
        console.log('');
    }
});
