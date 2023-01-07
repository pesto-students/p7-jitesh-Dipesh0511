function sleep(ms,val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(val), ms)
    });
}
sleep(3000, "Dipesh").then(console.log)
console.time();
Promise.race([sleep(5000,"Dipesh"),sleep(4000,"Riya")])
.then(console.log)
.catch(console.log);
