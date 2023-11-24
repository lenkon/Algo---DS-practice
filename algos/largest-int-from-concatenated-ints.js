module.exports = function (xs) {
  // write your code here
  const sorted = xs.sort((a, b) => {
    const num1 = String(a) + b;
    const num2 = String(b) + a;
    return num2.localeCompare(num1);
  });

  return Number(sorted.join(''));
}
