function solution(n) {
    let answer = '';
    let reminder = 0;
    let share = n;

    while(share !== 0){
        reminder = share % 3;
        share = parseInt(share/3);

        if(reminder === 0){
            answer = '4' + answer;
            share--;
        }else if(reminder === 1){
            answer = '1' + answer
        }else if(reminder === 2){
            answer = '2' + answer
        }
    }
    console.log(answer)
    return answer;
}

solution(3) // 4
solution(15) // 114

// 124 나라의 숫자
// https://programmers.co.kr/learn/courses/30/lessons/12899

// 124 진법은 
// 3으로 나누어 떨어지는 경우 몫-1 해주고  , 나머지 0 대신 4를 넣어줌
// 나머지가 1, 2인 경우 1 => 1, 2 => 2 , 몫은 그대로 
// 1 > 1
// 2 > 2
// 3 > 3
// 4 > 11
// 5 > 12
// 6 > 14
// 9 > 24
// 15 > 114
