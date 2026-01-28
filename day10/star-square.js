// Star Square Pattern

let size = 5;
let pattern = "";

for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
        pattern += "* ";
    }
    pattern += "\n";
}

console.log(pattern);
