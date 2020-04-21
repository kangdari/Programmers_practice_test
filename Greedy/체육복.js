function solution(n, lost, reserve) {
  let answer = 0;
  answer = n - lost.length;

  // 여벌 옷이 있는 학생이 옷을 분실할 경우
  lost = lost.filter((item) => {
    const index = reserve.indexOf(item);
    if (index !== -1) {
      reserve.splice(index, 1);
      answer++;
    }
    return index === -1;
  });

  lost.forEach((item, i) => {
    const pre = item - 1;
    const next = item + 1;

    // 앞 번호 확인
    const index = reserve.indexOf(pre);
    if (index !== -1) {
      answer++;
      reserve.splice(index, 1);
      return true; // 반복 탈출
    }

    const index2 = reserve.indexOf(next);
    if (index2 !== -1) {
      answer++;
      reserve.splice(index, 1);
      return true; // 반복 탈출
    }
  });
  return answer;
}

// console.log(solution(5, [2, 4], [1, 3, 5])); // 5
// console.log(solution(5, [2, 4], [3])); // 4
// console.log(solution(3, [3], [1])); // 2
// console.log(solution(8, [4, 5], [5, 6])); // 7
console.log(solution(10, [3, 9, 10], [3, 8, 9])); // 9 > 10 나옴
