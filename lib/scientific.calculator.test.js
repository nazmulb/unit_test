const Calculator = require("./Calculator");

let cal;

beforeAll(() => {
	cal = Calculator.create("scientific", 5, 3);
});

describe("Testing Scientific Calculator Methods", () => {
	test("Addition works with regular numbers", () => {
		expect(cal.add()).toBe(8);
	});

	test("Division works with regular numbers", () => {
		cal.setX = 9;
		expect(cal.div()).toBe(3);
		cal.setX = 5;
	});

	test("power works with regular numbers", () => {
		expect(cal.power()).toBe(125);
	});

	test("min works with regular numbers", () => {
		expect(cal.min()).toBe(3);
	});
});
