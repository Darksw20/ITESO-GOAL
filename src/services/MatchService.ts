import Match from "../models/Match";

export default {
	create: async (
		score_local: number,
		score_visitor: number,
		goals_local: number,
		goals_visitor: number,
		start_date: Date,
		end_date: Date
	) => {
		try {
			const match = await Match.create({
				score_local,
                score_visitor,
                goals_local,
                goals_visitor,
                start_date,
                end_date
			});

			return {
				id: match.id,
				match: match,
			};
		} catch (e) {
			console.error(e);
			return {
				error: "Match not created",
			};
		}
	},
	find: async (id?: number) => {
		if (id) {
			const match = await Match.findByPk(id);

			if (!match) {
				return {
					error: "Match not found",
				};
			}

			return {
				match: match,
			};
		}

		return {
			match: await Match.findAll(),
		};
	},
	update: async (
		id: number,
		score_local?: number,
		score_visitor?: number,
		goals_local?: number,
		goals_visitor?: number,
		start_date?: Date,
		end_date?: Date
	) => {
		try {
			const match = await Match.findByPk(id);
			if (!match) {
				return {
					error: "Match not found",
				};
			}

			const updatedMatch = {
                score_local: score_local || match.score_local,
                score_visitor: score_visitor || match.score_visitor,
                goals_local: goals_local || match.goals_local,
                goals_visitor: goals_visitor || match.goals_visitor,
                start_date: start_date || match.start_date,
                end_date: end_date  || match.end_date
			};

			await match.update(updatedMatch);
			return {
				id: match.id,
				match: match,
			};
		} catch (e) {
			console.error(e);
			return {
				error: "Match not updated",
			};
		}
	},
	delete: async (id: number) => {
		try {
			const match = await Match.findByPk(id);
			if (!match) {
				return {
					error: "Match not found",
				};
			}

			await match.destroy();

			return {
				message: "Match deleted",
			};
		} catch (e) {
			console.error(e);
			return {
				error: "Match not deleted",
			};
		}
	},
};
