import { describe, expect, test } from "@jest/globals";
import { agent } from "supertest";
import server from "../../index";
import sequelize from "../../config/sequelize"; // Import your Sequelize instance
import Event from "../../models/Event"; // Import your Event model

// Mock the AuthService module and its verifyToken method
jest.mock("../../services/AuthService", () => ({
	verifyToken: jest.fn().mockReturnValue(true),
}));

describe("Testing EventController endpoints", () => {
	beforeAll(async () => {
		// Connect to the testing database before running the tests
		await sequelize.sync({ force: true }); // Sync models with the database and drop existing tables
	});

	afterAll(async () => {
		// Close the connection to the testing database after running the tests
		await sequelize.close();
	});

	describe("create", () => {
		test("With valid data, should create event", async () => {
			const request = agent(server);
			const response = await request.post("/api/event").send({
				name: "Test Event",
				start_date: new Date(),
				end_date: new Date(),
				ubication: "Test Location",
				allowed_number: 100,
			});

			expect(response.status).toBe(200);
			expect(response.body.event).toBeDefined();
		});

		test("With missing required fields, should return error", async () => {
			const request = agent(server);
			const response = await request.post("/api/event").send({
				name: "Test Event",
			});

			expect(response.status).toBe(400);
			expect(response.body.message).toBe("Ubication is required");
		});
	});

	describe("get", () => {
		test("With valid id, should get event", async () => {
			const newEvent = await Event.create({
				name: "Test Event",
				start_date: new Date(),
				end_date: new Date(),
				ubication: "Test Location",
				allowed_number: 100,
			});

			const request = agent(server);
			const response = await request.get(`/api/event/${newEvent.id}`);

			expect(response.status).toBe(200);
			expect(response.body.event).toBeDefined();
		});

		test("With invalid id, should return error", async () => {
			const request = agent(server);
			const response = await request.get("/api/event/999");

			expect(response.status).toBe(404);
			expect(response.body.error).toBe("Event not found");
		});
	});

	describe("list", () => {
		test("Should return list of events", async () => {
			const request = agent(server);
			const response = await request.get("/api/event");

			expect(response.status).toBe(200);
			expect(response.body.events).toBeDefined();
			expect(response.body.events.length).toBeGreaterThanOrEqual(0);
		});
	});

	describe("update", () => {
		test("With valid id and data, should update event", async () => {
			const newEvent = await Event.create({
				name: "Test Event",
				start_date: new Date(),
				end_date: new Date(),
				ubication: "Test Location",
				allowed_number: 100,
			});

			const request = agent(server);
			const response = await request.patch(`/api/event/${newEvent.id}`).send({
				name: "Updated Event",
				start_date: new Date(),
				end_date: new Date(),
				ubication: "Updated Location",
				allowed_number: 200,
			});

			expect(response.status).toBe(200);
			expect(response.body.event).toBeDefined();
		});

		test("With invalid id, should return error", async () => {
			const request = agent(server);
			const response = await request.patch("/api/event/999").send({
				name: "Updated Event",
				start_date: new Date(),
				end_date: new Date(),
				ubication: "Updated Location",
				allowed_number: 200,
			});

			expect(response.status).toBe(404);
			expect(response.body.error).toBe("Event not found");
		});
	});

	describe("delete", () => {
		test("With valid id, should delete event", async () => {
			const newEvent = await Event.create({
				name: "Test Event",
				start_date: new Date(),
				end_date: new Date(),
				ubication: "Test Location",
				allowed_number: 100,
			});

			const request = agent(server);
			const response = await request.delete(`/api/event/${newEvent.id}`);

			expect(response.status).toBe(200);
			expect(response.body.message).toBe("Event deleted successfully");
		});

		test("With invalid id, should return error", async () => {
			const request = agent(server);
			const response = await request.delete("/api/event/999");

			expect(response.status).toBe(404);
			expect(response.body.error).toBe("Event not found");
		});
	});
});
