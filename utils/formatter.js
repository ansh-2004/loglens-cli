import chalk from 'chalk';

export function formatLog(log) {
  if (log.raw) return chalk.gray(log.raw);

  const { timestamp, level, message } = log;
  const color = {
    error: chalk.red,
    warn: chalk.yellow,
    info: chalk.cyan,
    debug: chalk.green
  }[level] || chalk.white;

  return `${chalk.dim(timestamp || '')} ${color(level)} ${message}`;
}
