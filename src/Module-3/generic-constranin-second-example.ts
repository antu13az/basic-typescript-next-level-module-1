type PersonType ={
    name:string,
    age: number,
    address: string,
}

type NewType = 'name' | 'age' | 'address' 

type newTypeUsingKeyOf = keyof PersonType;
const a:NewType = "age"
const b:newTypeUsingKeyOf ="address"

function getUnionTypeProperty<C,D extends keyof C>(obj: C, key: D){
obj[key]
}


const res45 = getUnionTypeProperty({name: "dd", age: 100}, "name")