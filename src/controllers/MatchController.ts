import { Request, Response } from "express";
import Match from "../services/MatchService";
import Event from "../services/EventService";
import Court from "../services/CourtService";
import Team from "../services/TeamService";

export default {
	async create(req: Request, res: Response) {
		const {start_date,end_date,fk_event,fk_court,fk_local,fk_visitor} = req.body;
		try {
			if(!fk_event) {
				return res.status(400).json({ message: 'Event Id required' });
			} else {
				const event = await Event.find(fk_event);
				if (event.error) return res.status(404).json(event);
			}

			if(!fk_court) {
				return res.status(400).json({ message: 'Court Id required' });
			} else {
				const court = await Court.find(fk_court);
				if (court.error) return res.status(404).json(court);
			}

			if(fk_local == fk_visitor) {
				return res.status(400).json({ message: 'Teams need to be different' });
			}

			if((!fk_local) || (!fk_visitor)) {
				return res.status(400).json({ message: 'Teams Id required' });
			} else {
				const team1 = await Team.find(fk_local);
				if (team1?.error) return res.status(404).json(team1);

				const team2 = await Team.find(fk_visitor);
				if (team2?.error) return res.status(404).json(team2);
			}

			if(!start_date || !end_date) {
				return res.status(400).json({ message: 'Start and end date required' });
			}

			const match = await Match.create(
				start_date,
				end_date,
				fk_event,
				fk_local,
				fk_visitor,
				fk_court
			);
			return res.json(match);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async get(req: Request, res: Response) {
		const id = Number(req.params.id);
		try {
			if (!id) {
				return res.status(400).json({ message: "Id of match is required" });
			}
		
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
		const { score_local,score_visitor,goals_local,goals_visitor,start_date,end_date } = req.body;
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
