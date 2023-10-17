export function nth_square_root() {
  let x = 16;
  let n = 4;

  if(x<0 || n<=0) console.log(NaN); 
  
  let guess = x/n;

  while(true) {
    let nextGuess = ((n-1) * guess + x/Math.pow(guess, n-1)) / n;

    if (Math.abs(nextGuess - guess) < 0.001) {
      console.log(nextGuess.toFixed(3));
      break;
    } 
    guess = nextGuess;
  }
}