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

// Define a custom interface to extend the Request object
interface CustomRequest extends Request {
	db: any; // Type it according to your Sequelize instance type
}

// Define a custom middleware function with the correct typings
const attachDbToRequest = (
	req: CustomRequest,
	res: Response,
	next: NextFunction
) => {
	req.db = sequelize; // Attach Sequelize instance to the request object
	next();
};

// Pass Sequelize instance to routes or other parts of your application
app.use(attachDbToRequest as express.RequestHandler);

app.use("/api", routes);

const server = app.listen(PORT, async () => {
	console.log(`Server is running on port ${PORT}`);
	try {
		await sequelize.authenticate();

		console.log("Database connection established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
	// try {
	// 	await sequelize.sync();
	// 	console.log("All models were synchronized successfully.");
	// } catch (error) {
	// 	console.error("Unable to synchronize models with the database:", error);
	// }
});

export default server;
