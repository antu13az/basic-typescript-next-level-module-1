class Person1 {
  takeNav() {
    console.log("I am sleeping 10 hour per der");
  }
}

class Student1 extends Person1 {
  takeNav() {
    console.log("I am sleeping 6 hour per der");
  }
}
class Developer extends Person1 {
  takeNav() {
    console.log("I am sleeping 5 hour per der");
  }
}

function getNap(param: Person1) {
  param.takeNav();
}

const person1 = new Person1();
const person2 = new Student1();
const person3 = new Developer();

getNap(person1);
getNap(person2);
getNap(person3);

class Shape {
  getArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(public redius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.redius * this.redius;
  }
}

class Rectangle extends Shape {
  constructor(public height: number, public weight: number) {
    super();
  }

  getArea(): number {
    return this.height * this.weight;
  }
}


function getAreaShepe(param: Shape){
console.log(param.getArea());
}


getAreaShepe(new Circle(10))
getAreaShepe(new Rectangle(50,30))