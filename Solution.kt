
class Solution {

    companion object {
        const val ALPHABET_SIZE = 26
    }

    fun numberOfSubstrings(input: String): Long {
        val frequency = LongArray(ALPHABET_SIZE);
        for (letter in input) {
            ++frequency[letter - 'a'];
        }

        var totalSubstrings: Long = 0;
        for (value in frequency) {
            totalSubstrings += value * (value + 1) / 2;
        }

        return totalSubstrings;
    }
}
