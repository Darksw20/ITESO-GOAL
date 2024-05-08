import Court from "../models/Court";

export default {
	create: async (
		place: string,
		status: string
	) => {
		try {
			const court = await Court.create({
				place,
				status
			});

			return {
				court: court
			};
		} catch (e) {
			console.error(e);
			return {
				error: "Court not created",
			};
		}
	},
	find: async (id?: number) => {
		try {
			if (id) {
				const court = await Court.findByPk(id);

				if (!court) {
					return {
						error: "Court not found",
					};
				}

				return {
					court: court,
				};
			}

			return {
				courts: await Court.findAll(),
			};
		} catch (e) {
			console.error(e);
			return {
				error: "Court not created",
			};
		}
	},
	update: async (
		id: number,
		place?: string,
		status?: string
	) => {
		try {
			const court = await Court.findByPk(id);
			if (!court) {
				return {
					error: "Court not found",
				};
			}

			const updatedCourt = {
				place: place || court.place,
				status: status || court.status
			};

			await court.update(updatedCourt);
			return {
				id: court.id,
				court: court,
			};
		} catch (e) {
			console.error(e);
			return {
				error: "Court not updated",
			};
		}
	},
	delete: async (id: number) => {
		try {
			const court = await Court.findByPk(id);
			if (!court) {
				return {
					error: "Court not found",
				};
			}

			await court.destroy();

			return {
				message: "Court deleted",
			};
		} catch (e) {
			console.error(e);
			return {
				error: "Court not deleted",
			};
		}
	},
};
