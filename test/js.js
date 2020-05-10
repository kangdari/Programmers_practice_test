// function solution(n){
//     check(n, 0);
// }
// function check(n, answer){
//     let count = 1;
//     let arr = [];

//     // 최초로 [1] 수열이 나오는 시점
//     if(n.length == 1 && n[0] == 1){
//         console.log(answer)
//         return answer;
//     }
    
//     answer++
//     // 수열 체크
//     for(let i=1; i<=n.length; i++){
//         if(n[i] == n[i-1]){
//             count++
//         }else{
//             arr.push(count)
//             count = 1;
//         }
//     }

//     check(arr, answer)
// }

function solution(n){
    let answer = 0;
    let count = 1;

    while(true){
        let arr = [];

        // 수열 체크
        if(n.length == 1 && n[0] == 1) {
                console.log(answer)
            return answer
        }
        
        answer++

        // 수열 체크
        for(let i=1; i<=n.length; i++){
            if(n[i] == n[i-1]){
                count++
            }else{
                arr.push(count)
                count = 1;
            }
        }
        n = arr
    }
}

solution([1, 1, 3, 3, 2, 2, 4, 5, 1, 1, 1, 3, 3, 3])
solution([1,2,3])
// solution([2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 2, 1, 2])