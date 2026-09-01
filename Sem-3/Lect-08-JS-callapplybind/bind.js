
    function greet(city,state,country){
     // this ->user 
     console.log(this);
     console.log("hi");
     console.log(city);
    // console.log(this.name, city, state, country);
}

// greet("gaziaabd","up","india");

const user = {
    name:"Vikas",
    age: 30,
    college:"mirai"
};


let bindgreet=greet.bind(user,"gaziabad","up","india");
// console.log(bindgreet);
bindgreet(); // bind method
greet(); // window
