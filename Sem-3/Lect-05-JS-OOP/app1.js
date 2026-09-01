class Car {
    company ;
    balance ;
    color ;
     constructor(com) {
        this.company = com;
    }
    constructor(bal, col) {
        this.balance = bal;
        this.color = col;
    }
    Car(bal, col) {
        console.log("Car is created..");
        console.log("Balance is: " + bal);
        console.log("Color is: " + col);
    }
    start() {
        console.log(`${this.company} car is starting..`);
    }
    stop() {
        console.log("Car is stopping..");
    }
}


// js does not support method overloading and constructor overloading , so we can only have one constructor in a class. If we define multiple constructors, the last one will overwrite the previous ones. In this case, the constructor that takes only the company name will be used, and the other constructor that takes balance and color will be ignored.
let bmw = new Car("1000", "blue");
let tata = new Car("100", "red");
let bmw1=new Car("BMW");
let mahindra=new Car("M & M");
mahindra.start();

// bmw1.start();


// console.log(bmw.balance);
// console.log(bmw.color);
// console.log(bmw);

// bmw.start();
// bmw.stop();
// bmw.Car("10", "pink");










// console.log(bmw.balance);



// let tata=new Car("50","white");
// let mahindra=new Car("5","green");


// console.log(bmw);
// console.log(tata);
// console.log(mahindra);