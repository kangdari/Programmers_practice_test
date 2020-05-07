function solution(numbers){

    let answer = numbers.map(i => i+'') // 문자 배열로 바꿈.
                        .sort((a,b) => (b+a)*1 - (a+b)*1) // 앞 뒤 대소 비교하여 오름차순으로 정렬
                        .join('') // 하나의 문자로 묶어줌.
                        
    //[ 0, 0, 0, 0 ] 배열의 모든 값이 0이면 0
    return answer[0] == 0 ? '0' : answer
}

// solution([0,0,0,0])
// solution([0,100,0,0])
solution([3,30,34,5,9])