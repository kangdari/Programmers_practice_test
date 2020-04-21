function solution(n, lost, reserve) {
  let answer = 0;
  answer = n - lost.length;

  const lostArr = lost.filter((i) => reserve.indexOf(i) === -1);
  const reserveArr = reserve.filter((i) => lost.indexOf(i) === -1);
  answer += lost.length - lostArr.length;

  lostArr.forEach((item, i) => {
    const pre = item - 1;
    const next = item + 1;

    // 앞 번호 확인
    const index = reserveArr.indexOf(pre);
    if (index !== -1) {
      answer++;

      reserveArr.splice(index, 1);
      return true; // 반복 탈출
    }

    const index2 = reserveArr.indexOf(next);
    if (index2 !== -1) {
      answer++;
      reserveArr.splice(index, 1);
      return true; // 반복 탈출
    }
  });
  return answer;
}

//   console.log(solution(5, [2, 4], [1, 3, 5])); // 5
//   console.log(solution(5, [2, 4], [3])); // 4
//   console.log(solution(3, [3], [1])); // 2
//   console.log(solution(8, [4, 5], [5, 6])); // 7
console.log(solution(10, [3, 9, 10], [3, 8, 9])); // 9 > 10 나옴
