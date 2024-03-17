import { Request, Response } from "express";

export default {
	async register(req: Request, res: Response) {
		res.send("register");
	},
	async create(req: Request, res: Response) {
		res.send("create user");
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
