let name = {
    firstname: "dipesh",
    lastname: "sahal",
}
let printfulname = function (city, state) {
    console.log("First Name: " + this.firstname, "Last Name: " + this.lastname + " City: " + city + " State: " + state);
}
printfulname.call(name, "Delhi", "Delhi");

let name2 = {
    firstname: "rajesh",
    lastname: "sharma",
}
// Function Borrowing is done with both call and apply method we can access the keys and values of an object by using a function outside the object
printfulname.call(name2, "Mumbai", "Maharastra");

// In call and apply is same but in apply method we ca share the arguments as array
printfulname.apply(name2, ["Mumbai", "Maharastra"]);

//bind : It makes the copy of the function and can be invoke latter
let printname = printfulname.bind(name2, ["Mumbai", "Maharastra"]);
printname();