const Helper = require("./Helper");

const helper = new Helper();

describe("Testing Helper Methods ", () => {
	it("letterCount works with regular strings", () => {
		expect(helper.letterCount("awesome", "e")).toBe(2);
	});
});
