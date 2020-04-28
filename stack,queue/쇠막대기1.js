// 정규식을 이용한 풀이

function solution(arrangement) {
    let answer = 0; 
    const stack = [];

    const re = /\(\)/gi; // ()

    arrangement = arrangement.replace(re, '+');

    for(let i=0; i<arrangement.length; i++){
        switch(arrangement[i]){
            // 막대 시작점
            case '(' :
                stack.push(arrangement[i]);
            break;
            // laser
            case '+' : 
                answer += stack.length;
            break;
            // 막대 끝 점
            case ')' : 
                stack.pop()
                answer += 1;
            break;
        }
        // console.log(stack)
    }
    return answer;
}

solution("()(((()())(())()))(())")


// ///[정규식의 gi 설명]
// * g : 발생할 모든 pattern에 대한 전역 검색
// * i : 대/소문자 구분 안함

// () => laser 절단 시 현재 stack의 길이 만큼 조각 갯수 증가.
// ( => stack에 push
// ) => 막대의 끝으로 )와 짝인 ( 하나를 stack에서 pop해주고 절단 갯수 + 1 
// 위 3단계를 배열의 길이만큼 반복

// []                   laser 0
// [ '(' ]              push
// [ '(', '(' ]         push
// [ '(', '(', '(' ]    push
// [ '(', '(', '(' ]    laser > 3
// [ '(', '(', '(' ]    laser > 3 + 3 = 6
// [ '(', '(' ]         ) 6 + 1 = 7
// [ '(', '(', '(' ]    push
// [ '(', '(', '(' ]    laser > 7 + 3 = 10
// [ '(', '(' ] )       10 + 1 = 11
// [ '(', '(' ]         laser 11 + 2 = 13
// [ '(' ]              ) 13 + 1 = 14
// [] )                 14 + 1 = 15
// [ '(' ]              ) 15 + 1 = 16
// [ '(' ]              ) 16 + 1 = 17
// []