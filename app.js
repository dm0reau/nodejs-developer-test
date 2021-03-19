#!/usr/bin/env node

const { CLI } = require('./src/libs/cli.lib');

const cli = new CLI(process.argv);
cli.exec();
