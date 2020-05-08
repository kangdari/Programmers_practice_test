function solution(baseball){
    let answer = 0

    // 세자리 수 ijk 생성하고 검사 ( 123 ~ 987 )
    for(let i=1; i<=9; i++){
        for(let j=1; j<=9; j++){
            for(let k=1; k<=9; k++){
                // 서로 다른 숫자일 때
                // 각 자리의 수가 중복될 경우 해당 반복문 단계 중지
                if(i==j || i==k || j==k) continue;

                let count = 0;

                // baseball의 크기만큼 반복
                // 질문 하나에 대해서 모든 경우를 비교(중복하지 않는 세자리수 123~987)
                // 각 질문의 strike와 ball수가 같은 세자리 수 체크
                for(let a=0; a<baseball.length; a++){
                    // baseball[a][0]은 질문한 세자리 수의 각 자릿수
                    const first = Math.floor(baseball[a][0]/100)
                    const second = Math.floor(baseball[a][0]%100/10)
                    const third = Math.floor(baseball[a][0]%100%10)

                    let strike = 0;
                    let ball = 0;

                    if(i == first) strike++
                    if(i == second || i == third) ball++

                    if(j == second) strike++
                    if(j == first || j == third) ball++

                    if(k == third) strike++
                    if(k == first || k == second) ball++

                    // 하나의 임의 세자리 수가  주어진 질문의 경우의 strike와 ball의 개수에 만족하는 경우
                    // 카운팅
                    if(strike == baseball[a][1] && ball == baseball[a][2]){
                        count++;
                    }
                }
                // 카운트의 수가 주어진 질문들의 수와 같다면 해당 임의 세자리 수는 정답이 될 수 있다.
                if(count == baseball.length) answer++
            }
        }
    }
    return answer;
}

solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]])
