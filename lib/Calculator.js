const _ = require("lodash");

/**
 * Calculator Related Methods
 */
class Calculator {
	/**
     * Abstract
     */
	constructor() {
		if (new.target === Calculator) {
			throw new Error("Calculator can't be instantiated directly.");
		}
	}

	/**
     * Factory
     * @param {string} name - name of the calculator
     * @return {object}
     * @example
     *      Calculator.create("scientific");
     */
	static create(name) {
		const fileName = `./calculators/${_.capitalize(name)}Calculator.js`;
		let ClassName;

		try {
			ClassName = require(fileName);
			return new ClassName();
		} catch (error) {
			throw new Error(`${ClassName} calculator not found`);
		}
	}

	/**
     * Addition of two numbers
     * @returns {number}
     * @example
     *      cal.add();
     */
	add() {
		return this.x + this.y;
	}

	/**
     * Subtraction of two numbers
     * @returns {number}
     * @example
     *      cal.sub();
     */
	sub() {
		return this.x - this.y;
	}

	/**
     * Division of two numbers
     * @returns {number}
     * @example
     *      cal.div();
     */
	div() {
		return this.x / this.y;
	}

	/**
     * Multiplication of two numbers
     * @returns {number}
     * @example
     *      cal.mult();
     */
	mult() {
		return this.x / this.y;
	}

	/**
     * Power of base number
     * @returns {number}
     * @example
     *      cal.power();
     */
	power() {}

	/**
     * The number with the lowest value
     * @returns {number}
     * @example
     *      cal.min();
     */
	min() {}

	/**
     * The number with the highest value
     * @returns {number}
     * @example
     *      cal.max();
     */
	max() {}


	/**
     * Get X
     * @return {number} - value of x
     * @example
     *      cal.getX();
     */
	get getX() {
		return this.x;
	}

	/**
     * Set X
     * @param {number} x - value of x
     * @example
     *      cal.setX(3);
     */
	set setX(x) {
		this.x = x;
	}

	/**
     * Get Y
     * @return {number} - value of y
     * @example
     *      cal.getY();
     */
	get getY() {
		return this.y;
	}

	/**
     * Set Y
     * @param {number} y - value of y
     * @example
     *      cal.setY(2);
     */
	set setY(y) {
		this.y = y;
	}
}

module.exports = Calculator;
