const Helper = require("./Helper");

let helper;

beforeAll(() => {
	helper = new Helper();
});

describe("Testing Helper Methods ", () => {
	it("letterCount works with regular strings", () => {
		expect(helper.letterCount("awesome", "e")).toBe(2);
	});

	it("letterCount works with first letter uppercase strings", () => {
		expect(helper.letterCount("Test", "t")).toBe(1);
	});
});
