class Animal {
  speak() {
    console.log("Animal Sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof");
  }
}



const dog = new Dog();

const animal= new Animal();

animal.speak(); // Animal Sound

dog.speak(); // Woof