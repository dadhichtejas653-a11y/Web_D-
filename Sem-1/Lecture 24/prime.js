let num = 49;
let temp = true;

for(let i = 2; i<=num -1 ; i++){
    if(num%i==0){
        temp=false;

    }
}
if(temp==true){
    console.log("Prime Number");
    
}
else{
    console.log("Not Prime Number")
}