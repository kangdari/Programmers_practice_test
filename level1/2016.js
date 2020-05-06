function solution(a, b) {
  let answer = "";
  // 1월 1일은 금요일
  const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const day = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let count = 0;
  for (let i = 0; i < a - 1; i++) {
    count += day[i];
  }
  // days[-1] 접근 방지를 위해 -1을 먼저 해줘야 함.
  count += b - 1;
  answer = days[count % 7];
  return answer;
}

solution(5, 24);
