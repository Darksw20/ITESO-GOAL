export default {
	verifyToken: (token: string) => {
		if (token === "123456") {
			return true;
		}
		return false;
	},
};
