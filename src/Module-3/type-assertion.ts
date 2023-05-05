let emni: any;

emni = "Next Level Web Development";

<string>emni 
const convertGm = (param: string | number): string | number | undefined => {
  if (typeof param === "number") {
    const getResult = param * 1000;
    return getResult;
  }
  if (typeof param === "string") {
    const getResult = parseFloat(param) * 1000;
    return getResult;
  }else{
    const cf = "hello"
    return cf
  }
};
const getFinalResult = convertGm(10) as number
const getFinalResult2 = convertGm("10") as string
