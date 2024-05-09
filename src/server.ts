import app from ".";
import sequelize from "./config/sequelize";
import { Server } from "http";
import { Socket } from "socket.io";

const httpServer: Server = require("http").createServer(app);
const PORT = process.env.NODE_ENV === "test" ? 3000 : process.env.PORT;

// Initialize socket.io with the httpServer instance
const io = require("socket.io")(httpServer);

// Socket Logic
io.on("connection", (socket: Socket) => {
	console.log("A user connected");

	// Handle the "analytics_updated" event
	socket.on("analytics_updated", (data: any) => {
		socket.broadcast.emit("update_front", data);
	});

	// Handle disconnection
	socket.on("disconnect", () => {
		console.log("A user disconnected");
	});
});

// Start the HTTP server
httpServer.listen(PORT, async () => {
	console.log(`Server is running on port ${PORT}`);
	try {
		await sequelize.authenticate();
		console.log("Database connection established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
});

export { io };
