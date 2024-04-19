import { Request, Response } from "express";
import Team from "../services/TeamService";

export default {
	async create(req: Request, res: Response) {
		const { name } = req.body;

		if (!name) {
			return res.status(400).json({ message: "Name is required" });
		}

		try {
			const team = await Team.create(name);
			return res.json(team);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async get(req: Request, res: Response) {
		const id = Number(req.params.id);

		if (!id) {
			return res.status(400).json({ message: "Id of team is required" });
		}

		try {
			const team = await Team.find(id);

			//check if team has error message
			if ((team as { error: string }).error) {
				return res
					.status(404)
					.json({ message: (team as { error: string }).error });
			}

			return res.json(team);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async list(req: Request, res: Response) {
		try {
			const teams = await Team.find();

			return res.json(teams);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async update(req: Request, res: Response) {
		const id = Number(req.params.id);
		const { name } = req.body;

		if (!id) {
			return res.status(400).json({ message: "Id of team is required" });
		}

		try {
			const team = await Team.update(id, name);
			return res.json(team);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async delete(req: Request, res: Response) {
		const id = Number(req.params.id);

		if (!id) {
			return res.status(400).json({ message: "Id of team is required" });
		}

		try {
			const team = await Team.delete(id);
			return res.json(team);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
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
