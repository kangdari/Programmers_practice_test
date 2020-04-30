const solution = (pobi, crong) => {
    // 예외 처리 - 잘못된 페이지 
    if(pobi[0] - pobi[1] !== -1){
        return -1;
    }
    if(crong[0] - crong[1] !== -1){
        return -1;
    }

    const p = pobi.map(item => check(item));
    const p_max = Math.max(...p);

    const c = crong.map(item => check(item));
    const c_max = Math.max(...c);

    if(p_max === c_max){
        return 0;
    }else if(p_max > c_max){
        return 1;
    }else{
        return 2;
    }
}

// 곱, 합 최댓값 체크
const check = (num) => {
    let sum = 0;
    let mul = 1;

    // item 수 
    while(num > 0){
        const n = num % 10; // 자릿수 
        sum += n;
        mul *= n;
        num = parseInt(num/10);
    }   

    // 누적 합, 누적 곱 중 최댓값 반환
    return sum > mul ? sum : mul;
}


console.log(solution([97, 98], [197, 198])); // 0
console.log(solution([131, 132], [211, 212])); // 1
console.log(solution([1, 2], [211, 212])); // 2
console.log(solution([12, 200], [12,13])) // -1

// 포비 크롱
// 포비가 이기면 1
// 크롱이 이기면 2 
// 무승부 0
// 예외상황 -1 잘못된 페이지