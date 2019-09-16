const Calculator = require("../Calculator");

/**
 * Standard Calculator Related Methods
 */
class StandardCalculator extends Calculator {
	/**
     * Constructor
     * @param {number} x - value of x
     * @param {number} y - value of y
     */
	constructor(x, y) {
		super();
		this.x = x;
		this.y = y;
	}

	/**
     * Sum of two numbers
     * @returns {number}
     * @example
     *      cal.sum();
     */
	sum() {
		return this.add();
	}
}

module.exports = StandardCalculator;
