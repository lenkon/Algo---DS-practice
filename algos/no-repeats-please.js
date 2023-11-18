// module.exports = function (str) {
//   // write your code here
//   function swap(strArr, i, j) {
//     const temp = strArr[i];
//     strArr[i] = strArr[j];
//     strArr[j] = temp;
//   }

  // function hasConsecutiveRepeats(str) {
  //   for (let i = 1; i < str.length; i++) {
  //     if (str[i] === str[i - 1]) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

//   function generatePermutations(strArr, n) {
//     if (n === 1) {
      // if (!hasConsecutiveRepeats(strArr.join(""))) {
      //   count++;
      // }
//     } else {
//       for (let i = 0; i < n - 1; i++) {
//         generatePermutations(strArr, n - 1);
//         if (n % 2 === 0) {
//           swap(strArr, i, n - 1);
//         } else {
//           swap(strArr, 0, n - 1);
//         }
//       }
//       generatePermutations(strArr, n - 1);
//     }
//   }

  // const strArr = str.split("");
  // let count = 0;

//   generatePermutations(strArr, strArr.length);

//   return count;
// }

// let str = 'abc';
// let ret = module.exports(str);
// console.log('Permutations: ', ret);

module.exports = function (str) {
  function hasConsecutiveRepeats(str) {
    for (let i = 1; i < str.length; i++) {
      if (str[i] === str[i - 1]) {
        return true;
      }
    }
    return false;
  }
     
  function permute(arr, currPerm) {
    let cur;
    
    for (let i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        if (!hasConsecutiveRepeats(currPerm.concat(cur).join(""))) {
          count++;
        }
      }
      permute(arr.slice(), currPerm.concat(cur));
      arr.splice(i, 0, cur[0]);
    }
  }
  
  const arr = str.split("");
  let count = 0;
  
  permute(arr, []);

  return count;
}