// Map 사용
const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i];
    if (map.has(res)) {
      return [map.get(res), i];
    }
    map.set(nums[i], i);
  }
};

twoSum([2, 7, 11, 15], 17);
// twoSum([3, 2, 4], 6);
