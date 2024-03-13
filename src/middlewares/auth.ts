import { Request, Response, NextFunction } from "express";
import AuthService from "../services/authService";

const auth = (req: Request, res: Response, next: NextFunction) => {
	const token: string | undefined =
		typeof req.headers.token === "string" ? req.headers.token : undefined;

	if (!token || !AuthService.verifyToken(token)) {
		return res.status(401).send("Unauthorized");
	}

	next();
};

export default auth;
