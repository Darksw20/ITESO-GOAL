import { create } from "domain";
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
		const user = await User.create({
			email,
			password,
			first_name,
			last_name,
			birthday,
			user_type,
		});
		return user;
	},
	get: async () => {},
	update: async () => {},
	delete: async () => {},
};
