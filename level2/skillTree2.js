// function solution(skill, skill_trees) {
//     function isCorrect(n) {
//         console.log(n)
//         // const test = '[' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter(v => !skill.includes(v)).join('') + ']*';
//         let test = skill.split('');
//         for (var i = 0; i < n.length; i++) {
//             if (!skill.includes(n[i])) continue;
//             if (n[i] === test.shift()) continue;
//             return false;
//         }
//         return true;
//     }    
//     console.log(skill_trees.filter(isCorrect).length)
//     return skill_trees.filter(isCorrect).length;
// }

// solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]) // 2


function solution(skill, skill_trees) {
    

    const check = (sk) => {
        const arr = skill.split('')

        for(let i=0; i<sk.length; i++){
            // 선행 스킬셋에 해당되는 스킬이 아닌 경우 >> 다음 반복
            if(!arr.includes(sk[i])) continue; 
            // 선행 스킬셋에 포함된 스킬 중 스킬셋 순서에 맞게 스킬을 찍은 경우 >> 다음 반복
            if(sk[i] === arr.shift()) continue;

            // 스킬셋 순서에 맞지 않게 찍은 경우 false 반환
            return 0;
        }
        return 1;
    }
    
    // console.log(skill_trees.filter(check).length)
    return skill_trees.filter(check).length;
}



solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]) // 2
solution("CBD", ["FFF", "FFF", "FFCF"]) // 2
