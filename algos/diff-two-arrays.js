module.exports = function (arr1, arr2) {
  // write your code here
  arr1 = ["andesite", "grass", "dirt", "pink wool", "dead shrub"];
  arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];
  const uniqueInArr1 = arr1.filter((item) => !arr2.includes(item));
  const uniqueInArr2 = arr2.filter((item) => !arr1.includes(item));
  const symmetricDiff = uniqueInArr1.concat(uniqueInArr2);
  console.log("Difference: ", symmetricDiff);
  return symmetricDiff;
}
