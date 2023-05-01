function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(5, 2);

const fadd = (num1: number, num2: number): number => num1 + num2;

//spreed operator ,

const myPlayers = ["Rajib", "forkan", "imrajul", "maysha"];
const newPlayers = ["rohan", "abbas", "mahis"];

const adjustAll = myPlayers.push(...newPlayers);
console.log(adjustAll);

const gritingsFriends = (...friends: string[]): void =>
  friends.forEach((friend)=> {
    console.log(friend);
  });

gritingsFriends("eka", "baka", "taka", "kola makha","allu vorla");

