
public class Solution {

    private static final int ALPHABET_SIZE = 26;

    public long numberOfSubstrings(String input) {
        long[] frequency = new long[ALPHABET_SIZE];
        for (char letter : input.toCharArray()) {
            ++frequency[letter - 'a'];
        }

        long totalSubstrings = 0;
        for (long value : frequency) {
            totalSubstrings += value * (value + 1) / 2;
        }

        return totalSubstrings;
    }
}
