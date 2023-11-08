module.exports = function (number) {
  // write your code here
  number = 31;
  const seen = new Set();

  while (number !== 1 && !seen.has(number)) {
    seen.add(number);
    number = getSumOfSquaresOfDigits(number);
  }
  console.log("Happy Number or not: ", number === 1);
  return number === 1;
}

function getSumOfSquaresOfDigits(n) {
  let sum = 0;
  while (n > 0) {
    const digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
}
