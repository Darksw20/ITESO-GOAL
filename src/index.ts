import express from "express";
import routes from "./routes";
import dotenv from "dotenv";
import logger from "morgan";
import path from "path";
import swaggerSpec from "./swagger";
import SwaggerUi from "swagger-ui-express";
const cors = require("cors");
const app = express();

const ENV = process.env.NODE_ENV === "test" ? ".env.testing" : ".env";
dotenv.config({ path: path.resolve(__dirname, "..", ENV) });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

// Enable CORS for all routes
app.use(cors());

app.use("/api", routes);
app.use("/api-doc", SwaggerUi.serve, SwaggerUi.setup(swaggerSpec));

export default app;
