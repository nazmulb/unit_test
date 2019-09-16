const Calculator = require("../Calculator");

/**
 * Scientific Calculator Related Methods
 */
class ScientificCalculator extends Calculator {
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
     * Power of base number
     * @returns {number}
     * @example
     *      cal.power();
     */
	power() {
		return Math.pow(this.x, this.y);
	}

	/**
     * The number with the lowest value
     * @returns {number}
     * @example
     *      cal.min();
     */
	min() {
		return Math.min(this.x, this.y);
	}

	/**
     * The number with the highest value
     * @returns {number}
     * @example
     *      cal.max();
     */
	max() {
		return Math.max(this.x, this.y);
	}
}

module.exports = ScientificCalculator;
