import User from "../models/User";

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
