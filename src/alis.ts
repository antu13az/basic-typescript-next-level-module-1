type CrushType = {
  name: string;
  age?: number;
  address: string;
  profession: string;
};

const crushOne: CrushType = {
  name: "Sona Pakhi",
  age: 25,
  address: "Mosthopapur",
  profession: "Next.js webbbb",
};
const crushTwo: CrushType = {
  name: "Jan Pakhi",
  address: "Mosthopapur",
  profession: "Next.js webbbb",
};

// alis sum,subtractions,multiplication, division
type calulateOperationType = (x: number, y: number) => number;
const calculate = (
  number1: number,
  number2: number,
  operation: calulateOperationType
) => {
  return operation(number1, number2);
};

calculate(50, 30, (x, y) => x + y);
calculate(50, 30, (x, y) => x - y);
calculate(50, 30, (x, y) => x * y);
calculate(50, 30, (x, y) => x - y);

// console.log(calculate);
