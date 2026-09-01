// function greet(village,city,year){
function greet(...arr){
console.log(arr);
    console.log(this);
    // console.log(village);
    year++;
    console.log(year);
    this.age=100;
    this.payment=true;
    // console.log(this.name);
    // this.name="saif";
}

// const user = {
//     name:"Vikas",
//     age:23
// };
const saurav = {
    name:"saurav",
    age:23,
    payment:false,
};
// greet("dasna","gaziabad",2026);  //normal calling  this->window

// greet.call(saurav,"dasna","gaziabad",2026);
// let arr=[234,56,"saurav","dasna",83864,3764,92784];
// greet.apply(saurav,["dasna","gaziabad",2026]);
// greet.apply(saurav,arr);


// console.log("jidhjkdshf");
// console.log(saurav.payment);
