function bank() {
    let balance = 0;
    let deposite =(amount)=>{
        balance += amount ;
    }
    let withdraw =(amount)=>{
        balance-=amount ;
    }
    let mybalance =()=>{
        console.log(balance);
    }
    return{deposite, withdraw, mybalance}
}

let Tejas = bank();
Tejas.deposite(2000000);
Tejas.mybalance();
Tejas.withdraw(3000);
Tejas.mybalance();