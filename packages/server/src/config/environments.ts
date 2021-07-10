export let MYSQL_USERNAME = process.env.MYSQL_USERNAME as string;
export let MYSQL_PASSWORD = process.env.MYSQL_PASSWORD as string;
export let MYSQL_HOST = process.env.MYSQL_HOST as string;
export let MYSQL_DATABASE = process.env.MYSQL_DATABASE as string;
export let MYSQL_PORT = Number(process.env.MYSQL_PORT) as number;
export let ENVIRONMENT = process.env.ENVIRONMENT as string;

export function loadEnvironments() {
  MYSQL_USERNAME = process.env.MYSQL_USERNAME as string;
  MYSQL_PASSWORD = process.env.MYSQL_PASSWORD as string;
  MYSQL_HOST = process.env.MYSQL_HOST as string;
  MYSQL_DATABASE = process.env.MYSQL_DATABASE as string;
  MYSQL_PORT = Number(process.env.MYSQL_PORT) as number;
  ENVIRONMENT = process.env.ENVIRONMENT as string;
}
