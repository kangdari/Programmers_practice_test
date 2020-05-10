// 문자열의 길이가 같고
// 정렬해서 같은 수 이면 에그머시기 수

function solution(n){

    const arr = n.map(num => {
        return (num+'').split('').sort().join('')
    });

    const answer = new Set(arr).size
    console.log(answer)
    return answer

}

// solution([112, 1814, 121, 1481, 1184])
// solution([123, 456, 789, 321, 654, 987])
solution([1, 2, 3, 1, 2, 3, 4])
// solution([123, 234, 213, 432, 234, 1234, 2341, 12345, 324])