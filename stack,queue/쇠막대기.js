function solution(arrangement) {
    let answer = 0; 
    const arr = [...arrangement];
    let stack = [];

    for(let i=1; i<arr.length; i++){
        // 막대 시작점
        if(arr[i-1]=='('){
            stack.push(arr[i])
        }
        // laser
        if(arr[i-1]=='(' && arr[i]==')'){
            stack.pop();  
            answer += stack.length;
        }
        // 막대의 끝
        if(arr[i-1]==')' && arr[i]==')'){
            stack.pop();
            answer += 1;
        }
    }
    return answer;
}


solution("()(((()())(())()))(())")