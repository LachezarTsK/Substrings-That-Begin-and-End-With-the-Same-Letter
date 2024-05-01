
/**
 * @param {string} input
 * @return {number}
 */
var numberOfSubstrings = function (input) {
    const ALPHABET_SIZE = 26;
    const frequency = new Array(ALPHABET_SIZE).fill(0);
    for (let letter of input) {
        ++frequency[getASCII(letter) - getASCII('a')];
    }

    let totalSubstrings = 0;
    for (let value of frequency) {
        totalSubstrings += Math.floor(value * (value + 1) / 2);
    }

    return totalSubstrings;
};

/**
 * @param {string} letter
 * @return {number}
 */
function getASCII(letter) {
    return letter.codePointAt(0);
}
