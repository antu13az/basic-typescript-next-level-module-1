// Conditional type means one type is depend on another type

type a1 = string;
type a2 = a1 extends string ? string : null;
type a3 = undefined;
type a4 = number;

// nested conditional type
type d4 = a1 extends string
  ? string
  : a3 extends number
  ? number
  : a4 extends undefined
  ? undefined
  : never;

  type Sheikeh ={
    wife: string,
    wife2: string,
  }

  type checkProperty<T,K> = K extends keyof T ? true: false;

  type CheckWife1 = checkProperty<Sheikeh, "wife">




//   Matha Kharap Example With 3 girlfriend

type Girlfriend = "Sabana" | "Monika" | "Mia"

type RemoveGirlFriend<T,K> = T extends K ? never: T;

type CurrentBundobi = RemoveGirlFriend<Girlfriend,"Sabana">