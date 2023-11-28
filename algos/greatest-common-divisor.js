function gcd (a, b) {
  // write your code here
  while (b != 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

module.exports = gcd
