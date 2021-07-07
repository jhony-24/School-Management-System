import chalk from 'chalk';

export default class Logger {
  static info(message: string) {
    console.log(chalk.blue(message));
  }

  static error(message: string) {
    console.log(chalk.red(message));
  }

  static success(message: string) {
    console.log(chalk.greenBright(message));
  }

  static stringify<T>(json: T) {
    console.log(JSON.stringify(json, null, 2));
  }
}
