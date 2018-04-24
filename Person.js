// function Person(name, age, height) {
//     this.name = name;
//     this.age = age;
//     this.height = height;
//     this.me = function () {
//         console.log(this);
//     }
// }

class Person {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }

  me() {
    console.log(this);
  }
}

let james = new Person("james", 20, 160);
let kim = new Person("kim", 22, 154);
console.log(james.name);
console.log(kim.name);
console.log(james.me());
console.log(kim.me());
console.log(james.toString());
