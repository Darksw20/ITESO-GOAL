import User from "../models/User";
import Court from "../models/Court";
import Match from "../models/Match";
import Event from "../models/Event";
import UserTeam from "../models/UserTeam";
import { Op, Sequelize } from "sequelize";
import Team from "../models/Team";
import { get } from "http";

const getWins = async (id: number) => {
	const user = await User.findByPk(id);
	if (!user) {
		return {
			error: "User not found",
		};
	}
	const teams = await Team.findAll({
		include: [
			{
				model: User,
				as: "users",
				where: { id: user.id },
				through: { attributes: [] },
			},
		],
	});

	var tempArray: number[] = [];

	if (teams.length === 0) {
		return {
			error: "User not enrolled in a team",
		};
	}

	for (const team of teams) {
		tempArray.push(team.dataValues.id);
	}

	const matchesLocalWon = await Match.findAll({
		where: {
			fk_local: tempArray,
			score_local: { [Op.gt]: Sequelize.col("score_visitor") },
		},
	});

	const matchesVisitorWon = await Match.findAll({
		where: {
			fk_visitor: tempArray,
			score_visitor: { [Op.gt]: Sequelize.col("score_local") },
		},
	});

	const won = matchesLocalWon.length + matchesVisitorWon.length;

	return won;
};

const getLoses = async (id: number) => {
	const user = await User.findByPk(id);
	if (!user) {
		return {
			error: "User not found",
		};
	}
	const teams = await Team.findAll({
		include: [
			{
				model: User,
				as: "users",
				where: { id: user.id },
				through: { attributes: [] },
			},
		],
	});

	var tempArray: number[] = [];

	if (teams.length === 0) {
		return {
			error: "User not enrolled in a team",
		};
	}

	for (const team of teams) {
		tempArray.push(team.dataValues.id);
	}

	const matchesLocalLost = await Match.findAll({
		where: {
			fk_local: tempArray,
			score_visitor: { [Op.gt]: Sequelize.col("score_local") },
		},
	});

	const matchesVisitorLost = await Match.findAll({
		where: {
			fk_visitor: tempArray,
			score_local: { [Op.gt]: Sequelize.col("score_visitor") },
		},
	});

	const lost = matchesLocalLost.length + matchesVisitorLost.length;

	return lost;
};

const getGoals = async (id: number) => {
	const user = await User.findByPk(id);
	if (!user) {
		return {
			error: "User not found",
		};
	}
	const teams = await Team.findAll({
		include: [
			{
				model: User,
				as: "users",
				where: { id: user.id },
				through: { attributes: [] },
			},
		],
	});

	var tempArray: number[] = [];

	if (teams.length === 0) {
		return {
			error: "User not enrolled in a team",
		};
	}

	for (const team of teams) {
		tempArray.push(team.dataValues.id);
	}

	const matchesLocal = await Match.findAll({
		attributes: [
			[Sequelize.fn("SUM", Sequelize.col("goals_local")), "total_score"],
		],
		where: { fk_local: tempArray },
	});

	const matchesVisitor = await Match.findAll({
		attributes: [
			[Sequelize.fn("SUM", Sequelize.col("goals_visitor")), "total_score"],
		],
		where: { fk_visitor: tempArray },
	});

	const goals =
		Number(matchesLocal[0].dataValues.total_score || 0) +
		Number(matchesVisitor[0].dataValues.total_score || 0);

	return goals;
};

const getNextMatch = async (id: number) => {
	const user = await User.findByPk(id);

	if (!user) {
		return {
			error: "User not found",
		};
	}

	const userTeam = await UserTeam.findAll({
		where: { fk_user: id },
	});

	var tempArray: number[] = [];

	if (userTeam.length === 0) {
		return {
			error: "User not enrolled in a team",
		};
	}

	for (const team of userTeam) {
		tempArray.push(team.dataValues.fk_team);
	}
	const matches = await Match.findAll({
		where: {
			[Op.or]: [{ fk_local: tempArray }, { fk_visitor: tempArray }],
		},
		order: [["start_date", "ASC"]],
	});

	if (matches.length === 0) {
		return {
			error: "No matches found",
		};
	}

	const matchId = matches[0].dataValues.id;
	const court = await Court.findByPk(matches[0].dataValues.fk_court, {
		attributes: ["place"],
	});
	const StartTime = matches[0].dataValues.start_date;

	const localTeam = await Team.findByPk(matches[0].dataValues.fk_local, {
		attributes: ["name", "id"],
	});
	const visitorTeam = await Team.findByPk(matches[0].dataValues.fk_visitor, {
		attributes: ["name", "id"],
	});

	let next_match = "";

	console.log("LOCAL", localTeam, tempArray);
	console.log("Visitor", visitorTeam, tempArray);

	if (localTeam && tempArray.includes(localTeam.id)) {
		next_match = localTeam.dataValues.name;
	}

	if (visitorTeam && tempArray.includes(visitorTeam.id)) {
		next_match = visitorTeam.dataValues.name;
	}

	return {
		court: court?.dataValues.place,
		start_time: StartTime,
		next_match: next_match,
	};
};

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
				where: { fk_user: id },
			});

			var tempArray: number[] = [];
			if (userTeam) {
				for (const team of userTeam) {
					tempArray.push(team.dataValues.fk_team);
				}
				const matches = await Match.findAll({
					where: {
						[Op.or]: [{ fk_local: tempArray }, { fk_visitor: tempArray }],
					},
					order: [["start_date", "ASC"]],
				});

				if (matches.length > 0) {
					const matchId = matches[0].dataValues.id;
					const court = await Court.findByPk(matches[0].dataValues.fk_court, {
						attributes: ["place"],
					});
					const StartTime = matches[0].dataValues.start_date;

					//Won Matches
					const matchesLocalWon = await Match.findAll({
						where: {
							fk_local: tempArray,
							score_local: { [Op.gt]: Sequelize.col("score_visitor") },
						},
					});
					const matchesVisitorWon = await Match.findAll({
						where: {
							fk_visitor: tempArray,
							score_visitor: { [Op.gt]: Sequelize.col("score_local") },
						},
					});
					const won = matchesLocalWon.length + matchesVisitorWon.length;

					//Lost Matches
					const matchesLocalLost = await Match.findAll({
						where: {
							fk_local: tempArray,
							score_visitor: { [Op.gt]: Sequelize.col("score_local") },
						},
					});
					const matchesVisitorLost = await Match.findAll({
						where: {
							fk_visitor: tempArray,
							score_local: { [Op.gt]: Sequelize.col("score_visitor") },
						},
					});
					const lost = matchesLocalLost.length + matchesVisitorLost.length;

					//Team Goals
					const matchesLocal = await Match.findAll({
						attributes: [
							[
								Sequelize.fn("SUM", Sequelize.col("goals_local")),
								"total_score",
							],
						],
						where: { fk_local: tempArray },
					});
					const matchesVisitor = await Match.findAll({
						attributes: [
							[
								Sequelize.fn("SUM", Sequelize.col("goals_visitor")),
								"total_score",
							],
						],
						where: { fk_visitor: tempArray },
					});
					const goals =
						Number(matchesLocal[0].dataValues.total_score || 0) +
						Number(matchesVisitor[0].dataValues.total_score || 0);

					return {
						user: user,
						matchId,
						court: court?.dataValues.place,
						StartTime,
						won,
						lost,
						goals,
					};
				}
			} else {
				return {
					user: user,
					interface: "Your not enrolled in a team",
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
	getEvents: async (id: number) => {
		try {
			// Step 1: Find the user by its ID
			const user = await User.findByPk(id);
			if (!user) {
				return {
					error: "User not found",
				};
			}

			// Step 2: Join Team table on fk_event
			const teams = await Team.findAll({
				include: [
					{
						model: User,
						as: "users",
						where: { id: user.id },
						through: { attributes: [] }, // This ensures no additional attributes are retrieved from the UserTeam join table
					},
				],
			});

			// Step 3: Extract events from the teams
			const events = teams.flatMap((team) => {
				return team;
			});

			if (events.length === 0) {
				return {
					error: "No events found for the user",
				};
			}

			return {
				events,
			};
		} catch (error) {
			console.error(error);
			return {
				error: "Error retrieving events",
			};
		}
	},
	getDashboard: async (id: number) => {
		const { court, start_time, next_match } = await getNextMatch(id);

		return {
			wins: await getWins(id),
			loses: await getLoses(id),
			court: court,
			start_time: start_time,
			next_match: next_match,
			goals: await getGoals(id),
		};
	},
};
