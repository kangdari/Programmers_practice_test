// 전체 논문 중 
// h번 이상 인용된 논문이 h편 이상 
// 나머지 논문이 h번 이하 인용되었다면 h의 최대값이 H-index
function solution(citations){
    let answer = 0
    citations.sort((a,b) => b - a)

    for(let i=0; i<citations.length; i++){
        if(i >= citations[i]) break;
        answer++
    }
    return answer
}

// solution([5,5,5,5,5]) // 5
solution([3,0,6,1,5]) // 3
  
// solution([[3,0,6,1,5]])
// citations 배열을 내림차순 정렬 후  >> [6, 5, 3, 1, 0]
// index | citations[index] 값을 비교
//  0       6
//  1       5
//  2       3
//  3       1   index >= citations[index] 될 때의 index 값이 H-index값
//  4       0