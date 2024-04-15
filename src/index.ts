import express, { Request, Response, NextFunction } from "express";
import routes from "./routes";
import dotenv from "dotenv";
import logger from "morgan";
import path from "path";
const app = express();

const ENV = process.env.NODE_ENV === "test" ? ".env.testing" : ".env";
dotenv.config({ path: path.resolve(__dirname, "..", ENV) });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use("/api", routes);

export default app;
