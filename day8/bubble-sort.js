// Program to sort an array using Bubble Sort

let arr = [5, 3, 8, 4, 2];

console.log("Original Array:", arr);

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            // swap
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log("Sorted Array:", arr);
