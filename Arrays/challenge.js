// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const twoSum = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    if (nums[low] + nums[high] === target) return [low, high];
    else if (nums[low] + nums[high] > target) high--;
    else low++;
  }
};

console.log(twoSum([2, 3, 4, 5, 6], 10));
