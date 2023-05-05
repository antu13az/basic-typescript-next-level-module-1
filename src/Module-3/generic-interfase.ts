// Generic Interface

interface CrushInterface<T, U = null, B = null> {
  name: string;
  husband: T;
  wife?: U;
  Child?: B;
}

const crush1: CrushInterface<boolean> = {
  name: "Sakira",
  husband: true,
};
const crush2: CrushInterface<string> = {
  name: "Sakira",
  husband: "sajal",
};

interface HusbandTypeInterface {
  name: string;
  salary: number;
}
interface HousbandWifetypeInterface {
  name: string;
  salary: number;
}
const crush3: CrushInterface<HousbandWifetypeInterface> = {
  name: "Sakira",
  husband: { name: "Sajal", salary: 500000 },
};

const crush4: CrushInterface<
  HousbandWifetypeInterface,
  HousbandWifetypeInterface
> = {
  name: "Sakira",
  husband: { name: "Sajal", salary: 500000 },
  wife: { name: "mako", salary: 4000 },
};

const crush5: CrushInterface<
  HousbandWifetypeInterface,
  HousbandWifetypeInterface,
  string
> = {
  name: "ff",
  husband: { name: "sajal", salary: 5000 },
  wife: { name: "mako", salary: 4000 },
  Child: "babu",
};
