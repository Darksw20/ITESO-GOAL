import { Request, Response, NextFunction } from "express";
import AuthService from "../services/AuthService";
import JWTService from "../services/JWTService";
import { USER_ROLES } from "../config/enums";

import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import session from 'express-session';

export const authUser = (req: Request, res: Response, next: NextFunction) => {
	const token = req.headers.jwt;

	if (!AuthService.verifyToken(token as string)) {
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

export const googleAuth = (app) => {
    passport.use(
        new GoogleStrategy(
          {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL
          },
          (accessToken, refreshToken, profile, cb) => {
            // This callback will be called after Google's authentication process
            // You can perform user validation or save user data to the database here
            console.log('User profile:', profile);
            return cb(null, profile);
          }
        )
    );
    
    passport.serializeUser((user, cb) => {
        cb(null, user);  
    });
      
    passport.deserializeUser((user, cb) => {
        cb(null, user);
    });

    app.use(session({
        resave: false,
        saveUninitialized: true,
        secret: process.env.GOOGLE_CLIENT_SECRET 
    }));
    
    // Initialize Passport and restore authentication state if available from the session
    app.use(passport.initialize());
    app.use(passport.session());
}