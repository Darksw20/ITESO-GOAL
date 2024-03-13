import { Router, Request, Response } from "express";
import AuthMiddleware from "../middlewares/auth";

const router = Router();

router.get("/healthcheck", AuthMiddleware, (req: Request, res: Response) => {
	res.status(200).json({
		message: "Server is running",
	});
});

router.post("/upload", (req: Request, res: Response) => {
	res.send("File uploaded");
});

export default router;
