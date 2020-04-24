// 주의할 점
// C, D 작업이 끝나더라도 B 작업이 끝나지 않으면 C, D 작업은 배포하지 못함.


function solution(progresses, speeds){
    let answer = [];

    while(progresses.length > 0){
        
        // 작업시작
        // progresses = progresses.map((v, i) => {
        //     return v += speeds[i]
        // })
        // 작업시작 2
        progresses = progresses.map((v, i) => {
            if(v < 100){
                return v += speeds[i]
            }
            return v
        })

        // 첫 번째 작업이 배포 가능할 때...
        if(progresses[0] >= 100){
            let count = 0;
            // 완료된 작업들을 체크
            for(let i=0; i<progresses.length; i++){
                // 완료된 경우 count++
                if(progresses[i] >= 100) count++;
                // 아직 완료되지 않은 작업이 있을 시 이전에 완료된 작업은 배포 처리 
                // 또는 모든 작업이 완료되었을 때...
                if(progresses[i] < 100 || count === progresses.length){
                    answer.push(count);
                    progresses.splice(0, count);
                    speeds.splice(0, count); 
                    break;
                }  
            }
        }
    }
    return answer;
}

// solution([93,30,55], [1,30,5]) // [2,1]
solution( [40, 93, 30, 55, 60, 65], [60, 1, 30, 5 , 10, 7]) // [ 1, 2, 3]
