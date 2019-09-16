const Calculator = require("./Calculator");

let cal;

beforeAll(() => {
	cal = Calculator.create("standard", 7, 4);
});

describe("Testing Scientific Calculator Methods", () => {
	test("setY works with regular number", () => {
		cal.setY = 10;
		expect(cal.getY).toBe(10);
		cal.setY = 4;
	});

	test("Addition works with regular numbers", () => {
		expect(cal.add()).toBe(11);
	});

	test("Subtraction works with regular numbers", () => {
		expect(cal.sub()).toBe(3);
	});

	test("Multiplication works with regular numbers", () => {
		expect(cal.mult()).toBe(28);
	});
});
