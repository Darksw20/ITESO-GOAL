import express, { Request, Response, NextFunction } from "express";
import routes from "./routes";
import dotenv from "dotenv";
import logger from "morgan";
import sequelize from "./config/sequelize"; // Import Sequelize instance

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

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
