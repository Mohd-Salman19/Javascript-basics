let nums = [5, 10, 15];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}

console.log("Sum:", sum);


let data = [12, 45, 7, 89, 23];
let max = data[0];

for (let i = 1; i < data.length; i++) {
  if (data[i] > max) {
    max = data[i];
  }
}

console.log("Largest:", max);
