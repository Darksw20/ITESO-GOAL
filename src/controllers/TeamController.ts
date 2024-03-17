import { Request, Response } from "express";

export default {
	async create(req: Request, res: Response) {
		res.send("create team");
	},
	async get(req: Request, res: Response) {
		res.send("get team");
	},
	async list(req: Request, res: Response) {
		res.send("list teams");
	},
	async update(req: Request, res: Response) {
		res.send("update team");
	},
	async delete(req: Request, res: Response) {
		res.send("delete team");
	},
	async getMembers(req: Request, res: Response) {
		res.send("get team members");
	},
	async addMembers(req: Request, res: Response) {
		res.send("add team members");
	},
	async deleteMember(req: Request, res: Response) {
		res.send("delete team member");
	},
};
