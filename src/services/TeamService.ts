import { integer } from "aws-sdk/clients/cloudfront";
import Team from "../models/Team";
import { error } from "console";
import { where } from "sequelize";

const generateCode = (length: integer) =>{
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
	  result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

export default {
	create: async (name: string, eventId: number) => {
		try {
			const code = generateCode(10)
			const team = await Team.create({
				name,
				fk_event: eventId,
				code
			});

			return team;
		} catch (e) {
			console.error(e);
			return {
				error: "Team not created",
			};
		}
	},
	find: async (value?: any, column?: string) => {
		try {
      if(!column){
        if (value) {
          const team = await Team.findByPk(value);

          if (!team) {
            return {
              error: "Team not found",
              value
            };
          }

          return {
            team: team,
          };
        }
      } else {
        if (value) {
          const team = await Team.findOne({where: {code: value}});

          if (!team) {
            return {
              error: "Team not found",
              value
            };
          }

          return {
            team: team,
          };
        }
			
		} catch (e) {
			console.error(e);
			return {
				error: "Error finding team",
			};
		}


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
