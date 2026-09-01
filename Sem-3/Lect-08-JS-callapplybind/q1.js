let arnav={
    name:"arnav goshvami",
    age:23,
    dist:"vaishali",
    payment:false
};

let ekansh={
    name:"ekansh bansal",
    age:23,
    credit_card:function (x,y){
        console.log(this);
        this.payment=true;
        console.log("arnav payment completed..");
    },
    display:()=>{
        console.log(this);
    }
};

// ekansh.credit_card.call(arnav,23,78);
ekansh.display.call(arnav);

// ekansh.credit_card();
// ekansh.display();

console.log(arnav.payment);  //

