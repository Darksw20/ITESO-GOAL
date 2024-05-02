import { Request, Response } from "express";
import Event from "../services/EventService";
import Court from "../services/CourtService";
import Team from "../services/TeamService";
import { CostExplorer } from "aws-sdk";

export default {
	async create(req: Request, res: Response) {
		const { name, start_date, end_date, ubication, allowed_number } = req.body;

		if (!name) {
			return res.status(400).json({ message: "Name is requiered" });
		}

		if (!start_date || !end_date) {
			return res
				.status(400)
				.json({ message: "Start and End date are required" });
		}

		if (!ubication) {
			return res.status(400).json({ message: "Ubication is required" });
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
		const eventId = Number(req.params.id);

		try {
			const response = await Event.getTeams(eventId);
			return res.json(response);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async getMatches(req: Request, res: Response) {
		const eventId = Number(req.params.id);

		try {
			const response = await Event.getMatches(eventId);
			return res.json(response);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async startEvent(req: Request, res: Response) {
		const teams = req.body.teams;
		const event = req.body.event;

		const errors: string[] = [];

		try {
			// Validations
			if (!teams) {
				return res.status(400).json({ message: "Teams are required" });
			}
			if (!event) {
				return res.status(400).json({ message: "Event is required" });
			}

			const eventRes = await Event.find(event);
			if (eventRes.error) {
				errors.push(eventRes.error);
			}

			// Obtener Matches
			const groupsNum = Math.ceil(teams.length / 4);

			var groups = Array.from({ length: groupsNum }, () => []);
			let i = 0;
			for (let team of teams) {
				groups[i].push(team as never);
				i++;
				if (i > groupsNum - 1) {
					i = 0;
				}
			}
			console.log("groups: ", groups);

			let teamMatches: Array<Array<[number, number]>> = Array.from(
				{ length: groupsNum },
				() => []
			);
			i = 0;
			for (const team of groups) {
				if (team.length == 4) {
					teamMatches[i].push([team[0], team[1]]);
					teamMatches[i].push([team[2], team[3]]);
					teamMatches[i].push([team[0], team[2]]);
					teamMatches[i].push([team[1], team[3]]);
					teamMatches[i].push([team[0], team[3]]);
					teamMatches[i].push([team[1], team[2]]);
				} else {
					teamMatches[i].push([team[0], team[1]]);
					teamMatches[i].push([team[0], team[2]]);
					teamMatches[i].push([team[1], team[2]]);
				}
				i++;
				if (i > groupsNum - 1) {
					i = 0;
				}
			}
			console.log("teams: ", teamMatches);

			if (errors.length > 0) {
				return res.status(400).json({ errors });
			}

			return res.status(200).json({
				message: "Matches created successfully",
			});
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
};
