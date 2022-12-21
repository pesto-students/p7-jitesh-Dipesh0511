// Memoize Function for addition of two Numbers
let value=[];
function add(value=[]){
    let sum=0;
    for(let i =0;i<value.length;i++){
        sum+=value[i];
    }
    console.log(`Sum of both numbers is ` + sum);
    return (sum);
}
function memoize(fn){
    const cache = new Map(); // Since cache is in pair of key and value
    return function (...args){
        const key = args.toString();
        if(cache.has(key)){
            console.log("Value Enter Previously Also");
            return cache.get(key);
        }
        else{
            cache.set(key,fn(...args));
            console.log("Value Entered First Time");
            return cache.get(key);
        }
    }
}
function time(fn){ //Using Time Function
    console.time();
    fn();
    console.timeEnd();
}
const addition = memoize(add);
time (()=> {addition(value=[100,100])});
time (()=> {addition(value=[100])});
time (()=> {addition(value=[100,200])});
time (()=> {addition(value=[100,100])});
// console.time();
// console.log(addition(100,100));
// console.timeEnd();
// console.time();
// console.log(addition(100,100));
// console.timeEnd();
// console.time();
// console.log(addition(100,100));
// console.timeEnd();
// console.time();
// console.log(addition(100,100));
// console.timeEnd();
