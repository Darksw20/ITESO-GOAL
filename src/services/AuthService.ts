import User from "../models/User";

export default {
  verifyToken: (token: string) => {
    if (token === "123456") {
      return true;
    }
    return false;
  },
  login: async (email: string, password: string) => {
    try {
      const user = await User.findOne({ where: { email, password } });
      if (user) {
        return {
          token: "123456",
          user: user.toJSON(),
        };
      }
    } catch (e) {
      console.error(e);
    }
    return {
      error: "User not found",
    };
  },
  register: async (
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
      return {
        token: "123456",
        user: user.toJSON(),
      };
    } catch (e) {
      console.error(e);
    }
    return {
      error: "User not registered",
    };
  },
};
