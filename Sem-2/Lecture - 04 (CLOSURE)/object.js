// let gurdeep={
//      name : "paaji",
//      age:20,
//      college : "Hi-Tech"
// }
// let {name,age:myage,district="Delhi"}=gurdeep;
// console.log(district);




//spread
// let arr=[10,33,45,67];
// let brr=[12,23,68,99];
// let ans=[...arr,...brr];
// console.log(ans);

// function display(...arr) {
//     console.log(arr);
// }
// display(23,34,12,67,1,2,3,4,78) 

let arr=[23,1,46,67];
let element=45;
let idx=arr.indexOf(element);
console.log(idx);

arr.splice(idx,1);
console.log(arr);


let name ="Ayush Pandey"
let age=12;
let message=`My name is ${name} and age is ${age}`
console.log(message);




