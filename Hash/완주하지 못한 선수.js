function solution(participant, completion) {
    // 이름 정렬
    participant.sort();
    completion.sort();

    // 첫번째 풀이 => 배열 전체를 순회하고 값을 반환
    // return participant.filter((item,i) => item !== completion[i])[0]

    // 두번째 풀이 => 배열을 순회하다 값을 찾으면 바로 반환
    for(let i=0; i<participant.length; i++){
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }

    // while(participant.length){
    //     let item = participant.pop();
    //     if(item !== completion.pop()) {
    //         console.log(item);
    //         return item;
    //     }
    // }
}


// // 시간 초과 뜸
// // map, indexOf() 둘 모두 for문을사용하므로
// // 이중 for문임.
// function solution(participant, completion) {
//     let answer ='';

//     completion.map(item => {
//         const index = participant.indexOf(item);
//         participant.splice(index, 1);
//     })
//     answer = participant[0];
//     return answer;
// }

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);


