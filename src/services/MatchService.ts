import Match from "../models/Match";
import Court from "../models/Court";
import { Op, Sequelize, where } from "sequelize";

export default {
	create: async (
		start_date: Date,
		end_date: Date,
		fk_event: number,
		fk_local: number,
		fk_visitor: number,
		fk_court?: number
	) => {
		try {
			var bussyCourts: number[] = []

			if (!fk_court){
				const matchs = await Match.findAll({
					where: {
						[Op.or]: [{start_date: { [Op.between]: [start_date, end_date] }}, {end_date: { [Op.between]: [start_date, end_date] }}]
					}
				})

				for ( const match of matchs){
					bussyCourts.push(match.dataValues.fk_court)
					if ((match.dataValues.fk_local == fk_local) || (match.dataValues.fk_visitor == fk_visitor) || (match.dataValues.fk_local == fk_visitor) || (match.dataValues.fk_visitor == fk_local)){
						return{
							error: "One team is busy",
							start_date,
							end_date,
							fk_event,
							fk_local,
							fk_visitor,
							fk_court
						}
					}
				}

				const courts = await Court.findOne({
					where: {
						id: { [Op.notIn]: bussyCourts }
					}
				})

				if (!courts){
					return{
						error: "No courts available"
					}
				}

				console.log("courts: ",courts?.dataValues.id)
				fk_court = courts?.dataValues.id;
			}

			const match = await Match.create({
				score_local: 0,
				score_visitor: 0,
				goals_local: 0,
				goals_visitor: 0,
				start_date,
				end_date,
				fk_event,
				fk_court,
				fk_local,
				fk_visitor
			});

			return {
				id: match.id,
				match: match
			};

		} catch (e) {
			console.error(e);
			return {
				error: "Match not created",
			};
		}
	},
	find: async (id?: number, eventId?: number) => {
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

		if (eventId) {
			const match = await Match.findAll({ where: { fk_event: eventId } });

			if (!match) {
				return {
					error: "Match not found from event",
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
