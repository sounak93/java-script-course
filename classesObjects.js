// const student = {
//   name: "Rahul Kumar",
//   marks: 94.5,
//   printMarks: function () {
//     console.log("marks =", this.marks);
//   },
// };

// const employee = {
//   calcTax() {
//     console.log("Tax rate is 10%.");
//   },
// };

// const karanArjun1 = {
//   salary: 50000,
// };
// const karanArjun2 = {
//   salary: 50000,
// };
// const karanArjun3 = {
//   salary: 50000,
// };
// const karanArjun4 = {
//   salary: 50000,
// };

// karanArjun1.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;

// const karanArjun = {
//   salary: 50000,
//   calcTax() {
//     console.log("Tax rate is 20%.");
//   },
// };
// karanArjun.__proto__ = employee;

//class
// class ToyotaCar {
//   constructor(brand, milage) {
//     console.log("Creating new object");
//     this.brand = brand;
//     this.milage = milage;
//   }
//   start() {
//     console.log("Start");
//   }

//   stop() {
//     console.log("Stop");
//   }

//   setBrand(brand) {
//     this.brand = brand;
//   }
// }

// let Fortuner = new ToyotaCar("Fortuner", 10);
// console.log(Fortuner);
// let Lexus = new ToyotaCar("Lexus", 12);
// console.log(Lexus);

//Inheritance

// class Parent {
//   hello() {
//     console.log("Hello");
//   }
// }

// class Child extends Parent {}

// let obj = new Child();

class Person {
  constructor(name) {
    this.species = "homo sapiens";
    this.name = name;
  }
  eat() {
    console.log("eat");
  }

  //   sleep() {
  //     console.log("sleep");
  //   }

  //   work() {
  //     console.log("do nothing");
  //   }
}

class Engineer extends Person {
  constructor(name) {
    super(name); // to invoke parent class constructor
  }
  work() {
    super.eat();
    console.log("Solve problems,do some work");
  }
}

// class Doctor extends Person {
//   work() {
//     console.log("treat patients");
//   }
// }

let engObj = new Engineer("Sounak");
