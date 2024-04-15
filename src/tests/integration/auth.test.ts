import { describe, expect, test } from "@jest/globals";
import { agent } from "supertest";
import server from "../../index";
import sequelize from "../../config/sequelize"; // Import your Sequelize instance
import User from "../../models/User"; // Import your User model
import { USER_ROLES } from "../../config/enums";

describe("Testing auth endpoints", () => {
	beforeAll(async () => {
		await sequelize.sync({ force: true }); // Sync models with the database and drop existing tables
	});

	afterAll(async () => {
		// Close the connection to the testing database after running the tests
		await sequelize.close();
	});

	describe("login", () => {
		test("With valid credentials, should return token and user", async () => {
			const newUser = await User.create({
				email: "test@test.com",
				password: "password",
				first_name: "John",
				last_name: "Doe",
				birthday: new Date("1990-01-01"),
				user_type: USER_ROLES.USER,
			});

			const request = agent(server);
			const response = await request.post("/api/auth").send({
				email: "test@test.com",
				password: "password",
			});
			// Truncate milliseconds from Date objects
			const truncateMilliseconds = (date: Date) =>
				date.toISOString().split(".")[0] + ".000Z";

			const createdAt = truncateMilliseconds(newUser.createdAt);
			const updatedAt = truncateMilliseconds(newUser.updatedAt);

			expect(response.status).toBe(200);
			expect(response.body.token).toBeDefined();
			expect(response.body.user).toEqual({
				id: newUser.id,
				email: "test@test.com",
				first_name: "John",
				last_name: "Doe",
				birthday: "1990-01-01T00:00:00.000Z",
				user_type: USER_ROLES.USER,
				createdAt: createdAt,
				updatedAt: updatedAt,
			});
		});

		test("With invalid credentials, should return error", async () => {
			const request = agent(server);
			const response = await request.post("/api/auth").send({
				email: "invalid@test.com",
				password: "invalidPassword",
			});

			expect(response.status).toBe(400);
			expect(response.body.message).toBe("User not found");
		});

		test("With missing email or password, should return error", async () => {
			const request = agent(server);
			const response = await request.post("/api/auth").send({
				email: "test@test.com",
			});

			expect(response.status).toBe(400);
			expect(response.body.message).toBe("Email and password are required");
		});
	});

	describe("register", () => {
		test("With valid registration data, should register user and return token and user", async () => {
			const request = agent(server);
			const response = await request.post("/api/register").send({
				email: "newuser@test.com",
				password: "password",
				first_name: "Jane",
				last_name: "Doe",
				birthday: new Date("1995-05-10"),
			});

			// Truncate milliseconds from Date objects
			const truncateMilliseconds = (date: Date) => {
				const isoString = date.toISOString();
				return isoString.slice(0, isoString.length - 1) + "Z";
			};

			const createdAt = truncateMilliseconds(
				new Date(response.body.user.createdAt)
			);
			const updatedAt = truncateMilliseconds(
				new Date(response.body.user.updatedAt)
			);

			expect(response.status).toBe(200);
			expect(response.body.token).toBeDefined();
			expect(response.body.user).toEqual({
				id: response.body.user.id,
				email: "newuser@test.com",
				first_name: "Jane",
				last_name: "Doe",
				birthday: "1995-05-10T00:00:00.000Z",
				user_type: USER_ROLES.USER,
				createdAt: createdAt,
				updatedAt: updatedAt,
			});
		});

		test("With invalid registration data, should return error", async () => {
			const request = agent(server);
			const response = await request.post("/api/register").send({
				email: "newuser@test.com",
				password: "pass",
				first_name: "Jane",
				last_name: "Doe",
				birthday: "1995-05-10",
			});

			expect(response.status).toBe(400);
			expect(response.body.message).toBe(
				"Password must be at least 6 characters long"
			);
		});

		test("With invalid birthday format, should return error", async () => {
			const request = agent(server);
			const response = await request.post("/api/register").send({
				email: "newuser@test.com",
				password: "password",
				first_name: "Jane",
				last_name: "Doe",
				birthday: "invalid-date",
			});

			expect(response.status).toBe(400);
			expect(response.body.message).toBe("Birthday is not a valid date");
		});

		test("With missing required fields, should return error", async () => {
			const request = agent(server);
			const response = await request.post("/api/register").send({
				email: "newuser@test.com",
				password: "password",
			});

			expect(response.status).toBe(400);
			expect(response.body.message).toBe("All fields are required");
		});
	});
});
