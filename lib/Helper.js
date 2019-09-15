/**
 * Helper Related Methods
 */
class Helper {
	/**
     * Count letter
     * @param {string} str - given string
     * @param {string} char - given character
     * @return {number} count
     * @example
     *      helper.letterCount("awesome", "e");
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
}

module.exports = Helper;
