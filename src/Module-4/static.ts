class Counter {
    static counter : number =0
  


//   Increment Method
static increment():number{
return Counter.counter = Counter.counter + 1
}
// decrement
static decrement():number{
return Counter.counter = Counter.counter - 1
}
}


console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());