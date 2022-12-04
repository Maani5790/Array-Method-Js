const add = (a,b)=>{
    return a + b
}


const subs = (a,b)=>{
    return a - b
}

const mult = (a,b)=>{
    return a * b
}


const calculator =(num1,num2,operator)=>{
    return operator(num1,num2)
}

 const a = calculator(5,2,add);
console.log(a);