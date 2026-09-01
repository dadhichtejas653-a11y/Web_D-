// let a=90;
// let str="vikas";
// let present=true;

// let obj={
//     "name":"vikas"
// };

// console.log(obj.__proto__);

// function sum(){
//     console.log("hi");
// };

// console.log(sum.__proto__.__proto__.__proto__);


let a=20.3455334;
 console.log(a.toFixed(2));
// a.__proto__.myfeature=()=>{
//     console.log("mera inbuild feature add ho gya Number prototype me")
// }
// console.log(Number.prototype);
// let b=89;
// b.__proto__.myfeature();

Number.prototype.toFixed=(x)=>{
    console.log("nahi karunga ");
    return x*x;
};
 console.log(a.toFixed(2));
