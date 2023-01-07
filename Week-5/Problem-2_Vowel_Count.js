function vowelcount(val) {
    let count = 0;
    for (let i = 0; i < val.length; i++) {
        if (val[i] == "a" || val[i] == "e" || val[i] == "i" || val[i] == "o" || val[i] == "u" || val[i] == "A" || val[i] == "E" || val[i] == "I" || val[i] == "O" || val[i] == "U") {
            count++;
        }
    }
    let a = new Map();
    a.set("Vowel Count:", count);
    return a;
}
let input = "hi dipesh";
let output = vowelcount(input);
console.log(output);