import { Request, Response } from "express";
import Team from "../services/TeamService";
import User from "../services/UserService";
import TeamUser from "../services/TeamUserService";

export default {
	async create(req: Request, res: Response) {
		const { name, eventId } = req.body;
		try {
			if (!name) {
				return res.status(400).json({ message: "Name is required" });
			}

			if (!eventId) {
				return res.status(400).json({ message: "Event Id is required" });
			}

			const team = await Team.create(name, eventId);
			return res.json(team);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async get(req: Request, res: Response) {
		const id = Number(req.params.id);
		try {
			if (!id) {
				return res.status(400).json({ message: "Id of team is required" });
			}

			const team = await Team.find(id);

			// Check if team has error message
			if (team && "error" in team) {
				return res.status(404).json({ message: team.error });
			}

			return res.json(team);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async list(req: Request, res: Response) {
		try {
			const teams = await Team.list();

			return res.json({ teams });
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async update(req: Request, res: Response) {
		const id = Number(req.params.id);
		const { name } = req.body;
		try {
			if (!id) {
				return res.status(400).json({ message: "Id of team is required" });
			}

			const team = await Team.update(id, name);
			return res.json(team);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async delete(req: Request, res: Response) {
		const id = Number(req.params.id);
		try {
			if (!id) {
				return res.status(400).json({ message: "Id of team is required" });
			}

			const team = await Team.delete(id);
			return res.json(team);
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async getMembers(req: Request, res: Response) {
		try {
			const teamId = Number(req.params.id);
			const team = await Team.find(teamId);

			if (!team) {
				return res.status(404).send("Team not found");
			}

			const members = await TeamUser.find(undefined, teamId);

			return res.status(200).json(members);
		} catch (error) {
			console.error("Error fetching team members:", error);
			return res.status(500).send("Internal server error");
		}
	},
	async addMembers(req: Request, res: Response) {
		const code = req.params.id;
		const userIds = req.body.members;
		const errors: string[] = [];

		try {
			if (!code) {
				errors.push("Team Id is required");
			}
			if (!userIds || !userIds.length) {
				errors.push("User Ids are required");
			}

			const team = await Team.find(code, "code");
			if (team?.error) {
				return res.status(400).json({ message: team.error });
			}

			const users = await Promise.all(
				userIds.map(async (userId: any) => {
					const user = await User.find(userId);
					if (user.error) {
						errors.push(`User with ID ${userId} not found`);
					}
					return user;
				})
			);

			if (errors.length > 0) {
				return res.status(400).json({ errors });
			}

			const teamId = team?.team?.dataValues.id;

			await Promise.all(
				userIds.map(async (userId: any) => {
					const teamUser = await TeamUser.create(userId, Number(teamId), 1);
					if (teamUser.error) {
						errors.push(teamUser.error);
					}
				})
			);

			if (errors.length > 0) {
				return res.status(404).json({ errors });
			}

			return res.status(200).json({ message: "Members added successfully" });
		} catch (err: any) {
			console.error(err);
			return res.status(500).json({ message: err.message });
		}
	},
	async deleteMember(req: Request, res: Response) {
		const teamId = Number(req.params.id);
		const userIds: number[] = req.body.members;
		try {
			if (
				!teamId ||
				!userIds ||
				!Array.isArray(userIds) ||
				userIds.length === 0
			) {
				if (!teamId) {
					return res.status(400).json({ message: "Team Id is requiered" });
				}
				if (!userIds) {
					return res.status(400).json({ message: "User Ids are requiered" });
				}
				if (!Array.isArray(userIds) || userIds.length === 0) {
					return res.status(400).json({ message: "User Ids are requiered" });
				}
			}

			const team = await Team.find(teamId);
			if (!team) {
				return res.status(404).send("Team not found");
			}
			const promises = userIds.map(async (userId) => {
				const user = await User.find(userId);
				if (!user) {
					return res.status(404).send(`User with ID ${userId} not found`);
				}

				const userTeam = await TeamUser.delete(userId, teamId);
				return res.status(200).json({ message: userTeam });
			});
			await Promise.all(promises);

			return res.status(200).json({ message: "Members added successfully" });
		} catch (err: any) {
			console.log(err);
			return res.status(500).json({ message: err.message });
		}
	},
};
