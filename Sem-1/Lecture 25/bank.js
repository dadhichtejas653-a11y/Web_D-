function openbankaccount(){
    let balance = 0;

    function deposite(n){
        balance = balance + n ;
        console.log('updated balance is = ' + balance);
    }
    function withdraw(n){
        balance = balance - n ;
        console.log('updated balance is = ' + balance);
    }
    return (deposite,withdraw);
}

let paaji = openbankaccount();
paaji.deposite(1600);
paaji.withdraw(1500);
paaji.deposite(100000000);

let chootu = openbankaccount();
chootu(1000);
