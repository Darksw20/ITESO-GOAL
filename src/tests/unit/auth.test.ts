import { describe, expect, test } from "@jest/globals";

import Auth from "../../services/AuthService";

describe("Testing auth file", () => {
	//que pasa si le pasamos un token que no es valido
	test("With bad token, should be invalid", () => {
		expect(Auth.verifyToken("")).toBe(false);
	});
	//que pasa si le pasamos un token que es valido
	test("With bad token, should be invalid", () => {
		expect(Auth.verifyToken("123456")).toBe(true);
	});
});
