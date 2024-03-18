import { Request, Response } from "express";

import Auth from "../services/AuthService";

export default {
	async login(req: Request, res: Response) {
		const { email, password } = req.body;

		if (!email || !password) {
			return res
				.status(400)
				.json({ message: "Email and password are required" });
		}

		const response = await Auth.login(email, password);

		res.json(response);
	},
	async logout(req: Request, res: Response) {
		res.send("logout");
	},
};
