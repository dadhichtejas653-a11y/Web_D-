const p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("hello");
    }, 2000);
})
console.log("start");

// async function fun() {
//     console.log("async start");
//     const response = await p1;
//     console.log(p1);
    
//     console.log("async end");
// }

// fun()
// console.log("end");


async function fun() {
    console.log("async start");
    const response = await p1;
    return response;
}

// fun().then((data)=>console.log(data)).catch((err)=>console.log(err));


async function fun2() {
    const data = await fun();
    console.log(data);
    
}
fun2();