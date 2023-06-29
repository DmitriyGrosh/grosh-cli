#! /usr/bin/env node
const { program } = require('commander');

const { FILE_EXTENSION_CONST } = require("./utils/file-extension");
const { generate } = require("./commands/generate");

program
  .command('generate <path> <filename>')
  .description('generate directory with react files')
  .option(`--${FILE_EXTENSION_CONST.STYLE} <type>`, 'type for styles', FILE_EXTENSION_CONST.SCSS)
  .option(`--${FILE_EXTENSION_CONST.LANGUAGE} <type>`, 'extension of files', FILE_EXTENSION_CONST.TS)
  .action(generate);



program.parse();
