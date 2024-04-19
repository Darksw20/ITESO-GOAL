import { Request, Response } from "express";
import Match from "../services/MatchService";

export default {
	async create(req: Request, res: Response) {
		const {score_local,score_visitor,goals_local,goals_visitor,start_date,end_date} = req.body;
		
		if(
			!score_local||
			!score_visitor||
			!goals_local||
			!goals_visitor||
			!start_date||
			!end_date
		) {
			return res.status(400).json({ message: "All fields are required" });
		}

		try {
			const match = await Match.create(
				score_local,
				score_visitor,
				goals_local,
				goals_visitor,
				start_date,
				end_date
			);
			return res.json(match);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async get(req: Request, res: Response) {
		const id = Number(req.params.id);

		if (!id) {
			return res.status(400).json({ message: "Id of match is required" });
		}

		try {
			const match = await Match.find(id);

			if (match.error) return res.status(404).json(match);

			return res.json(match);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async update(req: Request, res: Response) {
		const matchId = Number(req.params.id);
		const { score_local,score_visitor,goals_local,goals_visitor,start_date,end_date } =
			req.body;
		try {
			const response = await Match.update(
				matchId,
				score_local,
				score_visitor,
				goals_local,
				goals_visitor,
				start_date,
				end_date
			);

			if (response.error) return res.status(404).json(response);

			return res.json(response);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async delete(req: Request, res: Response) {
		const matchId = Number(req.params.id);

		try {
			const response = await Match.delete(matchId);

			if (response.error) return res.status(404).json(response);

			return res.json(response);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
};
