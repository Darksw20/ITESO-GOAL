import User from "../models/User";
import JWTService from "./JWTService";

export default {
  verifyToken: (token: string) => {
    try {
      const decodedJWT = JWTService.decodeJWT(token);

      if (!JWTService.isValidJWT(decodedJWT)) {
        return false;
      }
    } catch (e) {
      console.error(e);
      return false;
    }
    return true;
  },
  login: async (email: string, password: string) => {
    try {
      const user = await User.findOne({ where: { email, password } });

      if (!user) {
        return {
          error: "User not found",
        };
      }
      const { password: _, ...userWithoutPassword } = user.toJSON();

      const jwt = await JWTService.signJWT(userWithoutPassword);

      return {
        token: jwt,
        user: user.toJSON(),
      };
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
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return {
          error: "User already exists",
        };
      }

      const user = await User.create({
        email,
        password,
        first_name,
        last_name,
        birthday,
        user_type,
      });

      const { password: _, ...userWithoutPassword } = user.toJSON();

      const jwt = await JWTService.signJWT(userWithoutPassword);

      return {
        token: jwt,
        user: userWithoutPassword,
      };
    } catch (e) {
      console.error(e);
    }
    return {
      error: "User not registered",
    };
  },
};
