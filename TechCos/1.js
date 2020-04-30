function solution(money){
    const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
    let answer =[]

    answer = unit.map(item => {
        const res = parseInt(money / item);
        money = money % item;
        // money -= res * item;
        return res;
    })
    console.log(answer)
}

solution(50237) //[1, 0, 0, 0, 0, 2, 0, 3, 7]
solution(15000) // [0, 1, 1, 0, 0, 0, 0, 0, 0]