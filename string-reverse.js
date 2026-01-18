// Reverse a String

let str = "JavaScript";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed = reversed + str[i];
}

console.log("Original String:", str);
console.log("Reversed String:", reversed);

// ----------------------------
// Palindrome Check
// ----------------------------

let word = "madam";
let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversedWord = reversedWord + word[i];
}

if (word === reversedWord) {
  console.log(word + " is a Palindrome");
} else {
  console.log(word + " is NOT a Palindrome");
}
