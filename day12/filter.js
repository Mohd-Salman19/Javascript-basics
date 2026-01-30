let numbers = [10, 15, 20, 25, 30];

let evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log("Even Numbers:", evenNumbers);
