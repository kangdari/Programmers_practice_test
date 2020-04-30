const num = 12345;

const solution = (num) => {
    return num.toString().split('').reverse().join('')
}

console.log(solution(num))