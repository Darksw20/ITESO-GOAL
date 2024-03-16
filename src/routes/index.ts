import { Router, Request, Response } from "express";
import AuthMiddleware from "../middlewares/auth";
import User from "../models/User";

const router = Router();

router.get("/healthcheck", async (req: any, res: any) => {
	const user = await User.create({
		email: "test@test.com",
		username: "test",
		password: "password",
		first_name: "John",
		last_name: "Doe",
		birthday: new Date("1990-01-01"),
		user_type: "admin",
	});
	console.log("User created:", user.toJSON());
	res.status(200).json({
		message: "Server is running",
	});
});

router.post("/upload", AuthMiddleware, (req: Request, res: Response) => {
	res.send("File uploaded");
});

export default router;
