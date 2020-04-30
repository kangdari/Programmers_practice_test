function solution(word){
    let answer = [];

    const word_arr = [...word].map(item => {
        // 소문자
        if(lowerCheck(item)){
            return ({
                item,
                lower: true,
            })
        // 대문자
        }else{
            return({
                item,
                lower: false,
            })
        }
    })

    const alpha = [];
    let num = 65;
    for(let i = 0; i<26; i++){
        alpha[i] = String.fromCharCode(num++)
    }

    const change_word = ['Z', 'Y', 'X', 'W', 'V', 'U', 'T',
    'S', 'R', 'Q', 'P', 'O', 'N',
    'M', 'L', 'K', 'J', 'I', 'H',
    'G', 'F', 'E', 'D', 'C', 'B',
    'A']

    answer = word_arr.map(word => {
        if(word.item == ' '){
            return ' ';
        }
        // 대문자
        if(!word.lower){
            const index = alpha.indexOf(word.item)
            return change_word[index]            
        }else{
        // 소문자
            const index = alpha.indexOf(word.item.toUpperCase());
            return change_word[index].toLowerCase();
        }
    })
    return answer.join("")
}

function lowerCheck(word){
    const lower = word.toLowerCase();
    // 소문자
    if(lower === word){
        return true;
    }
    return false;
}

console.log(solution("I love you")); // R olev blf


