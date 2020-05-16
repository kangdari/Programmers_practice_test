function solution(skill, skill_trees) {
    let answer = 0;

    for(let i=0; i<skill_trees.length; i++){
        let check = []

        for(let j=0; j<skill_trees[i].length; j++){
            if(skill.indexOf(skill_trees[i][j]) !== -1){
                check.push(skill.indexOf(skill_trees[i][j]))
            }
        }
        // 스킬트리에 없는 스킬을 찍은 경우는 무조건 참
        if(check.length === 0){
            answer++;
            continue;
        }
        // 길이가 1이고 첫 스킬을 찍은 경우
        if(check.length === 1 && check[0] === 0){
            answer++;
            continue;
        }
        // 첫 스킬을 배우지 않았을 때...
        if(check[0] !== 0){
            continue;
        }

        let flag = true
        for(let i=0; i<check.length-1; i++){
            // 첫 스킬을 안 찍은 경우, 선행 스킬을 안 찍은 경우
            if(check[i+1] - check[i] !== 1) {
                flag = false;
                break;
            }
        }
        if(flag) answer++
    }
    return answer;
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]) // 2
solution("ABC", ["A","B","C"]) // 1
solution("CBD", ["G","G","G"]) // 3