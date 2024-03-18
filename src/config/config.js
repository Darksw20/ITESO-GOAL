const dotenv = require("dotenv");
const path = require("path");

const ENV = process.env.NODE_ENV === "test" ? ".env.testing" : ".env";

dotenv.config({ path: path.resolve(__dirname, "../..", ENV) });

const SQL_CONFIG = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "mysql",
};
console.log("SQL_CONFIG", SQL_CONFIG);
module.exports = {
  development: SQL_CONFIG,
  test: SQL_CONFIG,
  production: SQL_CONFIG,
};
