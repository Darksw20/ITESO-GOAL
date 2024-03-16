import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const sequelize = new Sequelize({
	database: process.env.DB_NAME,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	port: 3306,
	dialect: "mysql", // Or any other supported database dialect
	models: [path.join(__dirname, "../models")], // Specify the path to your models directory
	logging: process.env.NODE_ENV === "development" ? console.log : false, // Log SQL queries only in development
});

export default sequelize;
