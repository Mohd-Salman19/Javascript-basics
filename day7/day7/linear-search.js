// Program to search an element in an array (Linear Search)

let arr = [5, 12, 8, 20, 15];
let target = 20;
let found = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        console.log(target + " found at index " + i);
        found = true;
        break;
    }
}

if (!found) {
    console.log(target + " not found in array");
}
