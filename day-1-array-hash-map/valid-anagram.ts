// Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const map = new Map<string, number>();

  // đếm ký tự của s
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  // trừ ký tự của t
  for (const char of t) {
    if (!map.has(char)) return false;

    map.set(char, map.get(char)! - 1);

    if (map.get(char)! < 0) {
      return false;
    }
  }

  return true;
}

console.log("===========", isAnagram("anagram", "nagaram"));
console.log("***********", isAnagram("rat", "car"));
