import { Router } from "express";

import AuthController from "../controllers/AuthController";
import EventController from "../controllers/EventController";
import MatchController from "../controllers/MatchController";
import TeamController from "../controllers/TeamController";
import UserController from "../controllers/UserController";

import { authUser, authRole } from "../middlewares/Auth";

import { USER_ROLES } from "../config/enums";

const router = Router();

// login
router.post("/auth", AuthController.login);
/**
 * @swagger
 * /api/auth:
 *  post:
 *    summary: Login User
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - User
 *    responses:
 *      200:
 *        description: User login succesfull
 */

// register User
router.post("/register", AuthController.register);
/**
 * @swagger
 * /api/register:
 *  post:
 *    summary: Create User
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - User
 *    responses:
 *      200:
 *        description: User created succesfully
 */

// logout
router.post("/logout", authUser, AuthController.logout);
/**
 * @swagger
 * /api/logout:
 *  post:
 *    summary: Logout User
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - User
 *    responses:
 *      200:
 *        description: User session closed
 */

// create User
router.post("/user", authUser, UserController.create);
/**
 * @swagger
 * /api/user:
 *  post:
 *    summary: Create User
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - User
 *    responses:
 *      200:
 *        description: User created succesfully
 */

// get User info
router.get("/user/:id", authUser, UserController.get);
/**
 * @swagger
 * /api/user/:id:
 *  get:
 *    summary: Get User information
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - User
 *    responses:
 *      200:
 *        description: User found
 */

// modify User info
router.patch("/user/:id", authUser, UserController.update);
/**
 * @swagger
 * /api/user/:id:
 *  patch:
 *    summary: Modify User Info
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - User
 *    responses:
 *      200:
 *        description: User altered succesfully
 */

//delete User
router.delete("/user/:id", authUser, UserController.delete);
/**
 * @swagger
 * /api/user/:id:
 *  delete:
 *    summary: Delete User by ID
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - User
 *    responses:
 *      200:
 *        description: User removed succesfully
 */

// register Event
router.post("/event", authUser, EventController.create);
/**
 * @swagger
 * /api/event:
 *  post:
 *    summary: Create Event
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - Event
 *    responses:
 *      200:
 *        description: Event created succesfully
 */

// get Events
router.get("/event", authUser, EventController.list);
/**
 * @swagger
 * /api/event:
 *  get:
 *    summary: Get all Events
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - Event
 *    responses:
 *      200:
 *        description: Events obtained
 */

// get Events
router.get("/event/:id", authUser, EventController.get);
/**
 * @swagger
 * /api/event/:id:
 *  get:
 *    summary: Get event by ID
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - Event
 *    responses:
 *      200:
 *        description: Event found
 */

// modify Event
router.patch("/event/:id", authUser, EventController.update);
/**
 * @swagger
 * /api/event/:id:
 *  patch:
 *    summary: Modify event by ID
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - Event
 *    responses:
 *      200:
 *        description: Event modified
 */

// delete Event
router.delete("/event/:id", authUser, EventController.delete);
/**
 * @swagger
 * /api/event/:id:
 *  delete:
 *    summary: Delete event by ID
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - Event
 *    responses:
 *      200:
 *        description: Event deleted
 */

// get Teams per Event
router.get("/event/:id/teams", authUser, EventController.getTeams);
/**
 * @swagger
 * /api/event/:id/teams:
 *  get:
 *    summary: Get teams from event
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - Event
 *    responses:
 *      200:
 *        description: Teams found
 */

// get Matches per event
router.get("/event/:id/matches", authUser, EventController.getMatches);
/**
 * @swagger
 * /api/event/:id/matches:
 *  get:
 *    summary: Obtain matches from event
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - Event
 *    responses:
 *      200:
 *        description: Matches found
 */

// register Team
router.post("/team", authUser, TeamController.create);
/**
 * @swagger
 * /api/team:
 *  post:
 *    summary: Create new teamm
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - Teams
 *    responses:
 *      200:
 *        description: Team created
 */

// get Team Members
router.get("/team/:id/members", authUser, TeamController.getMembers);
/**
 * @swagger
 * /api/team/:id/members:
 *  get:
 *    summary: Get members from a team
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - Teams
 *    responses:
 *      200:
 *        description: User created succesfully
 */

// add Team Members
router.post("/team/:id/members", authUser, TeamController.addMembers);
/**
 * @swagger
 * /api/team/:id/members:
 *  post:
 *    summary: Add memeber to team
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - Team
 *    responses:
 *      200:
 *        description: User created succesfully
 */

// get Team Information
router.get("/team/:id", authUser, TeamController.get);
/**
 * @swagger
 * /api/team/:id:
 *  get:
 *    summary: Get team details
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - Team
 *    responses:
 *      200:
 *        description: User created succesfully
 */

// modify Team
router.patch("/team/:id", authUser, TeamController.update);
/**
 * @swagger
 * /api/team/:id:
 *  pospatcht:
 *    summary: Modify a team
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - Team
 *    responses:
 *      200:
 *        description: User created succesfully
 */

// delete Team
router.delete("/team/:id", authUser, TeamController.delete);
/**
 * @swagger
 * /api/team/:id:
 *  delete:
 *    summary: Delete a team
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - Team
 *    responses:
 *      200:
 *        description: User created succesfully
 */

// delete Team Member
router.delete("/team/:id/members", authUser, TeamController.deleteMember);
/**
 * @swagger
 * /api/team/:id/members:
 *  delete:
 *    summary: Delete member from team
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - Team
 *    responses:
 *      200:
 *        description: User created succesfully
 */

// register Match
router.post("/match", authUser, MatchController.create);
/**
 * @swagger
 * /api/match:
 *  post:
 *    summary: Create new watch
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - Match
 *    responses:
 *      200:
 *        description: User created succesfully
 */

// get Match info
router.get("/match/:id", authUser, MatchController.get);
/**
 * @swagger
 * /api/match/:id:
 *  get:
 *    summary: Obtain match details
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - Match
 *    responses:
 *      200:
 *        description: User created succesfully
 */

// modify Match
router.patch("/match/:id", authUser, MatchController.update);
/**
 * @swagger
 * /api/match/:id:
 *  patch:
 *    summary: Modify a match
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - Match
 *    responses:
 *      200:
 *        description: User created succesfully
 */

// delete Match
router.delete("/match/:id", authUser, MatchController.delete);
/**
 * @swagger
 * /api/match/:id:
 *  delete:
 *    summary: Cancel a match
 *    security:
 *      - apiAuth: []
 *    tags:
 *      - Match
 *    responses:
 *      200:
 *        description: User created succesfully
 */

router.get(
  "/healthcheck",
  authUser,
  authRole([USER_ROLES.USER, USER_ROLES.ORGANIZER]),
  async (req: any, res: any) => {
    res.status(200).json({
      message: "Server is running",
    });
  }
);

export default router;

/**
 * @swagger
 * components:
 *  securitySchemes:
 *    apiAuth:
 *      type: apikey
 *      in: header
 *      name: secret
 */