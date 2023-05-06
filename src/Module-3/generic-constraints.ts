// Generic Constant   aitar mane ki ---> aitar mane holo je amara function ke to generic banichi. generic kemne banay->> amra je normal function banai ota theke typeScript e string null boolean je kono typer value pass korete pari through a generic type function.


// Example

const genericContsFunction =<M extends{name: string,address:string,price:number} ,N>(parms1: M, param2: N):[M,N]=>{
return [parms1, param2]
}
interface InfoONe{
    name: string,
    address: string,
    price: number, 
    price2: number, 
    
}
interface TestInterFace{
    name: string,
}
const infoResult: InfoONe ={
    name:"Masum",
    address:"Manikgong",
    price: 5000,
    price2: 8888
    
}

const constRes = genericContsFunction<InfoONe,InfoONe>(infoResult,infoResult)