const Calculator = require("./Calculator");

let call;

describe("Testing Calculator Methods", () => {
	test("Instantiate Calculator class", () => {
		try {
			call = new Calculator();
		} catch (e) {
			expect(e.message).toBe("Calculator can\'t be instantiated directly.");
		}
	});

	test("create works with wrong name", () => {
		try {
			call = Calculator.create("nazmul", 2, 1);
		} catch (e) {
			expect(e.message).toBe("nazmul calculator not found.");
		}
	});

	test("create works with right name", () => {
		call = Calculator.create("standard", 2, 1);
		expect(call).toBeInstanceOf(Calculator);
	});
});
