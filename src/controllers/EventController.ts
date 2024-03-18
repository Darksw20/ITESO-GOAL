import { Request, Response } from "express";

export default {
	async create(req: Request, res: Response) {
		res.send("create event");
	},
	async get(req: Request, res: Response) {
		res.send("get event");
	},
	async list(req: Request, res: Response) {
		res.send("list events");
	},
	async update(req: Request, res: Response) {
		res.send("update event");
	},
	async delete(req: Request, res: Response) {
		res.send("delete event");
	},
	async getTeams(req: Request, res: Response) {
		res.send("get event teams");
	},
	async getMatches(req: Request, res: Response) {
		res.send("get event matches");
	},
};
