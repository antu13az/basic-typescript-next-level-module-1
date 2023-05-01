// union type

type NoobDeveloper = {
  name: string;
};

// type juniorDeveloper = {
//   name: string;
//   expertise: string;
//   experience: number;
// };
type juniorDeveloper = NoobDeveloper & {
  name: string;
  expertise: string;
  experience: number;
};

const newDeveloper: NoobDeveloper | juniorDeveloper = {
  name: "Sajal",
  experience: 6,
  expertise: "Node.js",
};

type NextLevelDeveloper = juniorDeveloper & {
  leadershipSkills: number;
};
const developer: NextLevelDeveloper = {
  name: "Mir Vai",
  leadershipSkills: 5,
  experience: 2,
  expertise: "Typescript",
};
