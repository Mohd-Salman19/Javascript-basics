// Program to remove spaces from a string

let sentence = "I love JavaScript very much";
let result = "";

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
        result = result + sentence[i];
    }
}

console.log("Original String:", sentence);
console.log("String without spaces:", result);
