const searchName = (value: string | null) => {
  if (value === null) {
    console.log("There is nothing to search");
  } else {
    console.log("searching");
  }
};
searchName(null);
// unknown type
const myCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const speedConverted = (speed * 1000) / 3600;
    console.log(speedConverted);
  }
  if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");
    console.log(value);
    const speedConverted = (parseFloat(value) * 1000) / 3600;
    console.log(speedConverted);
  }
};

myCarSpeed(10);
myCarSpeed("10 kh/hour");


// never type

const throwError =(message: string):never=>{
throw new Error(message)
}
throwError("Error Hoiche Mama Amake MEre felooo")