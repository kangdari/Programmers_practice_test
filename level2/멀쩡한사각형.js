function solution(w,h){
    const total = w * h;
    let answer = 0;
    let gcd = 0;

    // 최대 공약수 구하기
    for(let i=(w<h) ? w : h; i>0; i--){
        if( w%i == 0 && h%i ==0){
            gcd = i;
            break;
        }
    }
    // 사용 못하는 사각형의 갯수 = w + h - gcd
    answer = total - (w+h-gcd);

	return answer;
}

solution(8, 12)

// 멀쩡한 사각형
// https://programmers.co.kr/learn/courses/30/lessons/62048