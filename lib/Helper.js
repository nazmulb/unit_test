/**
 * Helper Related Methods
 */
class Helper {
	/**
     * Count letter
     * @param {string} str - given string
     * @param {string} char - given character
     * @return {number} count - no of characters
     * @example
     *      helper.letterCount("test", "t");
     */
	letterCount(str, char) {
		let count = 0;
		for (let i = 0; i <= str.length; i += 1) {
			if (str[i] === char) {
				count += 1;
			}
		}

		return count;
	}

	/**
     * Count words
     * @param {string} str - given string
     * @return {number} count - no of words
     * @example
     *      helper.countWords("This is a word");
     */
	countWords(str) {
		return str.trim().split(/\s+/).length;
	}

	/**
     * Validate email
     * @param {string} str - given string
     * @return {boolean}
     * @example
     *      helper.validateEmail("nazmul.basher@gmail.com");
     */
	validateEmail(str) {
		const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		return str.match(format) ? true : false;
	}

	/**
     * Validate phone
     * @param {string} str - given string
     * @return {boolean}
     * @example
     *      helper.validateEmail("+1 (612) 545-9852");
     */
	validatePhone(str) {
		const format = /^\+?(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/g;
		return str.match(format) ? true : false;
	}
}

module.exports = Helper;
