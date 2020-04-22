function solution(array, commands){
    return commands.map(command => {
        const [i, j, k] = command; 
        return array.slice(i-1, j).sort((a,b) => a - b)[k-1]
    })
}
// sort( (a,b) => a-b) // 오름차순
// sort( (a,b) => b-a) // 내림 차순

// function solution(array, commands){
//     answer = commands.map(v => {
//         return array.slice(v[0]-1, v[1]).sort((a,b) => a - b)[v[2]-1];
//     })
//     return answer;
// }

// function solution(array, commands) {
//   let answer = [];
//     commands.forEach((e) => {
//         answer.push(array.slice(e[0]-1, e[1]).sort((a,b) => a - b)[e[2]-1]);
//     });
//     return answer;
// }


console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
