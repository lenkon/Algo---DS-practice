function gcd (a, b) {
  // write your code here
  a = 21;
  b = 27;

  while (b != 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  console.log("GCD: ", a);
  return a;
}

module.exports = gcd
