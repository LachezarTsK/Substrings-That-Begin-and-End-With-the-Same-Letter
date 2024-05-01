
function numberOfSubstrings(input: string): number {
    const ALPHABET_SIZE = 26;
    const frequency: number[] = new Array(ALPHABET_SIZE).fill(0);
    for (let letter of input) {
        ++frequency[getASCII(letter) - getASCII('a')];
    }

    let totalSubstrings = 0;
    for (let value of frequency) {
        totalSubstrings += Math.floor(value * (value + 1) / 2);
    }

    return totalSubstrings;
};

function getASCII(letter: string): number {
    return letter.codePointAt(0);
}
