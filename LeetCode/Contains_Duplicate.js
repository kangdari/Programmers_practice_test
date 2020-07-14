// 1.
const containsDuplicate = function (nums) {
  const set = new Set(nums);
  return set.size === nums.length ? false : true;
};

// 2.
// const containsDuplicate = function (nums) {
//   nums.sort((a, b) => a - b);
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i - 1] === nums[i]) return true;
//   }
//   return false;
// };

// 3.
// const containsDuplicate = function (nums) {
//   const set = new Set();

//   for (num of nums) {
//     if (set.has(num)) {
//       return true;
//     }
//     set.add(val);
//   }
//   return false;
// };

containsDuplicate([1, 1, 2, 3, 1]);
