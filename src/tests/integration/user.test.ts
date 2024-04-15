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
import User from "../../models/User"; // Import your User model
import { USER_ROLES } from "../../config/enums";

// Mock the AuthService module and its verifyToken method
jest.mock("../../services/AuthService", () => ({
	verifyToken: jest.fn().mockReturnValue(true),
}));

describe("Testing User endpoints", () => {
	beforeAll(async () => {
		await sequelize.sync({ force: true }); // Sync models with the database and drop existing tables
	});

	afterAll(async () => {
		// Close the connection to the testing database after running the tests
		await sequelize.close();
	});

	describe("create", () => {
		test("With valid data, should return user", async () => {
			const request = agent(server);
			const response = await request.post("/api/user").send({
				email: "test@test.com",
				password: "password",
				first_name: "John",
				last_name: "Doe",
				birthday: new Date("1990-01-01"),
				user_type: USER_ROLES.USER,
			});

			// Truncate milliseconds from Date objects
			const truncateMilliseconds = (date: Date) =>
				date.toISOString().split(".")[0] + ".000Z";

			const createdAt = truncateMilliseconds(
				new Date(response.body.user.createdAt)
			);
			const updatedAt = truncateMilliseconds(
				new Date(response.body.user.updatedAt)
			);

			response.body.user.createdAt = createdAt;
			response.body.user.updatedAt = updatedAt;

			expect(response.status).toBe(200);
			expect(response.body.user).toEqual({
				id: response.body.id,
				email: "test@test.com",
				first_name: "John",
				last_name: "Doe",
				birthday: "1990-01-01T00:00:00.000Z",
				user_type: USER_ROLES.USER,
				createdAt: createdAt,
				updatedAt: updatedAt,
			});
		});

		// test("With invalid credentials, should return error", async () => {
		// 	const request = agent(server);
		// 	const response = await request.post("/api/user").send({
		// 		email: "test@test.com",
		// 		password: "password",
		// 		first_name: "John",
		// 		last_name: "Doe",
		// 		birthday: new Date("1990-01-01"),
		// 		user_type: USER_ROLES.USER,
		// 	});

		// 	expect(response.status).toBe(400);
		// 	expect(response.body.message).toBe("User not found");
		// });

		// test("With missing email or password, should return error", async () => {
		// 	const request = agent(server);
		// 	const response = await request.post("/api/user").send({
		// 		email: "test@test.com",
		// 	});

		// 	expect(response.status).toBe(400);
		// 	expect(response.body.message).toBe("Email and password are required");
		// });
	});

	describe("get", () => {
		// test("With valid credentials, should return token and user", async () => {
		// 	const newUser = await User.create({
		// 		email: "test@test.com",
		// 		password: "password",
		// 		first_name: "John",
		// 		last_name: "Doe",
		// 		birthday: new Date("1990-01-01"),
		// 		user_type: USER_ROLES.USER,
		// 	});
		// 	const request = agent(server);
		// 	const response = await request.post("/api/user").send({
		// 		email: "test@test.com",
		// 		password: "password",
		// 	});
		// 	// Truncate milliseconds from Date objects
		// 	const truncateMilliseconds = (date: Date) =>
		// 		date.toISOString().split(".")[0] + ".000Z";
		// 	const createdAt = truncateMilliseconds(newUser.createdAt);
		// 	const updatedAt = truncateMilliseconds(newUser.updatedAt);
		// 	expect(response.status).toBe(200);
		// 	expect(response.body.token).toBeDefined();
		// 	expect(response.body.user).toEqual({
		// 		id: newUser.id,
		// 		email: "test@test.com",
		// 		first_name: "John",
		// 		last_name: "Doe",
		// 		birthday: "1990-01-01T00:00:00.000Z",
		// 		user_type: USER_ROLES.USER,
		// 		createdAt: createdAt,
		// 		updatedAt: updatedAt,
		// 	});
		// });
		// test("With invalid credentials, should return error", async () => {
		// 	const request = agent(server);
		// 	const response = await request.post("/api/user").send({
		// 		email: "invalid@test.com",
		// 		password: "invalidPassword",
		// 	});
		// 	expect(response.status).toBe(400);
		// 	expect(response.body.message).toBe("User not found");
		// });
		// test("With missing email or password, should return error", async () => {
		// 	const request = agent(server);
		// 	const response = await request.post("/api/user").send({
		// 		email: "test@test.com",
		// 	});
		// 	expect(response.status).toBe(400);
		// 	expect(response.body.message).toBe("Email and password are required");
		// });
	});

	describe("update", () => {
		// test("With valid credentials, should return token and user", async () => {
		// 	const newUser = await User.create({
		// 		email: "test@test.com",
		// 		password: "password",
		// 		first_name: "John",
		// 		last_name: "Doe",
		// 		birthday: new Date("1990-01-01"),
		// 		user_type: USER_ROLES.USER,
		// 	});
		// 	const request = agent(server);
		// 	const response = await request.post("/api/user").send({
		// 		email: "test@test.com",
		// 		password: "password",
		// 	});
		// 	// Truncate milliseconds from Date objects
		// 	const truncateMilliseconds = (date: Date) =>
		// 		date.toISOString().split(".")[0] + ".000Z";
		// 	const createdAt = truncateMilliseconds(newUser.createdAt);
		// 	const updatedAt = truncateMilliseconds(newUser.updatedAt);
		// 	expect(response.status).toBe(200);
		// 	expect(response.body.token).toBeDefined();
		// 	expect(response.body.user).toEqual({
		// 		id: newUser.id,
		// 		email: "test@test.com",
		// 		first_name: "John",
		// 		last_name: "Doe",
		// 		birthday: "1990-01-01T00:00:00.000Z",
		// 		user_type: USER_ROLES.USER,
		// 		createdAt: createdAt,
		// 		updatedAt: updatedAt,
		// 	});
		// });
		// test("With invalid credentials, should return error", async () => {
		// 	const request = agent(server);
		// 	const response = await request.post("/api/user").send({
		// 		email: "invalid@test.com",
		// 		password: "invalidPassword",
		// 	});
		// 	expect(response.status).toBe(400);
		// 	expect(response.body.message).toBe("User not found");
		// });
		// test("With missing email or password, should return error", async () => {
		// 	const request = agent(server);
		// 	const response = await request.post("/api/user").send({
		// 		email: "test@test.com",
		// 	});
		// 	expect(response.status).toBe(400);
		// 	expect(response.body.message).toBe("Email and password are required");
		// });
	});

	describe("delete", () => {
		// test("With valid credentials, should return token and user", async () => {
		// 	const newUser = await User.create({
		// 		email: "test@test.com",
		// 		password: "password",
		// 		first_name: "John",
		// 		last_name: "Doe",
		// 		birthday: new Date("1990-01-01"),
		// 		user_type: USER_ROLES.USER,
		// 	});
		// 	const request = agent(server);
		// 	const response = await request.post("/api/user").send({
		// 		email: "test@test.com",
		// 		password: "password",
		// 	});
		// 	// Truncate milliseconds from Date objects
		// 	const truncateMilliseconds = (date: Date) =>
		// 		date.toISOString().split(".")[0] + ".000Z";
		// 	const createdAt = truncateMilliseconds(newUser.createdAt);
		// 	const updatedAt = truncateMilliseconds(newUser.updatedAt);
		// 	expect(response.status).toBe(200);
		// 	expect(response.body.token).toBeDefined();
		// 	expect(response.body.user).toEqual({
		// 		id: newUser.id,
		// 		email: "test@test.com",
		// 		first_name: "John",
		// 		last_name: "Doe",
		// 		birthday: "1990-01-01T00:00:00.000Z",
		// 		user_type: USER_ROLES.USER,
		// 		createdAt: createdAt,
		// 		updatedAt: updatedAt,
		// 	});
		// });
		// test("With invalid credentials, should return error", async () => {
		// 	const request = agent(server);
		// 	const response = await request.post("/api/user").send({
		// 		email: "invalid@test.com",
		// 		password: "invalidPassword",
		// 	});
		// 	expect(response.status).toBe(400);
		// 	expect(response.body.message).toBe("User not found");
		// });
		// test("With missing email or password, should return error", async () => {
		// 	const request = agent(server);
		// 	const response = await request.post("/api/user").send({
		// 		email: "test@test.com",
		// 	});
		// 	expect(response.status).toBe(400);
		// 	expect(response.body.message).toBe("Email and password are required");
		// });
	});
});
