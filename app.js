#!/usr/bin/env node
const { CLI } = require('./src/libs/cli.lib');
const { printOutput } = require('./src/helpers/printer.helper');

const cli = new CLI(process.argv);
const jsonResult = cli.getJSONResult();
printOutput(jsonResult);
