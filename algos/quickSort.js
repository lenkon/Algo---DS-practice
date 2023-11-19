// def partition(array)
  //  pivot = array[0]
//   left = []
//  right = []
//   (1...array.length).each do |i|
//     if array[i] <= pivot
//       left << array[i]
//     else
//       right << array[i]
//     end
//   end
//   left + [pivot] + right
// end

// p partition([4, 5, 3, 9, 1])
// => [3, 1, 4, 5, 9]


function partition(array) {
  const pivot = array[0];
  const left = [];
  const right = [];
  
  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  
  return left.concat([pivot]).concat(right);
}

console.log(partition([4, 5, 3, 9, 1]));
//  Output: [3, 1, 4, 5, 9]

