const makeAPromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Here is the data";
    if (data) {
      resolve(data);
    } else {
      reject("Data nai");
    }
  });
};

const getPromiseData = async (): Promise<string> => {
  const data = await makeAPromise();
  return data;
};

const reso = getPromiseData();
console.log(reso);

interface ItoDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<ItoDo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await response.json();
};

const getTDo = async (): Promise<void> => {
  const resu = await getTodo();
  console.log(resu);
};

getTDo();
