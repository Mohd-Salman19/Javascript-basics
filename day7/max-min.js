// Program to find maximum and minimum in an array

let arr = [10, 25, 5, 40, 15];

let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log("Array:", arr);
console.log("Maximum:", max);
console.log("Minimum:", min);
