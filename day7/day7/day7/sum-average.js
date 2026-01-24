// Program to find sum and average of array elements

let arr = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

let average = sum / arr.length;

console.log("Array:", arr);
console.log("Sum:", sum);
console.log("Average:", average);
