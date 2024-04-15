import { describe, expect, test, jest } from "@jest/globals";
import Auth from "../../services/AuthService";
import JWTService from "../../services/JWTService";
import User from "../../models/User";

// Mocking JWTService methods
jest.mock("../../services/JWTService");

// Mocking User model methods
jest.mock("../../models/User");

describe("Testing auth file", () => {
	describe("verifyToken", () => {
		test("With empty token, should be invalid", () => {
			expect(Auth.verifyToken("")).toBe(false);
		});

		// test("With valid token, should be valid", () => {
		// 	expect(Auth.verifyToken("validToken")).toBe(true);
		// });

		test("With invalid token, should be invalid", () => {
			expect(Auth.verifyToken("invalidToken")).toBe(false);
		});
	});

	describe("login", () => {
		// test("With valid credentials, should return token and user", async () => {
		// 	const result = await Auth.login("test@example.com", "password");

		// 	expect(result).toEqual({
		// 		token: "mockToken",
		// 		user: {
		// 			id: 1,
		// 			email: "test@example.com",
		// 			first_name: "John",
		// 			last_name: "Doe",
		// 			birthday: expect.any(Date),
		// 			user_type: "user",
		// 		},
		// 	});
		// });

		test("With invalid credentials, should return error", async () => {
			const result = await Auth.login("invalid@example.com", "password");

			expect(result).toEqual({
				error: "User not found",
			});
		});
	});

	describe("register", () => {
		// test("With new email, should register user and return token and user", async () => {
		// 	const result = await Auth.register(
		// 		"newuser@example.com",
		// 		"password",
		// 		"John",
		// 		"Doe",
		// 		new Date(),
		// 		"user"
		// 	);
		// 	expect(result).toEqual({
		// 		token: "mockToken",
		// 		user: {
		// 			id: 1,
		// 			email: "newuser@example.com",
		// 			first_name: "John",
		// 			last_name: "Doe",
		// 			birthday: expect.any(Date),
		// 			user_type: "user",
		// 		},
		// 	});
		// });
		// test("With existing email, should return error", async () => {
		// 	const result = await Auth.register(
		// 		"existing@example.com",
		// 		"password",
		// 		"John",
		// 		"Doe",
		// 		new Date(),
		// 		"user"
		// 	);
		// 	expect(result).toEqual({
		// 		error: "User already exists",
		// 	});
		// });
	});
});
