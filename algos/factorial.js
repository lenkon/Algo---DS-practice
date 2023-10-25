module.exports = function factorial() {
  let n = 10;
  let ret = getFactorial(n);
  console.log(ret);
}

function getFactorial(n) {
  if (n === 0 || n ===1) return 1;
  else return n * getFactorial (n-1);
}