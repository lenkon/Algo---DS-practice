module.exports = function (arr1, arr2) {
  // write your code here
  const uniqueInArr1 = arr1.filter((item) => !arr2.includes(item));
  const uniqueInArr2 = arr2.filter((item) => !arr1.includes(item));
  const symmetricDiff = uniqueInArr1.concat(uniqueInArr2);
  return symmetricDiff;
}
