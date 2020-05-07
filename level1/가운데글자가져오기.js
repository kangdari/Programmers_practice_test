function solution(s) {
    let answer = ''
    const len = s.length;

    // 짝수
    if(len % 2 === 0){
        answer = s.substr(parseInt(len/2)-1, 2)
    }else{
        // 홀수
        answer = s.substr(parseInt(len/2), 1)
    }
    return answer
}

solution("abcde") // c
solution("qwer") // we