function solution(n, t, m, p){
    let str = ''
    let answer = ''
    let count = 0;

    // t*m , 말해야 할 개수 * 참여 인원 수
    while(count < t*m ){
        str += count.toString(n)
        count++
    }

    let order = p - 1; // 첫 순서 (index는 0부터)
    for(let i=0; i<t; i++){
        answer += str.slice(order, order+1).toUpperCase()
        order += m
    }

    return answer
}

solution(2,4,2,1)
solution(16,16,2,1)
solution(16,16,2,2)