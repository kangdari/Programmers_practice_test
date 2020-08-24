function climbStairs(n) {
  if (n <= 2) return n;

  const arr = [1, 2];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n - 1];
}

climbStairs(2); // 2
climbStairs(3); // 3
climbStairs(4); // 5
