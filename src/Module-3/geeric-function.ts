// generic-interface with function

const simpleFunction = (param: string): Array<string> => {
  return [param];
};
const res = simpleFunction("sdd"); // As like a simple function

// Here is like generic

const genericFunction = <T>(param: T): T[] => {
  return [param];
};

const res2 = genericFunction<string>("Learn Generic Function"); // I can send it as a string, object, array, boolean anything

const res3 = genericFunction<boolean>(true);
// We can declare it like a type

type NameType = {
  name: string;
};
const res4 = genericFunction<NameType>({ name: "Sajal" });

// For Topple function I can write it as like

const genericFunctionWithToople = <X, Y>(param: X, param2: Y): [X, Y] => {
  return [param, param2];
};


const resone = genericFunctionWithToople<string, string>("I am sajal", "I love Bangladesh")
const resone2 = genericFunctionWithToople<string, null>("sajal",null)

interface NameAgeInterface{
    name: string,
    age: number,
}
const resone23 = genericFunctionWithToople<NameAgeInterface,NameAgeInterface>({name:"Sajal", age:50},{name:"sadia",age:20})