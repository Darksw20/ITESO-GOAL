import { Request, Response } from "express";
import User from "../models/User";

export default {
	async create(req: Request, res: Response) {
		const user = User.create({});
		res.json(user);
	},
	async get(req: Request, res: Response) {
		res.send("get user");
	},
	async update(req: Request, res: Response) {
		res.send("update user");
	},
	async delete(req: Request, res: Response) {
		res.send("delete user");
	},
};
