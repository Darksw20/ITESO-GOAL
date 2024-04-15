import { describe, expect, test, beforeEach, jest } from "@jest/globals";
import EventService from "../../services/EventService";
import Event from "../../models/Event";

// Mocking Event model methods
jest.mock("../../models/Event");

describe("Testing UserService", () => {
	describe("create", () => {
		// test("With valid data, should create event", async () => {
		// 	const newDate = new Date();
		// 	const result = await EventService.create(
		// 		"Test Event",
		// 		newDate,
		// 		newDate,
		// 		"Test Location",
		// 		100
		// 	);
		// 	expect(result).toEqual({
		// 		id: result.id,
		// 		event: {
		// 			id: 1,
		// 			name: "Test Event",
		// 			start_date: newDate,
		// 			end_date: newDate,
		// 			ubication: "Test Location",
		// 			allowed_number: 100,
		// 		},
		// 	});
		// });
	});

	describe("find", () => {
		// test("With valid id, should find event", async () => {
		// 	const newDate = new Date();

		// 	const result = await EventService.find(1);

		// 	expect(result).toEqual({
		// 		event: {
		// 			id: 1,
		// 			name: "Test Event",
		// 			start_date: newDate,
		// 			end_date: newDate,
		// 			ubication: "Test Location",
		// 			allowed_number: 100,
		// 		},
		// 	});
		// });

		test("With invalid id, should return error", async () => {
			const result = await EventService.find(999);

			expect(result).toEqual({
				error: "Event not found",
			});
		});

		// test("Without id, should return all events", async () => {
		// 	const newDate = new Date();

		// 	const result = await EventService.find();

		// 	expect(result).toEqual({
		// 		events: [
		// 			{
		// 				id: 1,
		// 				name: "Test Event 1",
		// 				start_date: newDate,
		// 				end_date: newDate,
		// 				ubication: "Test Location 1",
		// 				allowed_number: 100,
		// 			},
		// 			{
		// 				id: 2,
		// 				name: "Test Event 2",
		// 				start_date: newDate,
		// 				end_date: newDate,
		// 				ubication: "Test Location 2",
		// 				allowed_number: 200,
		// 			},
		// 		],
		// 	});
		// });
	});

	describe("update", () => {
		let eventId: number;

		// beforeEach(async () => {
		// 	// Create a new event and get its ID
		// 	const newEvent = await Event.create({
		// 		name: "Test Event",
		// 		start_date: new Date(),
		// 		end_date: new Date(),
		// 		ubication: "Test Location",
		// 		allowed_number: 100,
		// 	});

		// 	eventId = newEvent.id;
		// });

		test("With invalid id, should return error", async () => {
			const result = await EventService.update(
				999,
				"Updated Event",
				new Date(),
				new Date(),
				"Updated Location",
				200
			);

			expect(result).toEqual({
				error: "Event not found",
			});
		});
	});

	describe("delete", () => {
		let eventId: number;

		// beforeEach(async () => {
		// 	// Create a new event and get its ID
		// 	const newEvent = await Event.create({
		// 		name: "Test Event",
		// 		start_date: new Date(),
		// 		end_date: new Date(),
		// 		ubication: "Test Location",
		// 		allowed_number: 100,
		// 	});

		// 	eventId = newEvent.id;
		// });

		test("With invalid id, should return error", async () => {
			const result = await EventService.delete(999);

			expect(result).toEqual({
				error: "Event not found",
			});
		});
	});
});
