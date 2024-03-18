import { describe, expect, test } from "@jest/globals";
import request from "supertest";
import server from "../../index";

describe("Testing auth endpoint", () => {
	test("The healthcheck works", async () => {
		const response = await request(server).get("/api/healthcheck");
		expect(response.status).toBe(200);
		expect(response.body).toEqual({
			message: "Server is running",
		});
	});
});
