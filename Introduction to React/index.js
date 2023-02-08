let array = [1,2,3,4,6];

console.log(array.map((element)=>{
return element*2;
}))

console.log(array.filter((element)=>{
    return element%2==0;
}))

console.log(array.reduce((acc,cur)=>{
    return acc+cur;
}))
