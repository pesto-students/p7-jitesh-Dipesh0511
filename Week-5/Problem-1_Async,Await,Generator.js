//Await Function
async function await() {
    const p = new Promise((resolve,reject) => {
        setTimeout(resolve,2000);
    });
p.then(()=> console.log("Await Called after two seconds"))
}
await();

//Async Function
function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  async function f1() {
    const x = await resolveAfter2Seconds(10);
    console.log("Await was resolved");
    console.log(x);
  }
  f1();

// Generator
function* gen(val) {
    console.log("Generator was called")
    yield val;
}
const val = gen(100);
for ( el of val) {
    console.log(el);
}
