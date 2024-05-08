import UserTeam from "../models/UserTeam";
import Match from "../models/Match";
import Event from "../models/Event";
import { error } from "console";

export default {
	create: async (userId: number, teamId: number, teamMembers: number) => {
		try {
			if (!teamId){
				return{
					error: "Team id is required"
				}
			}
			if (!userId){
				return{
					error: "User id is required"
				}
			}
			if (!teamMembers){
				return{
					error: "Number of members is required"
				}
			}
			
			const numMembers = await UserTeam.findAll({ where: { fk_team: teamId } });
			if(!numMembers){
				return{
					error: "Error finding team"
				}
			}
			
			const localTeams = await Match.findAll({ where: { fk_local: teamId } });
			if(!localTeams){
				return{
					error: "error finding match"
				}
			}
			
			for (const match of localTeams) {
				const eventLocal = await Event.findByPk(match.dataValues.fk_event);
				if (
					eventLocal &&
					eventLocal?.dataValues.allowed_number <
						numMembers.length + teamMembers
				) {
					return {
						error: `User ${userId} not added, exceeds maximum players`,
					};
				}
				const localTeam = await UserTeam.findAll({
					where: { fk_user: userId, fk_team: match.dataValues.fk_visitor },
				});
				if (localTeam.length > 0) {
					return {
						error: `User ${userId} is in opposite team`,
					};
				}
			}

			const visitorTeams = await Match.findAll({where: { fk_visitor: teamId } });
			if(!visitorTeams){
				return{
					error: "error finding match"
				}
			}
			for (const match of visitorTeams) {
				const eventVisitor = await Event.findByPk(match.dataValues.fk_event);
				if (
					eventVisitor &&
					eventVisitor?.dataValues.allowed_number <
						numMembers.length + teamMembers
				) {
					return {
						error: `User ${userId} not added, exceeds maximum players`,
					};
				}
				const visitorTeam = await UserTeam.findAll({
					where: { fk_user: userId, fk_team: match.dataValues.fk_local },
				});
				if (visitorTeam.length > 0) {
					return {
						error: `User ${userId} is in opposite team`,
					};
				}
			}
			const userTeam = await UserTeam.create({
				fk_user: userId,
				fk_team: teamId,
			});

			return {
				userTeam: userTeam
			};
		} catch (e) {
			console.error(e);
			return {
				error: "User not registered to team",
			};
		}
	},
	find: async (userId?: number, teamId?: number, id?: number) => {
		try {
			if (id) {
				const userTeam = await UserTeam.findByPk(id);
				if (!userTeam) {
					return { error: "UserTeam not found" };
				}
				return { userTeam: userTeam };
			}

			if (userId && teamId) {
				const userTeam = await UserTeam.findAll({
					where: { fk_user: userId, fk_team: teamId },
				});
				if (userTeam.length === 0) {
					return { error: "No results for the specified user and team" };
				}
				return { userTeam: userTeam };
			}

			if (userId) {
				const userTeam = await UserTeam.findAll({ where: { fk_user: userId } });
				if (userTeam.length === 0) {
					return { error: "No teams found for the specified user" };
				}
				return { userTeam: userTeam };
			}

			if (teamId) {
				const userTeam = await UserTeam.findAll({ where: { fk_team: teamId } });
				if (userTeam.length === 0) {
					return { error: "No user found for the specified team" };
				}
				return { userTeam: userTeam };
			}

			return { userTeams: await UserTeam.findAll() };
		} catch (error) {
			console.error("Error fetching user team:", error);
			return { error: "Internal server error" };
		}
	},
	delete: async (userId: number, teamId: number) => {
		try {
			await UserTeam.destroy({ where: { fk_user: userId, fk_team: teamId } });

			return {
				message: "UserTeam deleted",
			};
		} catch (e) {
			console.error(e);
			return {
				error: "UserTeam not deleted",
			};
		}
	},
};
