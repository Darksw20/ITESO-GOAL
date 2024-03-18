import { Router } from "express";

import AuthController from "../controllers/AuthController";
import EventController from "../controllers/EventController";
import MatchController from "../controllers/MatchController";
import TeamController from "../controllers/TeamController";
import UserController from "../controllers/UserController";

import { authUser, authRole } from "../middlewares/Auths";

import User from "../models/User";

const router = Router();

// login
router.post("/auth", AuthController.login);

// register User
router.post("/register", UserController.register);

// logout
router.post("/logout", authUser, AuthController.logout);

// create User
router.post("/user", authUser, UserController.create);

// get User info

router.get("/user/:id", authUser, UserController.get);

// modify User info
router.patch("/user/:id", authUser, UserController.update);

//delete User
router.delete("/user/:id", authUser, UserController.delete);

// register Event
router.post("/event", authUser, EventController.create);

// get Events
router.get("/event", authUser, EventController.list);

// get Events
router.get("/event/:id", authUser, EventController.get);

// modify Event
router.patch("/event/:id", authUser, EventController.update);

// delete Event
router.delete("/event/:id", authUser, EventController.delete);

// get Teams per Event
router.get("/event/:id/teams", authUser, EventController.getTeams);

// get Matches per event
router.get("/event/:id/matches", authUser, EventController.getMatches);

// register Team
router.post("/team", authUser, TeamController.create);

// get Team Members
router.get("/team/:id/members", authUser, TeamController.getMembers);

// add Team Members
router.post("/team/:id/members", authUser, TeamController.addMembers);

// get Team Information
router.get("/team/:id", authUser, TeamController.get);

// modify Team
router.patch("/team/:id", authUser, TeamController.update);

// delete Team
router.delete("/team/:id", authUser, TeamController.delete);

// delete Team Member
router.delete("/team/:id/members", authUser, TeamController.deleteMember);

// register Match
router.post("/match", authUser, MatchController.create);

// get Match info
router.get("/match/:id", authUser, MatchController.get);

// modify Match
router.patch("/match/:id", authUser, MatchController.update);

// delete Match
router.delete("/match/:id", authUser, MatchController.delete);

router.get("/healthcheck", async (req: any, res: any) => {
	const user = await User.create({
		email: "test@test.com",
		username: "test",
		password: "password",
		first_name: "John",
		last_name: "Doe",
		birthday: new Date("1990-01-01"),
		user_type: "admin",
	});
	res.status(200).json({
		message: "Server is running",
		// user: user.toJSON(),
	});
});

export default router;
