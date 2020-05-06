// 하드 코딩
function solution(v) {
    let answer = []

    if(v[0][0] === v[1][0]){
        answer[0] = v[2][0]
    }else if(v[1][0] === v[2][0]){
        answer[0] = v[0][0]
    }else if(v[0][0] === v[2][0]){
        answer[0] = v[1][0]
    }

    if(v[0][1] === v[1][1]){
        answer[1] = v[2][1]
    }else if(v[0][1] === v[2][1]){
        answer[1] = v[1][2]
    }else if(v[1][1] === v[2][1]){
        answer[1] = v[0][1]
    }

    console.log(answer)
}
// 반복문 풀이
function solution2(v) {
    let answer = []

    for(let i=0; i<2; i++){
        if(v[0][i] === v[1][i]){
            answer[i] = v[2][i]
        }else if(v[0][i] === v[2][i]){
            answer[i] = v[1][i]
        }else if(v[1][i] === v[2][i]){
            answer[i] = v[0][i]
        }
    }
    console.log(answer)
}
// XOR 연산자 사용
// 같으면 0, 다르면 1
// ex) 10^4 = 14, 4^4=0 , 14^4= 10
function solution3(v) {
    let answer = [];

    answer[0] = v[0][0]^v[1][0]^v[2][0]
    answer[1] = v[0][1]^v[1][1]^v[2][1]

    console.log(answer)
}

solution([[1,4], [3,4], [3,10]]); // [ 1, 10 ]
solution([[1, 1], [2, 2], [1, 2]]); // [ 2, 1]
