import { Request, Response } from "express";
import Event from "../services/EventService";
import Match from "../services/MatchService";
import Team from "../services/TeamService";
import { CostExplorer } from "aws-sdk";

export default {
	async create(req: Request, res: Response) {
		const { name, start_date, end_date, ubication, allowed_number } = req.body;
		try {
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
		try {
			if (!id) {
				return res.status(400).json({ message: "Id of event is required" });
			}

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
		const {teams,event} = req.body;

		const errors: string[] = [];
		const matches: string[] = [];

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

			if (teams.length < 6) {
				errors.push("To start event, 6 teams are needed")
			}

			for (const team of teams){
				const teamRes = await Team.find(team)
				if (teamRes?.error) {
					errors.push(team,": ",teamRes.error);
				}
			}
			
			if (errors.length > 0) {
				return res.status(400).json({ errors });
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

			var start_date = new Date(eventRes.event?.dataValues.start_date);
			var end_date = new Date(eventRes.event?.dataValues.start_date);
			end_date.setMinutes(end_date.getMinutes() + 45);

			for (const teams of teamMatches){
				for ( const match of teams){
					var matchError = -1;
					while(matchError == -1){
						const matchRes = await Match.create(
							new Date(start_date),
							new Date(end_date),
							eventRes.event?.dataValues.id,
							Number(match[0]),
							Number(match[1])
						);
						if (matchRes.error){
							console.log(matchRes)
							end_date.setMinutes(end_date.getMinutes() + 45);
							start_date.setMinutes(start_date.getMinutes() + 45);
						} else {
							matches.push(matchRes.id)
							matchError = 1;
							start_date = new Date(eventRes.event?.dataValues.start_date);
							end_date = new Date(eventRes.event?.dataValues.start_date);
							end_date.setMinutes(end_date.getMinutes() + 45);
						}
					}
				}
			}

			return res.status(200).json({
				message: "Matches created successfully",
				matches
			});
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async endEvent(req: Request, res: Response) {
		const { eventId } = req.body;

		try {
			const response = await Event.update(
				eventId,
				undefined,
				undefined,
				undefined,
				undefined,
				undefined,
				'Y'
			);

			if (response.error) return res.status(404).json(response);

			return res.json(response);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	}
};
