import { Request, Response } from "express";
import Court from "../services/CourtService";

export default {
	async create(req: Request, res: Response) {
		const { place, status } = req.body;
		try {
			if (
				!place || !status
			) {
				return res.status(400).json({ message: "All fields are required" });
			}
			const court = await Court.create(
				place,
				status
			);
			return res.json(court);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async get(req: Request, res: Response) {
		const id = Number(req.params.id);
		try {
			if (!id) {
				return res.status(400).json({ message: "Id of court is required" });
			}
			
			const court = await Court.find(id);

			if (court.error) return res.status(404).json(court);

			return res.json(court);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async list(req: Request, res: Response) {
		try {
			const courts = await Court.find();

			return res.json(courts);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async update(req: Request, res: Response) {
		const courtId = Number(req.params.id);
		const { place, status } =
			req.body;

		try {
			const response = await Court.update(
				courtId,
				place,
				status
			);

			if (response.error) return res.status(404).json(response);

			return res.json(response);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async delete(req: Request, res: Response) {
		const courtId = Number(req.params.id);

		try {
			const response = await Court.delete(courtId);

			if (response.error) return res.status(404).json(response);

			return res.json(response);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	}
};
