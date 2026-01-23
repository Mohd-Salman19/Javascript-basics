// Sort array of 0s and 1s

let arr = [0, 1, 1, 0, 1, 0, 0, 1];
let countZero = 0;

// Count zeros
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        countZero++;
    }
}

// Place zeros and ones
for (let i = 0; i < arr.length; i++) {
    if (i < countZero) {
        arr[i] = 0;
    } else {
        arr[i] = 1;
    }
}

console.log("Sorted Array:", arr);
