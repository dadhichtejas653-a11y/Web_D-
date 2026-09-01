//Promises

//Promises->

const mypromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let num = Math.random()*10;
        if(num<5){
        resolve(`This Promise is fullfilled ${num}`)
        }else{
            reject(`this promise is rejected ${num}`)
        }
    }, 2000);
})

mypromise.then((response)=>{
   console.log(response);
}).catch(err=>{
    console.log(err);
})