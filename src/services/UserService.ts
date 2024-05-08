import User from "../models/User";
import Court from "../models/Court";
import Match from "../models/Match";
import UserTeam from "../models/UserTeam";
import { Op,Sequelize } from "sequelize";

export default {
	create: async (
		email: string,
		password: string,
		first_name: string,
		last_name: string,
		birthday: Date,
		user_type: string
	) => {
		try {
			const user = await User.create({
				email,
				password,
				first_name,
				last_name,
				birthday,
				user_type,
			});

			const { password: _, ...userWithoutPassword } = user.toJSON();

			return {
				id: user.id,
				user: userWithoutPassword,
			};
		} catch (e) {
			console.error(e);
			return {
				error: "User not registered",
			};
		}
	},
	find: async (id?: number) => {
		if (id) {
			const user = await User.findByPk(id);
			if (!user) {
				return {
					error: "User not found",
				};
			}

			const userTeam = await UserTeam.findAll({
				where: {fk_user: id}
			})

			var tempArray: number[] = []
			if (userTeam) {
				for (const team of userTeam){
					tempArray.push(team.dataValues.fk_team)
				} 
				const matches = await Match.findAll({
					where: { [Op.or]: [{ fk_local: tempArray }, { fk_visitor: tempArray }], },
					order: [
						['start_date', 'ASC']
					]
				})
				
				if(matches.length>0){
					const matchId = matches[0].dataValues.id
					const court = await Court.findByPk(matches[0].dataValues.fk_court, {
						attributes: ['place']
					})
					const StartTime = matches[0].dataValues.start_date

					//Won Matches
					const matchesLocalWon = await Match.findAll({
						where: { fk_local: tempArray,  score_local: { [Op.gt]:  Sequelize.col('score_visitor')}}
					})
					const matchesVisitorWon = await Match.findAll({
						where: { fk_visitor: tempArray, score_visitor: { [Op.gt]:  Sequelize.col('score_local')} }
					})
					const won = matchesLocalWon.length + matchesVisitorWon.length

					//Lost Matches
					const matchesLocalLost = await Match.findAll({
						where: { fk_local: tempArray,  score_visitor: { [Op.gt]:  Sequelize.col('score_local')}}
					})
					const matchesVisitorLost = await Match.findAll({
						where: { fk_visitor: tempArray, score_local: { [Op.gt]:  Sequelize.col('score_visitor')} }
					})
					const lost = matchesLocalLost.length + matchesVisitorLost.length

					//Team Goals
					const matchesLocal = await Match.findAll({
						attributes: [
							[Sequelize.fn('SUM', Sequelize.col('goals_local')), 'total_score']
						],
						where: { fk_local: tempArray }
					})
					const matchesVisitor = await Match.findAll({
						attributes: [
							[Sequelize.fn('SUM', Sequelize.col('goals_visitor')), 'total_score']
						],
						where: { fk_visitor: tempArray }
					})
					const goals = Number(matchesLocal[0].dataValues.total_score || 0) + Number(matchesVisitor[0].dataValues.total_score || 0)

					return {
						user: user,
						matchId,
						court: court?.dataValues.place,
						StartTime,
						won,
						lost,
						goals
					};
				}
			} else {
				return {
					user: user,
					interface: "Your not enrolled in a team"
				};
			}

			return {
				user: user,
			};
		}

		return {
			users: await User.findAll(),
		};
	},
	update: async (
		id: number,
		email?: string,
		password?: string,
		first_name?: string,
		last_name?: string,
		birthday?: Date,
		user_type?: string
	) => {
		try {
			const user = await User.findByPk(id);
			if (!user) {
				return {
					error: "User not found",
				};
			}

			const updatedUser = {
				email: email || user.email,
				password: password || user.password,
				first_name: first_name || user.first_name,
				last_name: last_name || user.last_name,
				birthday: birthday || user.birthday,
				user_type: user_type || user.user_type,
			};

			await user.update(updatedUser);
			return {
				id: user.id,
				user: user,
			};
		} catch (e) {
			console.error(e);
			return {
				error: "User not updated",
			};
		}
	},
	delete: async (id: number) => {
		try {
			const user = await User.findByPk(id);
			if (!user) {
				return {
					error: "User not found",
				};
			}

			await user.destroy();

			return {
				message: "User deleted",
			};
		} catch (e) {
			console.error(e);
			return {
				error: "User not deleted",
			};
		}
	},
};
