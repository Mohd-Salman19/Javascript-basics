// Program to reverse an array

let arr = [1, 2, 3, 4, 5];
let reversedArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
}

console.log("Original Array:", arr);
console.log("Reversed Array:", reversedArr);
