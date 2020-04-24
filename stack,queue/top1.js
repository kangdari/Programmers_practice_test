function solution(heights) {
    let answer = [];

    for(let i=heights.length-1; i>=0; i--){
        if(i === 0){
            answer.unshift(0)
        }
        for(let j=i-1; j>=0; j--){
            // 신호 수신
            if(heights[i] < heights[j]){
                answer.unshift(j+1);
                break;
            }
            if(j === 0){
                answer.unshift(0)
            }
        }
    }
    console.log(answer)
    return answer;
}


(solution([6,9,5,7,4]));
(solution([3,9,9,3,5,7,2]));
(solution([1,5,3,6,7,6,5]));
