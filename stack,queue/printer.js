// level2 - 프린터

// 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
// 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
// 3. 그렇지 않으면 J를 인쇄합니다.

// priorities: 중요도 순서가 담긴 배열
// location: 요청한 문서의 현재 대기목록의 위치(index) 0 ~ 대기 작업 수 - 1까지

function solution(priorities, location) {
  let answer = 0; // 인쇄된 순서
  const arr = [];

  priorities.map((item, index) =>
    arr.push({
      value: item,
      location: index === location,
    })
  );

  while (true) {
    const currentPrint = arr.splice(0, 1)[0]; // 0번째 인덱스에서 1개 잘라냄
    // const currentPrint = arr.shift() // 첫번째 요소 제거하고 리턴

    // 현재 프린터 중요도보다 높은 중요도가 있는지 체크 
    // some 함수: 조건 충족 시 true 반환
    let res = arr.some((item) => currentPrint.value < item.value);
    // 우선 순위 아님
    if (res) {
      arr.push(currentPrint);
      // 출력
    } else {
      answer++; // 출력 순위 up
      if(currentPrint.location){
        return answer;
      }
    }
  } 

}

console.log(solution([2, 1, 3, 2], 2)); // 1

