// function solution(arr){
//     let answer = [];

//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === arr[i+1]){
//             continue;
//         }
//         answer.push(arr[i])
//     }
//     return answer;
// }

function solution(arr){
    let answer = [];
    answer = arr.filter((e, i) => e !== arr[i+1])
    return answer;
}

solution([1,1,3,3,0,1,1])
solution([4,4,4,3,3])