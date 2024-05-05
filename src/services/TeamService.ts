import Team from "../models/Team";

export default {
	create: async (name: string, eventId: number) => {
		try {
			const team = await Team.create({
				name,
				fk_event: eventId
			});

			return team;
		} catch (e) {
			console.error(e);
			return {
				error: "Team not created",
			};
		}
	},
	find: async (id?: number) => {
		if (id) {
			const team = await Team.findByPk(id);

			if (!team) {
				return {
					error: "Team not found",
					id
				};
			}

			return {
				team: team,
			};
		}

		return {
			teams: await Team.findAll(),
		};
	},
	update: async (id: number, name?: string) => {
		try {
			const team = await Team.findByPk(id);
			if (!team) {
				return {
					error: "Team not found",
				};
			}

			const updatedTeam = {
				name: name || team.name,
			};

			await team.update(updatedTeam);
			return team;
		} catch (e) {
			console.error(e);
			return {
				error: "Team not updated",
			};
		}
	},
	delete: async (id: number) => {
		try {
			const team = await Team.findByPk(id);
			if (!team) {
				return {
					error: "Team not found",
				};
			}

			await team.destroy();

			return {
				message: "Team deleted",
			};
		} catch (e) {
			console.error(e);
			return {
				error: "Team not deleted",
			};
		}
	},
};
