// console.log("Balance fetching....");

// setTimeout(()=>{
//     console.log("balance check ....");
//     console.log("Money Transfered ....");
// }, 5000);

// setTimeout(()=>{
//     console.log("Dhanyawaad....");
// },6000);

console.log("1");
let setid1=setInterval(()=>{
    console.log("2");
    console.log("4");
},4000);
let setid2=setInterval(()=>{
    console.log("6");
    console.log("8");
},3000);
console.log(setid1);
setTimeout(() => {
    clearInterval(setid2);
}, 1000);

console.log("3");


