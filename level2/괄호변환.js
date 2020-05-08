// 균형잡힌 광로 - '))(('
// 올바른 괄호  - '(())'

function solution(p) {
  let answer = "";
  let right = 0;
  let left = 0;
  let check = false;

  // 빈 문자열 인 경우, 빈 문자열 반환
  if (!p.length) return "";

  // 괄호 검사
  for (let i = 0; i < p.length; i++) {
    if (p[i] == "(") left++;
    if (p[i] == ")") right++;

    // 올바른 괄호인지 체크
    // 오른쪽 괄호의 수가 왼쪽 보다 많아질 때 올바른 괄호가 아님 ex- '())'
    if (right > left) check = true;

    // 균형잡힌 괄호가 나오면 u와 v로 쪼개기
    if (left == right) {
      // u가 올바른 괄호가 아닐 때
      if (check) {
        answer += '('
        // p문자열에 대해서 (i+1 ~ p.len) 인덱스까지 v 
        answer += solution(p.slice(i + 1, p.length))
        answer += ')'
        // p문자열에 대해서 (0~i) 인덱스 까지가 u, 나머지는 v
        // u의 첫번째(0), 마지막 문자(i인덱스)를 제거하고 나머지 괄호 방향을 뒤집음
        for(let j=1; j<i; j++){
          if(p[j] == ')') answer += '('
          if(p[j] == '(') answer += ')'
        }
        return answer
      // u가 올바른 괄호일 때
      } else {
        // v에 대해서 1단계부터 다시 수행(재귀)
        answer += p.slice(0, i + 1); // 올바른 괄호는 그대로 이어붙이기
        answer += solution(p.slice(i + 1, p.length))
        return answer;
      }
    }
  }
}

console.log(solution("(()())()")); // (()())()
console.log(solution(")(")); // ()
console.log(solution("()))((()")); // ()(())()