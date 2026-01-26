// Program to count vowels in a string

let text = "JavaScript Programming";
let count = 0;
let vowels = "aeiouAEIOU";

for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
        count++;
    }
}

console.log("String:", text);
console.log("Number of vowels:", count);
