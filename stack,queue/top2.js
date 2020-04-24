function solution(heights) {
    let answer = [];

    answer = heights.map((v, i) => {
        // i = 0이 되면 반복 중단.
        while(i){
            i--;
            // 송신탑 높이 보다 높은 수신 탑을 찾을 경우
            if(v < heights[i]){
                return i+1;
            }
        }
        return 0;
    })

    return answer;
}


(solution([6,9,5,7,4]));
// (solution([3,9,9,3,5,7,2]));
// (solution([1,5,3,6,7,6,5]));
