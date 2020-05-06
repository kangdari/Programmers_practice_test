function solution(board, moves){
    let stack = [];
    let answer = 0;

    moves.forEach(move => {
        for(let i=0; i<board.length; i++){
            // 0이 아니라면 뽑기
            if(board[i][move-1] !== 0){
                // stack 비교
                const len = stack.length;
                // 마지막 인형과 현재 뽑은 인형이 같을 때
                if(stack[len-1] === board[i][move-1]){
                    stack.pop()
                    answer += 2
                }
                // 인형이 같지 않을 때는 바구니에 담기
                else{
                    stack.push(board[i][move-1])
                }
                // 뽑은 인형은 0으로 변경
                board[i][move-1] = 0    
                break;
            }
        }
    })
    return answer;
}


solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]);

// 크레인 인형뽑기 게임
// https://programmers.co.kr/learn/courses/30/lessons/64061