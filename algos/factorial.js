module.exports = function factorial() {
  let n = 10;
  if (n === 0 || n ===1) return 1;
  else return n * factorial (n-1);
  console.log(n);
}