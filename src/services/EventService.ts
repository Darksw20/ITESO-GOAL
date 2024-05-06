import { where } from "sequelize";
import Event from "../models/Event";
import Match from "../models/Match";

export default {
	create: async (
		name: string,
		start_date: Date,
		end_date: Date,
		ubication: string,
		allowed_number: number
	) => {
		try {
			const event = await Event.create({
				name,
				start_date,
				end_date,
				ubication,
				allowed_number,
			});

			return {
				id: event.id,
				event: event,
			};
		} catch (e) {
			console.error(e);
			return {
				error: "Event not registered",
			};
		}
	},
	find: async (id?: number) => {
		if (id) {
			const event = await Event.findByPk(id);

			if (!event) {
				return {
					error: "Event not found",
				};
			}

			return {
				event: event,
			};
		}

		return {
			events: await Event.findAll(),
		};
	},
	update: async (
		id: number,
		name?: string,
		start_date?: Date,
		end_date?: Date,
		ubication?: string,
		allowed_number?: number,
		end?: string
	) => {
		try {
			const event = await Event.findByPk(id);
			if (!event) {
				return {
					error: "Event not found",
				};
			}

			if(!end){
				const updateData = {
					name: name || event.name,
					start_date: start_date || event.start_date,
					end_date: end_date || event.end_date,
					ubication: ubication || event.ubication,
					allowed_number: allowed_number || event.allowed_number,
				};
	
				await event.update(updateData);
	
				return {
					status: 200,
					message: "Event updated successfully",
					event: event.toJSON(),
				};
			} else {
				const matches = await Match.findAll({where: {fk_event: id}})
				if (!matches){
					return{
						error: "Event not started"
					}
				} else {
					// Se tiene duda que se hara al termianr event, no existe columna para status
					// Como se calcula score
					return{
						status: 200,
						message: "Event ended"
					}
				}
			}
		} catch (error) {
			console.error(error);
			return {
				status: 500,
				error: "An error occurred while updating event",
			};
		}
	},
	delete: async (id: number) => {
		try {
			const event = await Event.findByPk(id);

			if (!event) {
				return {
					error: "Event not found",
				};
			}

			await event.destroy();

			return {
				message: "Event deleted successfully",
			};
		} catch (e) {
			console.error(e);
			return {
				error: "An error occurred while deleting event",
			};
		}
	},
	getTeams: async (id: number) => {
		try {
			const event = await Event.findByPk(id, {
				include: "teams",
			});

			if (!event) {
				return {
					error: "Event not found",
				};
			}

			return event;
		} catch (e) {
			console.error(e);
			return {
				error: "An error occurred while fetching teams",
			};
		}
	},
	getMatches: async (id: number) => {
		try {
			const event = await Event.findByPk(id, {
				include: "matches",
			});

			if (!event) {
				return {
					error: "Event not found",
				};
			}

			return event;
		} catch (e) {
			console.error(e);
			return {
				error: "An error occurred while fetching matches",
			};
		}
	},
};
