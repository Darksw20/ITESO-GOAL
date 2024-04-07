import { describe, expect, test } from "@jest/globals";
import request from "supertest";
import server from "../../index";
import sequelize from "../../config/sequelize"; // Import your Sequelize instance
import User from "../../models/User"; // Import your User model

describe("Testing auth endpoint", () => {
	/*beforeAll(async () => {
		// Connect to the testing database before running the tests
		//await sequelize.sync({ force: true }); // Sync models with the database and drop existing tables
		// Seed the testing database with initial data
		// await User.create({
		// 	email: "test@test.com",
		// 	username: "test",
		// 	password: "password",
		// 	first_name: "John",
		// 	last_name: "Doe",
		// 	birthday: new Date("1990-01-01"),
		// 	user_type: "admin",
		// });
	});*/

	/*afterAll(async () => {
		// Close the connection to the testing database after running the tests
		await sequelize.close();
	});*/

	test("The healthcheck works", async () => {
		const response = await request(server).get("/api/healthcheck");
		const userQuery = await User.findOne({ where: { email: "test@test.com" } });
		const user = userQuery?.dataValues;
		expect(user).toBeDefined(); // Assert that the user record exists
		expect(user?.username).toBe("test");
		expect(user?.password).toBe("password");
		expect(user?.first_name).toBe("John");
		expect(user?.last_name).toBe("Doe");
		expect(user?.birthday.toISOString()).toBe("1990-01-01T00:00:00.000Z");
		expect(user?.user_type).toBe("admin");
		expect(response.status).toBe(200);
		expect(response.body).toEqual({
			message: "Server is running",
		});
	});
});
