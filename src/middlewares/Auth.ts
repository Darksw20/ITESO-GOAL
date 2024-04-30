import { Request, Response, NextFunction } from "express";
import AuthService from "../services/AuthService";
import JWTService from "../services/JWTService";
import { USER_ROLES } from "../config/enums";

export const authUser = (req: Request, res: Response, next: NextFunction) => {
	const bearerToken = req.headers.authorization ?? "";
	const token = bearerToken.split(" ")[1];

	if (!AuthService.verifyToken(token as string)) {
		return res.status(401).send("Unauthorized");
	}
	next();
};

export const authRole = (role: USER_ROLES[]) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		const bearerToken = req.headers.authorization ?? "";
		const token = bearerToken.split(" ")[1];
		const decodedJWT = JWTService.decodeJWT(token as string);
		const userType = decodedJWT.user_type;

		if (!role.includes(userType)) {
			return res.status(403).send("Unauthorized");
		}

		next();
	};
};
