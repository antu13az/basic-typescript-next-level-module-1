class PersonClass {
  constructor(
    public name: string,
    public age: number,
    public address: string
  ) {}

  makeSleep(hour: number): string {
    return `The ${this.name} sleep ${hour}`;
  }
}

class Student extends PersonClass {
  //   constructor(
  //     public name: string,
  //     public age: number,
  //     public address: string
  //   ) {}

  //   makeSleep(hour: number): string {
  //     return `The ${this.name} sleep ${hour}`;
  //   }

  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

class Teacher extends PersonClass {
  constructor(
    name: string,
    age: number,
    address: string,
    public designation: string
  ) {
    super(name, age, address);
  }

  takeClass(takeclass: number): string {
    return `This ${name} will take ${takeclass} classes`;
  }
}


const teacer1 = new Teacher("Y",54, "Usa", "profesor ")