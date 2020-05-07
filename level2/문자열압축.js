function solution(s){ 
    const len = s.length;
    const mid = Math.floor(s.length/2) // 최대 압축 길이
    let minValue = 9999;
    
    // 예외 처리
    if(len === 1) return 1;

    for(let i=1; i<=mid; i++){
        // arr는 압축 문자 배열 (i개씩 압축)
        const arr = []
        for(let j=0; j<len; j+=i){
            arr.push(s.substr(j, i))
        }
        // 압축한 문자열의 길이 중 최솟값 구하기
        const compressionLen = getCompressionLen(arr).length
        if(minValue > compressionLen){
            minValue = compressionLen
        }
    }
    return minValue;
}

function getCompressionLen(arr){
    let count = 1;
    let str = '';
    
    for(let i=0; i<arr.length; i++){
        // 앞 뒤 압축 문자가 같으면
        if(arr[i] === arr[i+1]){
            count++;
        // 다를 경우 문자열 합침
        }else{
            // count가 2이상이면..
            if(count !== 1){
                str += count
            }
            str += arr[i]
            count = 1; // count 초기화
        }
    }
    return str;
}

solution('a') // 1 
solution("aabbaccc") // 7
solution("abcabcdede") // 8 
solution("abcabcabcabcdededededede") // 14
