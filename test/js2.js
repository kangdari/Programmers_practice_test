function solution(reqs){
    let answer = []
    let customer = []

    reqs.forEach(item => {
        const [order, id, money] = item.split(' ')
        switch(order){
            case 'DEPOSIT' :
                // 계좌가 있으면 입금 요청
                if(check(id)){
                    deposit(id, money)
                    answer.push(200)
                }else{
                    answer.push(404)
                }
                break;
            case 'CREATE' :
                // 계좌가 존재하는지 확인
                if(check(id)){
                    answer.push(403)
                }else{
                    // 계좌 생성
                    customer.push({
                        id,
                        limit: -money,
                        money: 0 
                    })
                    answer.push(200)
                }
                break
            case 'WITHDRAW' :
                if(check(id)){
                    // 인출 성공
                    if(withdraw(id, money)){
                        answer.push(200)
                    }else{
                        answer.push(403)
                    }
                }else{
                    answer.push(404)
                }
                break    
        }
    });

    function withdraw(id, money){
        const user = customer.find(item => item.id == id)
        const m = Number(money)
        // 현재 금액, 제한
        
        // 출금 가능
        if(Math.abs(user.limit - user.money) >= m){
            user.money -= m
            return true
        }else{
            return false
        }
    }

    // 계좌 체크 함수
    function check(id){
        const res = customer.find(cust => cust.id === id)
        return !!res
    }

    function deposit(id, money){
        const user = customer.find(item => item.id == id)
        user.money += Number(money)
    }

    console.log(answer)
    return answer
  
}


// solution([ "CREATE 3a 300000", "DEPOSIT 3a 300000", "WITHDRAW 3a 150001"]) // 200 200 200
// solution(["DEPOSIT 3a 10000", "CREATE 3a 300000", "WITHDRAW 3a 150000", "WITHDRAW 3a 150001"]) // 404, 200, 200, 403
solution(["DEPOSIT 3a 10000", "CREATE 3a 100", "CREATE 3a 100", "WITHDRAW 3a 150001",
 "WITHDRAW 3a 99", "WITHDRAW 3a 2", "WITHDRAW 3a 1", "CREATE 4a 100",]) // 404 200 403 403 200 403 200 200