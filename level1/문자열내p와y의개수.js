function solution1(s){
    let pCount = 0
    let yCount = 0

    s.toLowerCase().split('').forEach(val => {
        if(val == 'p') pCount++
        if(val == 'y') yCount++
    });

    // 
    if(pCount == yCount || ( !pCount && !yCount ) ){
        return true
    }else if(pCount !== yCount){
        return false
    }
}

// 배열 내장함수 사용
function solution2(s){
    return s.toLowerCase().split('p').length === s.toLowerCase().split('y').length
}

// 정규식 이용
function solution3(s){
    // g : global 검색, i: 대소문자 구별 x
    // 검색 결과가 없을 경우 match 함수는 null을 반환하므로 예외처리가 필요함.
    // or 연산자를 사용하여 null 반환 시 빈 배열([])의 길이 반환
    return (s.match(/y/gi)||[]).length === (s.match(/p/gi)||[]).length
}

console.log(solution3("pPoooyY")) // t
console.log(solution3("Pyy")) // f
console.log(solution3("")) // f
