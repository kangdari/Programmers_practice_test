function solution(strings, n) {
    strings.sort( (a, b) => {
        if(a[n] > b[n]) return 1; // b a 순
        if(a[n] < b[n]) return -1; // a b 순
        if(a[n] === b[n]) return a.localeCompare(b)
    })
    return strings
}

function solution2(strings, n){
    return strings.sort((a,b) => a[n] == b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]))
}

console.log(solution2(['sun', 'bed', 'car'], 1))
 // [car, bed, sun]

// referenceStr이 compareString보다 앞에 있으면 -1,
// 뒤에 있으면 1, 같으면 0 반환

// 'a'.localeCompare('b') // -1 
// 'b'.localeCompare('a') // 1
// 'c'.localeCompare('c') // 0