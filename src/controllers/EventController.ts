import { Request, Response } from "express";
import Event from "../services/EventService";
import Court from "../services/CourtService";

export default {
	async create(req: Request, res: Response) {
		const { name, start_date, end_date, ubication, allowed_number } = req.body;

		if (!name) {
			return res.status(400).json({ message: "Name is requiered" });
		}

		if (!start_date || !end_date){
			return res
				.status(400)
				.json({ message: "Start and End date are required" });
		}

		if (!ubication) {
			return res.status(400).json({ message: "Ubication is required" });
		} else {
			const court = await Court.find(ubication);

			if (court.error) return res.status(404).json(court);
		}

		if (!allowed_number) {
			return res
				.status(400)
				.json({ message: "Number of players is requiered" });
		}

		try {
			const response = await Event.create(
				name,
				start_date,
				end_date,
				ubication,
				allowed_number
			);
			return res.json(response);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async get(req: Request, res: Response) {
		const id = Number(req.params.id);

		if (!id) {
			return res.status(400).json({ message: "Id of event is required" });
		}

		try {
			const response = await Event.find(id);

			if (response.error) return res.status(404).json(response);

			return res.json(response);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async list(req: Request, res: Response) {
		try {
			const response = await Event.find();
			return res.json(response);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async update(req: Request, res: Response) {
		const eventId = Number(req.params.id);
		const { name, start_date, end_date, ubication, allowed_number } = req.body;

		try {
			const response = await Event.update(
				eventId,
				name,
				start_date,
				end_date,
				ubication,
				allowed_number
			);

			if (response.error) return res.status(404).json(response);

			return res.json(response);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async delete(req: Request, res: Response) {
		const eventId = Number(req.params.id);

		try {
			const response = await Event.delete(eventId);

			if (response.error) return res.status(404).json(response);

			return res.json(response);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async getTeams(req: Request, res: Response) {
		res.send("get event teams");
	},
	async getMatches(req: Request, res: Response) {
		res.send("get event matches");
	},
};
