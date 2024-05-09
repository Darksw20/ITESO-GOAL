import { Request, Response, NextFunction } from "express";
import { io } from "../server";

// Middleware function to emit a broadcast on every request
export const emitBroadcast = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// Emit the broadcast
	io.emit("endpoint_hit", { endpoint: req.path, method: req.method });
	// Continue to the next middleware or route handler
	next();
};
