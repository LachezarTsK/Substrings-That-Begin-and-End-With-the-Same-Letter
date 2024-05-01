
using System;

public class Solution
{
    private static readonly int ALPHABET_SIZE = 26;

    public long NumberOfSubstrings(string input)
    {
        long[] frequency = new long[ALPHABET_SIZE];
        foreach (char letter in input)
        {
            ++frequency[letter - 'a'];
        }

        long totalSubstrings = 0;
        foreach (long value in frequency)
        {
            totalSubstrings += value * (value + 1) / 2;
        }

        return totalSubstrings;
    }
}
