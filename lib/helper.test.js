const Helper = require("./Helper");

let helper;

beforeAll(() => {
	helper = new Helper();
});

describe("Testing Helper Methods", () => {
	test("letterCount works with regular strings", () => {
		expect(helper.letterCount("awesome", "e")).toBe(2);
	});

	test("letterCount works with first letter uppercase strings", () => {
		expect(helper.letterCount("Test", "t")).toBe(1);
	});

	test("countWords works with regular strings", () => {
		expect(helper.countWords("My nazme is Nazmul")).toBe(4);
	});

	test("validateEmail works with regular email id", () => {
		expect(helper.validateEmail("test@gmail.com")).toBe(true);
	});

	test("validateEmail works with wrong email id", () => {
		expect(helper.validateEmail("gmail.com")).not.toBe(true);
	});

	test("validatePhone works with regular numbers", () => {
		expect(helper.validatePhone("+1 (612) 545-9856")).toBe(true);
	});

	test("validatePhone works with wrong numbers", () => {
		expect(helper.validatePhone("76409")).not.toBe(true);
	});
});
