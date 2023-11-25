module.exports = function (xs) {
  // write your code here
  xs = [1, 3, 3, 4, 55];
  const sorted = xs.sort((a, b) => {
    const num1 = String(a) + b;
    const num2 = String(b) + a;
    return num2.localeCompare(num1);
  });

  console.log(Number(sorted.join('')));
  return Number(sorted.join(''));
}
