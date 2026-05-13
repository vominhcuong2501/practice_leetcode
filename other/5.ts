// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

function lengthOfLongestSubstring(s: string): number {
  let map: Record<string, number> = {};

  let maxLength = 0;

  let left = 0;

  for (let i = 0; i < s.length; i++) {
    let current = s[i];

    if (current in map && map[current] >= left) {
      left = map[current] + 1;
    }

    map[current] = i;

    maxLength = Math.max(maxLength, i - left + 1);
  }

  return maxLength;
}

lengthOfLongestSubstring("abcabcbb");

// Em dùng sliding window với hai pointer. Khi gặp ký tự trùng, em dịch left pointer đến vị trí sau lần xuất hiện trước đó của ký tự đó. Trong quá trình đó em cập nhật độ dài lớn nhất.
