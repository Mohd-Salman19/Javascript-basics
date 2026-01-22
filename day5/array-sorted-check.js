// Program to check if array is sorted in ascending order

let arr = [1, 2, 3, 4, 5];
let isSorted = true;

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
        isSorted = false;
        break;
    }
}

if (isSorted) {
    console.log("Array is sorted");
} else {
    console.log("Array is NOT sorted");
}
