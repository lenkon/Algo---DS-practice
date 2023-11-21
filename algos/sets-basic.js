// function findDuplicates(array) {
module.exports = function(array) {
  array = [4376, -345, -345, 4376, -345, 84945, 4376, -345, -26509];
  // write your code here
  let set = new Set();
  let duplicates = [];
  for (let i = 0; i < array.length; i++) {
    if(set.has(array[i])) {
      duplicates.push(array[i]);
    }
    else {
      set.add(array[i]);
    }
  }
  console.log(duplicates);
  return duplicates;
}

// console.log(findDuplicates([1, 2, 3, 1, 5, 6, 7, 8, 5, 2]))
// => [1, 5, 2]

// console.log(findDuplicates([3, 501, 17, 23, -43, 67, 5, 888, -402, 235, 77, 99, 311, 1, -43]))
// => [-43]

// module.exports = findDuplicates
