const arrayNumber = [1,2,3]


type Volume ={
    height: number,
    width: string,
    depth: number
}
type Area ={
    height: number,
    width: string,
    depth: number
}

type NewVolume = {
    [key in keyof Volume]:number
}

// Make it daynamic with generic

type GetArea<T> ={
[key in keyof T]: T[key]
}

const area1dt : GetArea<{name:string, age:number}> = {name:"Sajal", age:20}