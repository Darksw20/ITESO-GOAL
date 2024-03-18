//create a jwt service
import jwt, { JwtPayload } from "jsonwebtoken";

const EXPIRE_TIME = "30m";

export default {
  signJWT(payload: object): string {
    return jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: EXPIRE_TIME,
    });
  },
  decodeJWT(token: string): jwt.JwtPayload {
    return jwt.decode(token) as JwtPayload;
  },
  // check if the token is valid based on the expiration date
  isValidJWT(decodedJWT: JwtPayload): boolean {
    if (!decodedJWT.exp) {
      return false;
    }
    return Date.now() < decodedJWT.exp * 1000;
  },
};
