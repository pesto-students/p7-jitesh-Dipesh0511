const promise = function(number){
return new Promise((resolve,reject) => {
    if(number % 5 == 0)
    {   console.time();
        console.log("Promise is resolved")
        console.timeEnd();
    }
    else
    {
     console.log("Promise is rejected")
    }
});
}
let number = Math.floor(Math.random()*10);
console.log(`Random number is ${number}`);
promise(number);