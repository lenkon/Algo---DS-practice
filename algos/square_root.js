module.exports = function squareRoot() {
  let x = 8;
  let n = 2;

  if (x < 0) console.log(NaN);
  if (x < 2) console.log(x);

  let guess = x / n;
  let ret;

  while (true) {
    // Calculate the next approximation using the Newton-Raphson method
    const nextGuess = ((n - 1) * guess + x / manualPower(guess, n - 1)) / 2;
    
    // Check if the error is within the desired range
    if (Math.abs(nextGuess - guess) < 0.001) {
      ret = nextGuess.toFixed(3);
      break;
    }    
    guess = nextGuess;
  }
  console.log("Square root: ", ret);
  return ret;
}

function manualPower(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}