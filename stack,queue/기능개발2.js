// 주의할 점
// C, D 작업이 끝나더라도 B 작업이 끝나지 않으면 C, D 작업은 배포하지 못함.

function solution(progresses, speeds){
    let answer = [];

    // 
    while(progresses.length > 0){
        // 작업 시작
        for( v in progresses){
            if(progresses[v] < 100){
                progresses[v] += speeds[v]
            }
        }

        // 하루에 배포에 작업의 수
        let count = 0;

        // 첫번째 작업이 완료되었을 때 => 배포 시작
        // 반복하여 완료된 모든 작업 체크
        while(progresses[0] >= 100){
            count++;
            // 완료된 작업은 배열에서 제거
            progresses.shift();
            speeds.shift();
        }
        if(count){
            answer.push(count)
        }
    }

    return answer;
}

// solution([93,30,55], [1,30,5]) // [2,1]
solution( [40, 93, 30, 55, 60, 65], [60, 1, 30, 5 , 10, 7]) // [ 1, 2, 3 ]
