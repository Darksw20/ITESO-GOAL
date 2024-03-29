import express, { Request, Response, NextFunction } from "express";
import routes from "./routes";
import dotenv from "dotenv";
import logger from "morgan";
import sequelize from "./config/sequelize";
import path from "path";
const app = express();

const ENV = process.env.NODE_ENV === "test" ? ".env.testing" : ".env";
const PORT = process.env.NODE_ENV === "test" ? 3000 : process.env.PORT;
dotenv.config({ path: path.resolve(__dirname, "..", ENV) });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use("/api", routes);

const server = app.listen(PORT, async () => {
	console.log(`Server is running on port ${PORT}`);
	try {
		await sequelize.authenticate();

		console.log("Database connection established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
});

export default server;
