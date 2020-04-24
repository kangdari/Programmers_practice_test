function solution (answers){
    let answer = [];
    let score = [0, 0, 0]; // 정답 수 배열
    const a = [1,2,3,4,5]
    const b = [2,1,2,3,2,4,2,5]
    const c = [3,3,1,1,2,2,4,4,5,5]

    // 정답 비교
    answers.forEach( (item, i) => {
        if(item === a[i % a.length]){
            score[0]++;
        }
        if(item === b[i % b.length]){
            score[1]++;
        }
        if(item === c[i % c.length]){
            score[2]++
        }
    })  
    
    // 최대 정답 수 체크
    // const max = Math.max.apply(null, score);
    // const max = Math.max(score[0], score[1], score[2])
    const max = Math.max(...score)

    score.forEach((item,i) => {
        if(item === max){
            answer.push(i+1);
        }
    })
    
    return answer;
}
 
console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1,3,2,4,2])); // [1, 2, 3]