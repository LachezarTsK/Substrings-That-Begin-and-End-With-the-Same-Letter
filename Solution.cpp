
#include <array>
#include <vector>
using namespace std;

class Solution {

    static const int ALPHABET_SIZE = 26;

public:
    long long numberOfSubstrings(const string& input) const {
        array<long long, ALPHABET_SIZE> frequency{};
        for (const auto& letter : input) {
            ++frequency[letter - 'a'];
        }

        long long totalSubstrings = 0;
        for (const auto& value : frequency) {
            totalSubstrings += value * (value + 1) / 2;
        }

        return totalSubstrings;
    }
};
