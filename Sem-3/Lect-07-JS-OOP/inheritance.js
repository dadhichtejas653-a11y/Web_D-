class Animal {
    #a=90;
    b=10;
    c=20;

  eat() {
    console.log("Eating...");
  }
  sleep() {
    console.log(" Sleeping..."+ this.#a);
  }
}

class saif {
    d=90;
}

class Dog extends Animal ,saif {
  bark() {
    console.log("Woof");
  } 
}

const dog = new Dog();


// dog.#a=94;
dog.eat();
dog.sleep();
dog.bark();