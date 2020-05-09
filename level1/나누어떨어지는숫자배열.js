function solution1(arr, divisor) {
    const answer = arr.filter(item => {
        if(item % divisor === 0){
            return item
        }
    }).sort((a,b) => a - b)

    // if(!answer.length) return [-1]
    // return answer
    return answer.length == 0 ? [-1] : answer;
}

function solution2(arr, divisor){
    const answer = []

    arr.map(item => item % divisor == 0 && answer.push(item))
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a - b)
}

solution1([5, 9, 7, 10], 5)
solution1([2, 36, 1, 3], 1)
solution2([3, 2, 6], 10)