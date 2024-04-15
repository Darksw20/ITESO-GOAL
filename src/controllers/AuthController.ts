import { Request, Response } from "express";

import Auth from "../services/AuthService";
import { USER_ROLES } from "../config/enums";

const isValidDate = (dateString: string) => {
	const date = new Date(dateString);

	return !isNaN(date.getTime());
};

export default {
	async login(req: Request, res: Response) {
		const { email, password } = req.body;

		if (!email || !password) {
			return res
				.status(400)
				.json({ message: "Email and password are required" });
		}

		try {
			const response = await Auth.login(email, password);
			return res.json(response);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async register(req: Request, res: Response) {
		const { email, password, first_name, last_name, birthday } = req.body;

		if (!email || !password || !first_name || !last_name || !birthday) {
			return res.status(400).json({ message: "All fields are required" });
		}

		if (password.length < 6) {
			return res
				.status(400)
				.json({ message: "Password must be at least 6 characters long" });
		}

		if (!isValidDate(birthday)) {
			return res.status(400).json({ message: "Birthday is not a valid date" });
		}

		try {
			const response = await Auth.register(
				email,
				password,
				first_name,
				last_name,
				birthday,
				USER_ROLES.USER
			);
			return res.json(response);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async logout(req: Request, res: Response) {
		return res.json({ message: "Logout successful" });
	},
};
