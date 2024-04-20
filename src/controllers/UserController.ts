import { Request, Response } from "express";
import User from "../services/UserService";
import Aws from "../services/AwsService";

export default {
	async create(req: Request, res: Response) {
		const { email, password, first_name, last_name, birthday, user_type } =
			req.body;

		if (
			!email ||
			!password ||
			!first_name ||
			!last_name ||
			!birthday ||
			!user_type
		) {
			return res.status(400).json({ message: "All fields are required" });
		}

		try {
			const user = await User.create(
				email,
				password,
				first_name,
				last_name,
				birthday,
				user_type
			);
			return res.json(user);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async get(req: Request, res: Response) {
		const id = Number(req.params.id);

		if (!id) {
			return res.status(400).json({ message: "Id of user is required" });
		}

		try {
			const user = await User.find(id);

			if (user.error) return res.status(404).json(user);

			return res.json(user);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async list(req: Request, res: Response) {
		try {
			const users = await User.find();

			return res.json(users);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async update(req: Request, res: Response) {
		const userId = Number(req.params.id);
		const { email, password, first_name, last_name, birthday, user_type } =
			req.body;

		try {
			const response = await User.update(
				userId,
				email,
				password,
				first_name,
				last_name,
				birthday,
				user_type
			);

			if (response.error) return res.status(404).json(response);

			return res.json(response);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async delete(req: Request, res: Response) {
		const userId = Number(req.params.id);

		try {
			const response = await User.delete(userId);

			if (response.error) return res.status(404).json(response);

			return res.json(response);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async uploadImage(req: Request, res: Response) {
		const userId = Number(req.params.id);
		console.log(req.file);
		console.log(req.body);
		const { path } = req.file as { path: string };

		try {
			const response = await Aws.uploadImage(userId, path, "jpg");

			if ((response as { error: string }).error)
				return res.status(404).json(response);

			return res.json(response);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
};
