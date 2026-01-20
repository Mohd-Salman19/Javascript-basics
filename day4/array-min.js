// Program to find minimum element in an array

let arr = [12, 45, 67, 23, 9];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log("Array:", arr);
console.log("Minimum value:", min);
