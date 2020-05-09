// 하드코딩 > 시간 초과
// function solution(n){
//     let answer = 0

//     if(n == 1) return 0
//     // if(n == 2) return 1

//     for(let i=2; i<=n; i++){
//         let primeNum = true
//         for(let j=2; j<=i-1; j++){
//             if(i%j == 0) {
//                 primeNum = false
//                 break;
//             }
//         }
//         if(primeNum) answer++
//     }
//     return answer;
// }

// 에라토네스의 체
// 2부터 n 까지 모든 수를 나열
// 자기 자신을 제외한 자신의 배수들을 제거
// 남아있는 수 가운데 소수 3을 제외한 3의 배수들 제거
// 남아있는 수 가운데 소수 5을 제외한 5의 배수들 제거
// n 까지 반복 
function solution(n){
    let prime = [];

    if(n<=1) return 0

    for(let i=2; i<=n; i++){
        prime[i] = true;
    }  

    for(let i=2; i<=n; i++){
        // 자기 자신을 제외한 배수들은 예외 처리
        if(prime[i]){
            for(let j= i*i; j<=n; j+=i){
                prime[j] = false
            }
        }
    }
    // return ( prime.join(',').match(/true/g).length)
    return prime.filter(item => item == true).length
}

solution(5)
solution(10)