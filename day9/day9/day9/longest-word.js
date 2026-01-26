// Program to find the longest word in a sentence

let sentence = "JavaScript is a powerful programming language";
let words = sentence.split(" ");
let longest = "";

for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
        longest = words[i];
    }
}

console.log("Sentence:", sentence);
console.log("Longest word:", longest);
