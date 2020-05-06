function solution(w,h){
    const total = w * h;

    // 유클리드 호제법
    // a>b일 떄 a를 b로 나눈 나머지가 r일 때, 
    // a와 b의 최대공약수는 b와 r의 최대 공약수와 같다.
    const gcd = (a, b) => {
        return b === 0 ? a : gcd(b, a%b);
    }

    // console.log(total - (w+h-gcd(w,h)))
    // 사용 못하는 사각형의 갯수 = w + h - gcd
	return total - (w+h-gcd(w,h));
}

solution(8, 12) // 80
