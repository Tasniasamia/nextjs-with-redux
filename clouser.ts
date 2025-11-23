//function currying
const add=(a:number)=>{
return (b:number)=>{
    return  (c:number)=>{
        return a+b+c;
    }
}
}
console.log(add(1)(2)(3));