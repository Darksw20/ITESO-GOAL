import { describe, expect, test } from "@jest/globals";
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

		test("With valid token, should be valid", () => {
			// Mocking isValidJWT to return true
			(JWTService.isValidJWT as jest.Mock).mockReturnValue(true);

			expect(Auth.verifyToken("validToken")).toBe(true);
		});

		test("With invalid token, should be invalid", () => {
			// Mocking isValidJWT to return false
			(JWTService.isValidJWT as jest.Mock).mockReturnValue(false);

			expect(Auth.verifyToken("invalidToken")).toBe(false);
		});

		test("When an error occurs, should be invalid", () => {
			// Mocking decodeJWT to throw an error
			(JWTService.decodeJWT as jest.Mock).mockImplementation(() => {
				throw new Error("Error decoding JWT");
			});

			expect(Auth.verifyToken("invalidToken")).toBe(false);
		});
	});

	describe("login", () => {
		test("With valid credentials, should return token and user", async () => {
			const mockUser = {
				id: 1,
				email: "test@example.com",
				password: "hashedPassword",
				first_name: "John",
				last_name: "Doe",
				birthday: new Date(),
				user_type: "user",
				toJSON: jest.fn().mockReturnValue({
					id: 1,
					email: "test@example.com",
					first_name: "John",
					last_name: "Doe",
					birthday: new Date(),
					user_type: "user",
				}),
			};

			// Mocking findOne to return mockUser
			(User.findOne as jest.Mock).mockResolvedValue(mockUser);

			// Mocking signJWT to return a token
			(JWTService.signJWT as jest.Mock).mockResolvedValue("mockToken");

			const result = await Auth.login("test@example.com", "password");

			expect(result).toEqual({
				token: "mockToken",
				user: {
					id: 1,
					email: "test@example.com",
					first_name: "John",
					last_name: "Doe",
					birthday: expect.any(Date),
					user_type: "user",
				},
			});
		});

		test("With invalid credentials, should return error", async () => {
			// Mocking findOne to return null
			(User.findOne as jest.Mock).mockResolvedValue(null);

			const result = await Auth.login("invalid@example.com", "password");

			expect(result).toEqual({
				error: "User not found",
			});
		});
	});

	describe("register", () => {
		test("With new email, should register user and return token and user", async () => {
			// Mocking findOne to return null (user does not exist)
			(User.findOne as jest.Mock).mockResolvedValue(null);

			const mockUser = {
				id: 1,
				email: "newuser@example.com",
				password: "hashedPassword",
				first_name: "John",
				last_name: "Doe",
				birthday: new Date(),
				user_type: "user",
				toJSON: jest.fn().mockReturnValue({
					id: 1,
					email: "newuser@example.com",
					first_name: "John",
					last_name: "Doe",
					birthday: new Date(),
					user_type: "user",
				}),
			};

			// Mocking create to return mockUser
			(User.create as jest.Mock).mockResolvedValue(mockUser);

			// Mocking signJWT to return a token
			(JWTService.signJWT as jest.Mock).mockResolvedValue("mockToken");

			const result = await Auth.register(
				"newuser@example.com",
				"password",
				"John",
				"Doe",
				new Date(),
				"user"
			);

			expect(result).toEqual({
				token: "mockToken",
				user: {
					id: 1,
					email: "newuser@example.com",
					first_name: "John",
					last_name: "Doe",
					birthday: expect.any(Date),
					user_type: "user",
				},
			});
		});

		test("With existing email, should return error", async () => {
			// Mocking findOne to return an existing user
			(User.findOne as jest.Mock).mockResolvedValue({
				id: 1,
				email: "existing@example.com",
				password: "hashedPassword",
				first_name: "John",
				last_name: "Doe",
				birthday: new Date(),
				user_type: "user",
			});

			const result = await Auth.register(
				"existing@example.com",
				"password",
				"John",
				"Doe",
				new Date(),
				"user"
			);

			expect(result).toEqual({
				error: "User already exists",
			});
		});
	});
});
