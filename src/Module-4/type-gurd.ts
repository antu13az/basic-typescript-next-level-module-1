// Ts type guard

// Key of guard
type Alphanumeric = string | number;

function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

// In guard

type NormalUserType = {
  name: string;
};
type AdminUserType = {
  name: string;
  role: "admin";
};

const normalUser: NormalUserType = { name: "Mr Kaka" };
const adminUerType: AdminUserType = { name: "Mr Kaka", role: "admin" };

function getUser(user: NormalUserType | AdminUserType): string {
  if ("role" in user) {
    return "I am admin my role is admin";
  } else {
    return " I am a normal user";
  }
}

console.log(getUser(normalUser));
console.log(getUser(adminUerType));

// intenseof guard

class NewAnimalClass {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSoundss() {
    console.log("I am Sounding");
  }
}

class Dog extends NewAnimalClass {
  constructor(name: string, species: string, sound: string) {
    super(name, species, sound);
  }
  makeBark() {
    console.log("I am barking cause I am dog");
  }
}
class Cat extends NewAnimalClass {
  constructor(name: string, species: string, sound: string) {
    super(name, species, sound);
  }
  makeMeao() {
    console.log("I am Meaoing cause I am Disha");
  }
}

const makeDogInstance: NewAnimalClass = new Dog(
  "Baker Vai",
  "Doge",
  "Humba Humba Hu"
);
const makeCatInstance: NewAnimalClass = new Cat(
  "Disha",
  "Beral",
  "Meaooo Meaooo"
);

function getAnimalSound(animal: NewAnimalClass) {
  if (animal instanceof Dog) {
    animal.makeBark();
  } else if (animal instanceof Cat) {
    animal.makeMeao();
  } else {
    animal.makeSoundss();
  }
}

getAnimalSound(makeDogInstance);
getAnimalSound(makeCatInstance);
