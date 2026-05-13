// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

function twoSum(nums: number[], target: number): number[] {
  const map: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];

    if (needed in map) {
      return [map[needed], i];
    }

    map[nums[i]] = i;
  }

  return []; // fallback (dù đề nói luôn có đáp án)
}

function twoSum1(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];

    if (map.has(needed)) {
      return [map.get(needed)!, i];
    }

    map.set(nums[i], i);
  }

  return [];
}

console.log(twoSum1([1, 2, 3, 5, 7, 6], 9));

// Mỗi vòng lặp, mình kiểm tra xem target - current đã xuất hiện chưa bằng cách lookup trong map. Nếu có thì return index, nếu chưa thì lưu current vào map để dùng cho các bước sau.
