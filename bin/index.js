#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { parseLogFile } from '../lib/parser.js';
import { filterLogs } from '../lib/filter.js';
import { formatLog } from '../utils/formatter.js';

const argv = yargs(hideBin(process.argv))
  .option('file', {
    alias: 'f',
    type: 'string',
    description: 'Path to the log file',
    demandOption: true
  })
  .option('level', {
    alias: 'l',
    choices: ['error', 'warn', 'info', 'debug'],
    description: 'Log level filter'
  })
  .option('from', {
    type: 'string',
    description: 'Start time (e.g., 2025-07-20T12:00:00)'
  })
  .option('to', {
    type: 'string',
    description: 'End time'
  })
  .argv;

const logs = await parseLogFile(argv.file);
const filtered = filterLogs(logs, argv);
filtered.forEach(log => console.log(formatLog(log)));


