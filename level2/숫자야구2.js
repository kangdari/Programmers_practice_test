function solution(baseball){
    let answer = 0

    // 각자 서로 다른 1~9까지 3자리 임의의 숫자
    for(let i=123; i<=987; i++){
        // 각 자리 수
        const [x, y, z] = (i+"").split('')
        let count = 0;

        // 1~9 까지
        if(x == '0' || y == '0' || z == '0') continue;
        if(x == y || x == z || y == z) continue;
        
        // 세자리 수 체크, 질문의 수만큼
        for(let a=0; a<baseball.length; a++){
            let strike = 0
            let ball = 0

            const [query, query_strike, query_ball] = baseball[a]
            // 질문의 각 자리 수
            const [query_x, query_y, query_z] = String(query)
            if(x == query_x) strike++
            if(y == query_y) strike++
            if(z == query_z) strike++
            if(strike !== query_strike) break;
            
            if(x == query_y || x == query_z) ball++
            if(y == query_x || y == query_z) ball++
            if(z == query_x || z == query_y) ball++
            if(ball !== query_ball) break;

            if(strike == query_strike && ball == query_ball) count++
            // if(a == baseball.length-1) answer++;
        }
        if(count==baseball.length) answer++
    }
    return answer
}

solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]])