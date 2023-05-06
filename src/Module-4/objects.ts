class TestClass {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(` ${this.name} says ${this.sound}`);
  }
}

const dog = new TestClass("Tomi", "Kutta", "Gheoo Gheoo");
const cat = new TestClass("Disha", "Baro Biral", "Meao Meao");
dog.makeSound();
cat.makeSound();
