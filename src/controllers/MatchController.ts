import { Request, Response } from "express";

export default {
	async create(req: Request, res: Response) {
		res.send("create match");
	},
	async get(req: Request, res: Response) {
		res.send("get match");
	},
	async update(req: Request, res: Response) {
		res.send("update match");
	},
	async delete(req: Request, res: Response) {
		res.send("delete match");
	},
};
