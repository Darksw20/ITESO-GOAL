import express from "express";
import routes from "./routes";
import dotenv from "dotenv";
import logger from "morgan";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use("/api", routes);

const server = app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

export default server;
