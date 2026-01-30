let numbers = [5, 10, 15, 20];

let sum = numbers.reduce(function (total, num) {
  return total + num;
}, 0);

console.log("Sum:", sum);
