import { Request, Response, NextFunction } from "express";
import AuthService from "../services/AuthService";
import JWTService from "../services/JWTService";
import { USER_ROLES } from "../config/enums";

export const authUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.jwt;

  if (!token || !AuthService.verifyToken(token as string)) {
    return res.status(401).send("Unauthorized");
  }
  next();
};

export const authRole = (role: USER_ROLES[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const decodedJWT = JWTService.decodeJWT(req.headers.jwt as string);
    const userType = decodedJWT.user_type;

    if (!role.includes(userType)) {
      return res.status(403).send("Unauthorized");
    }

    next();
  };
};
