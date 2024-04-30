import UserTeam from "../models/UserTeam";
import Match from "../models/Match";

export default {
	create: async (
		userId: number, teamId: number
	) => {
		try {
			const Matches = await Match.findAll({ where: { $or:[{ fk_local: teamId,fk_visitor: teamId }] } });
			//if (Matches) {
				//if (!Matches) {
					return { error: Matches };
				//}
				//return { userTeam: Matches };
			//}

			const userTeam = await UserTeam.create({
				fk_user: userId,
				fk_team: teamId
			});

			return {
				id: userTeam.id,
				userTeam: userTeam,
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
				const userTeam = await UserTeam.findAll({ where: { fk_user: userId, fk_team: teamId } });
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
