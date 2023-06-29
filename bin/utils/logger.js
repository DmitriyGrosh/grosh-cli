import chalk from 'chalk';

export function logger(message) {
	console.log(chalk.blue.bgGreen(message))
}
