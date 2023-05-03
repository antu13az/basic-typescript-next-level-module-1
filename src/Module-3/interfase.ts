//Type Alias..
type User = {
  name: string;
  age: number;
};
// Type Interface
interface IUser {
  name: string;
  age: number;
}

const useWithTypeAlias: User = {
  name: "abas",
  age: 20,
};

const userWithInterface: IUser = {
  name: "Mohammod",
  age: 25,
};

interface IExtendedUser extends IUser {
  role: string;
}

const myNewUse: IExtendedUser = {
  name: "Omanush",
  age: 200,
  role: "unknown",
};

// Type Alias
type addNumberType = (num1: number, num2: number) => number; // Keno ai khane => arrow use korlam.

// alis a sadharanoto type ta Capital e likhte hoy kintu aikhane small e keno likhlam..

// Type Interface
interface IAddNumbers {
  (num1: number, num2: number): number; //   Keno eikhane : use Korlam
}

const addNumber: IAddNumbers = (num1, num2): number => {
  return num1 + num2;
};

//   Interface and alias for an array

// alias
type RollNumbertype = number[];
// interface
interface IRollnumberType {
  [index: number]: number;
}

const PlayersNumber: IRollnumberType = [1, 8, 9, 8];

// GenericTypeArray

type GenericArray<SuperTypeArray> = Array<SuperTypeArray>;

// One Like Tht
const arrayOne: number[] = [15, 77, 98, 87];
const arrayTwo: string[] = ["Hamid", "kayum", "Masud"];
const arrayThree: boolean[] = [true, false];

// another like that
const arrayFour: GenericArray<number> = [15, 77, 98, 87];
const arrayFive: GenericArray<string> = ["Hamid", "kayum", "Masud"];
const arraySix: GenericArray<boolean> = [true, false];

// genericType Topple

type GenericTypeTuple<X, Y> = [X, Y];

type RelationSalaryType = {
  name: string;
  salary: number;
};
interface RelationSalaryType2 {
  name: string;
  salary: number;
}

const relationWithMyCrush: GenericTypeTuple<string, string> = ["Sajal", "44"];

const relationSalary: GenericTypeTuple<RelationSalaryType2, string> = [
  {
    name: "Sajal",
    salary: 5000000,
  },
  "sokina",
];
