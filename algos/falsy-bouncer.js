module.exports = function (arr) {
  // write your code here
  arr = [null, NaN, 1, 2, undefined];
  // console.log("arr: ", ...arr);
  const filteredArray = arr.filter(Boolean);
  console.log("filteredArray: ", filteredArray);
  return filteredArray;
}
