"use strict";

const ts = require("typescript");
const fs = require("fs");
const path = require("path");
const process = require("process");

function getErrors(diagnostics) {
    var errors = [];
    diagnostics.forEach(diagnostic => {
        let message = "Error";
        if (diagnostic.file) {
            const where = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
            message += ' ' + diagnostic.file.fileName + ' ' + where.line + ', ' + where.character + 1;
        }
        message += ": " + ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
        errors.push(message);
    });
    return errors;
}

function readConfigFile(configFileName) {
    // Read config file
    const configFileText = fs.readFileSync(configFileName).toString();

    // Parse JSON, after removing comments. Just fancier JSON.parse
    const result = ts.parseConfigFileTextToJson(configFileName, configFileText);
    const configObject = result.config;
    if (!configObject) {
        reportDiagnostics([result.error]);
        process.exit(1);
    }

    // Extract config infromation
    const configParseResult = ts.parseJsonConfigFileContent(configObject, ts.sys, path.dirname(configFileName));
    if (configParseResult.errors.length > 0) {
        reportDiagnostics(configParseResult.errors);
        process.exit(1);
    }
    return configParseResult;
}


function compile(configFileName) {
    // Extract configuration from config file
    const config = readConfigFile(configFileName);

    // Compile
    const program = ts.createProgram(config.fileNames, config.options);
    const emitResult = program.emit();

    // Report errors
    var errors = getErrors(ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics));
    return errors;
}

module.exports = compile;