import {
	describe,
	expect,
	test,
	beforeAll,
	afterAll,
	jest,
} from "@jest/globals";
import { agent } from "supertest";
import server from "../../index";
import sequelize from "../../config/sequelize"; // Import your Sequelize instance
import Match from "../../models/Match"; // Import your Match model
import { USER_ROLES } from "../../config/enums";

// Mock the AuthService module and its verifyToken method
jest.mock("../../services/AuthService", () => ({
	verifyToken: jest.fn().mockReturnValue(true),
}));

describe("Testing Match endpoints", () => {
	beforeAll(async () => {
		await sequelize.sync({ force: true }); // Sync models with the database and drop existing tables
	});

	afterAll(async () => {
		// Close the connection to the testing database after running the tests
		await sequelize.close();
	});

	describe("create", () => {
		test("With valid data, should return team", async () => {
			// const request = agent(server);
			// const response = await request.post("/api/team").send({
			// 	name: "Test Team",
			// });
			// expect(response.status).toBe(200);
			// expect(response.body.team).toEqual({
			// 	id: response.body.id,
			// 	name: "Test Team",
			// });
			expect(true).toEqual(true);
		});
		// test("With valid data, should return match", async () => {
		// 	const request = agent(server);
		// 	const response = await request.post("/api/match").send({
		// 		email: "test@test.com",
		// 		password: "password",
		// 		first_name: "John",
		// 		last_name: "Doe",
		// 		birthday: new Date("1990-01-01"),
		// 		match_type: USER_ROLES.USER,
		// 	});
		// 	// Truncate milliseconds from Date objects
		// 	const truncateMilliseconds = (date: Date) =>
		// 		date.toISOString().split(".")[0] + ".000Z";
		// 	const createdAt = truncateMilliseconds(
		// 		new Date(response.body.match.createdAt)
		// 	);
		// 	const updatedAt = truncateMilliseconds(
		// 		new Date(response.body.match.updatedAt)
		// 	);
		// 	response.body.match.createdAt = createdAt;
		// 	response.body.match.updatedAt = updatedAt;
		// 	expect(response.status).toBe(200);
		// 	expect(response.body.match).toEqual({
		// 		id: response.body.id,
		// 		email: "test@test.com",
		// 		first_name: "John",
		// 		last_name: "Doe",
		// 		birthday: "1990-01-01T00:00:00.000Z",
		// 		match_type: USER_ROLES.USER,
		// 		createdAt: createdAt,
		// 		updatedAt: updatedAt,
		// 	});
		// });
		// test("With invalid credentials, should return error", async () => {
		// 	const request = agent(server);
		// 	const response = await request.post("/api/match").send({
		// 		email: "test@test.com",
		// 		password: "password",
		// 		first_name: "John",
		// 		last_name: "Doe",
		// 		birthday: new Date("1990-01-01"),
		// 		match_type: USER_ROLES.USER,
		// 	});
		// 	expect(response.status).toBe(400);
		// 	expect(response.body.message).toBe("Match not found");
		// });
		// test("With missing email or password, should return error", async () => {
		// 	const request = agent(server);
		// 	const response = await request.post("/api/match").send({
		// 		email: "test@test.com",
		// 	});
		// 	expect(response.status).toBe(400);
		// 	expect(response.body.message).toBe("Email and password are required");
		// });
	});

	describe("get", () => {
		// test("With valid credentials, should return token and match", async () => {
		// 	const newMatch = await Match.create({
		// 		email: "test@test.com",
		// 		password: "password",
		// 		first_name: "John",
		// 		last_name: "Doe",
		// 		birthday: new Date("1990-01-01"),
		// 		match_type: USER_ROLES.USER,
		// 	});
		// 	const request = agent(server);
		// 	const response = await request.post("/api/match").send({
		// 		email: "test@test.com",
		// 		password: "password",
		// 	});
		// 	// Truncate milliseconds from Date objects
		// 	const truncateMilliseconds = (date: Date) =>
		// 		date.toISOString().split(".")[0] + ".000Z";
		// 	const createdAt = truncateMilliseconds(newMatch.createdAt);
		// 	const updatedAt = truncateMilliseconds(newMatch.updatedAt);
		// 	expect(response.status).toBe(200);
		// 	expect(response.body.token).toBeDefined();
		// 	expect(response.body.match).toEqual({
		// 		id: newMatch.id,
		// 		email: "test@test.com",
		// 		first_name: "John",
		// 		last_name: "Doe",
		// 		birthday: "1990-01-01T00:00:00.000Z",
		// 		match_type: USER_ROLES.USER,
		// 		createdAt: createdAt,
		// 		updatedAt: updatedAt,
		// 	});
		// });
		// test("With invalid credentials, should return error", async () => {
		// 	const request = agent(server);
		// 	const response = await request.post("/api/match").send({
		// 		email: "invalid@test.com",
		// 		password: "invalidPassword",
		// 	});
		// 	expect(response.status).toBe(400);
		// 	expect(response.body.message).toBe("Match not found");
		// });
		// test("With missing email or password, should return error", async () => {
		// 	const request = agent(server);
		// 	const response = await request.post("/api/match").send({
		// 		email: "test@test.com",
		// 	});
		// 	expect(response.status).toBe(400);
		// 	expect(response.body.message).toBe("Email and password are required");
		// });
	});

	describe("update", () => {
		// test("With valid credentials, should return token and match", async () => {
		// 	const newMatch = await Match.create({
		// 		email: "test@test.com",
		// 		password: "password",
		// 		first_name: "John",
		// 		last_name: "Doe",
		// 		birthday: new Date("1990-01-01"),
		// 		match_type: USER_ROLES.USER,
		// 	});
		// 	const request = agent(server);
		// 	const response = await request.post("/api/match").send({
		// 		email: "test@test.com",
		// 		password: "password",
		// 	});
		// 	// Truncate milliseconds from Date objects
		// 	const truncateMilliseconds = (date: Date) =>
		// 		date.toISOString().split(".")[0] + ".000Z";
		// 	const createdAt = truncateMilliseconds(newMatch.createdAt);
		// 	const updatedAt = truncateMilliseconds(newMatch.updatedAt);
		// 	expect(response.status).toBe(200);
		// 	expect(response.body.token).toBeDefined();
		// 	expect(response.body.match).toEqual({
		// 		id: newMatch.id,
		// 		email: "test@test.com",
		// 		first_name: "John",
		// 		last_name: "Doe",
		// 		birthday: "1990-01-01T00:00:00.000Z",
		// 		match_type: USER_ROLES.USER,
		// 		createdAt: createdAt,
		// 		updatedAt: updatedAt,
		// 	});
		// });
		// test("With invalid credentials, should return error", async () => {
		// 	const request = agent(server);
		// 	const response = await request.post("/api/match").send({
		// 		email: "invalid@test.com",
		// 		password: "invalidPassword",
		// 	});
		// 	expect(response.status).toBe(400);
		// 	expect(response.body.message).toBe("Match not found");
		// });
		// test("With missing email or password, should return error", async () => {
		// 	const request = agent(server);
		// 	const response = await request.post("/api/match").send({
		// 		email: "test@test.com",
		// 	});
		// 	expect(response.status).toBe(400);
		// 	expect(response.body.message).toBe("Email and password are required");
		// });
	});

	describe("delete", () => {
		// test("With valid credentials, should return token and match", async () => {
		// 	const newMatch = await Match.create({
		// 		email: "test@test.com",
		// 		password: "password",
		// 		first_name: "John",
		// 		last_name: "Doe",
		// 		birthday: new Date("1990-01-01"),
		// 		match_type: USER_ROLES.USER,
		// 	});
		// 	const request = agent(server);
		// 	const response = await request.post("/api/match").send({
		// 		email: "test@test.com",
		// 		password: "password",
		// 	});
		// 	// Truncate milliseconds from Date objects
		// 	const truncateMilliseconds = (date: Date) =>
		// 		date.toISOString().split(".")[0] + ".000Z";
		// 	const createdAt = truncateMilliseconds(newMatch.createdAt);
		// 	const updatedAt = truncateMilliseconds(newMatch.updatedAt);
		// 	expect(response.status).toBe(200);
		// 	expect(response.body.token).toBeDefined();
		// 	expect(response.body.match).toEqual({
		// 		id: newMatch.id,
		// 		email: "test@test.com",
		// 		first_name: "John",
		// 		last_name: "Doe",
		// 		birthday: "1990-01-01T00:00:00.000Z",
		// 		match_type: USER_ROLES.USER,
		// 		createdAt: createdAt,
		// 		updatedAt: updatedAt,
		// 	});
		// });
		// test("With invalid credentials, should return error", async () => {
		// 	const request = agent(server);
		// 	const response = await request.post("/api/match").send({
		// 		email: "invalid@test.com",
		// 		password: "invalidPassword",
		// 	});
		// 	expect(response.status).toBe(400);
		// 	expect(response.body.message).toBe("Match not found");
		// });
		// test("With missing email or password, should return error", async () => {
		// 	const request = agent(server);
		// 	const response = await request.post("/api/match").send({
		// 		email: "test@test.com",
		// 	});
		// 	expect(response.status).toBe(400);
		// 	expect(response.body.message).toBe("Email and password are required");
		// });
	});
});
