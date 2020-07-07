function solution(d, budget) {
  let answer = 0;
  let sum = 0;

  d.sort((a, b) => a - b);
  // for (let i = 0; i < d.length; i++) {
  //   sum += d[i];
  //   if (sum > budget) {
  //     return answer;
  //   }
  //   answer++;
  // }

  d.forEach((money) => {
    sum += money;
    if (sum > budget) {
      return answer;
    }
    answer++;
  });
  return answer;
}

solution([1, 3, 2, 5, 4], 9);
solution([2, 2, 3, 3], 10);
