function solution(s, n){
    let answer = '';
    let num = 0;

    for(let i=0; i<s.length; i++){
        num = s.charCodeAt(i)

        if(num+n >= 91 && num<= 90 || num+n >= 123 && num<=122){
            num -= 26;
        }
        answer += num == 32 ? " " : String.fromCharCode(num+n) 
    }

    return answer;
}

console.log(solution("a B z", 4))

// console.log('a'.charCodeAt([0])+1)
// console.log(String.fromCharCode(98))

// 65 ~ 90
// 97 ~ 122
