function solution(s){
    const arr = [...s] 
    arr.sort((a,b) => {
        if(a > b) return -1
        if(a < b) return 1
    })
    return arr.join('')
    
    // return s.split('').sort((a,b) => a>b ? -1 : 1 ).join('')

   // return s.split('').sort().reverse().join('')

}

console.log(solution("Zbcdefg"))// gfedcbZ