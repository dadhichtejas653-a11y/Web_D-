const p1 = Promise.resolve(10); // it returns the new promise and resolve the statement



const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("p2");
    }, 100);
    
});

const p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("p3");
    }, 150);
    
});

const p4 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("p4");
    }, 130);
    
});

// const result = Promise.all([p1,p2,p3,p4]);
// console.log(result.then((response)=>console.log(response)));


// const result2 = Promise.any([p1,p2,p3,p4])
// result2.then((respone)=>console.log(response))


const result3 = Promise.race([p1,p2,p3,p4])
result3.then((respone)=>console.log(response))

