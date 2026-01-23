// Count frequency of elements in array

let arr = [1, 2, 2, 3, 1, 4, 2];
let frequency = {};

for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    if (frequency[element]) {
        frequency[element]++;
    } else {
        frequency[element] = 1;
    }
}

console.log("Frequency:", frequency);
