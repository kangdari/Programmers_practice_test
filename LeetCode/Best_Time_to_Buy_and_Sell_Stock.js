// Brute Force O(n^2)
// const maxProfit = function (prices) {
//   let max = 0;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[j] - prices[i] > 0 && max < prices[j] - prices[i]) {
//         max = prices[j] - prices[i];
//       }
//     }
//   }
//   return max;
// };

// one Pass O(n)
const maxProfit = function (prices) {
  let min = prices[0];
  let max_benfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i];
    } else if (max_benfit < prices[i] - min) {
      max_benfit = prices[i] - min;
    }
  }
  return max_benfit;
};

maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([7, 6, 4, 3, 1]);
