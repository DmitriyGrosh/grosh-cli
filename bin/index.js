#! /usr/bin/env node
import { program } from 'commander';

import { generate } from"./commands/generate.js";
import { FILE_EXTENSION_CONST } from "./utils/const.js";

program
  .name('grosh-cli')
  .description('CLI to manage folders in react appp')
  .version('1.0.2');

program
  .command('generate <path> <filename>')
  .description('generate directory with react files')
  .option(`--${FILE_EXTENSION_CONST.STYLE} <type>`, 'type for styles', FILE_EXTENSION_CONST.SCSS)
  .option(`--${FILE_EXTENSION_CONST.LANGUAGE} <type>`, 'extension of files', FILE_EXTENSION_CONST.TS)
  .action(generate);



program.parse();
