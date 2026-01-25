// Program to find second largest element in an array

let arr = [12, 35, 1, 10, 34, 1];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}

console.log("Array:", arr);
console.log("Largest:", largest);
console.log("Second Largest:", secondLargest);
