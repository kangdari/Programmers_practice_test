// 1~n까지 3 6 9가 들어간 수만큼 박수를 친다. 
// 몇번 치는지 리턴해라.
// 30 31 32 33
// 짝 짝 짝 짝짝


const solution = (number) => {
    let answer = 0;

    // 총 박수 수
    for(let i=1; i<=number; i++){
        answer += clap(i);
    }
    return answer;
}

// 숫자 하나 당 치는 박수의 수
const clap = (num) => {
    let sum = 0;
    
    while(num > 0){
        const res = num % 10;
        if(res === 3 || res === 6 || res === 9){
            sum++;
        }
        num = parseInt(num / 10);
    }    
    return sum;
}

console.log(solution(13)) // 4
console.log(solution(33)) // 14