export function bracketMatch() {
  let text = "(())";
  let arr = text.split('');
  let stack = [];

  if (text.length === 0) return true;
  
  for (let i=0; i<arr.length; i++) {
    if (arr[i] == "(") {
      stack.push(arr[i]);
    }
    else {
      if (stack.length === 0) return false;
      let el = stack.pop();
      if (el !== '(') {
        return false;
      }
    }
  }
  // return (stack.length == 0);
  console.log((stack.length == 0));
}

// Given a string that consists of brackets, write a function bracketMatch that takes a bracket string as an input and returns the minimum number of brackets you’d need to add to the input in order to make it correctly matched.
// function bracketMatch(text) {
//   // your code goes here
//   let openCount = 0;
//   let closeCount = 0;
  
//   for (let i=0; i<text.length; i++) {
//     if (text[i] === "(") {
//       openCount++;
//     }
//     else {
//       if (openCount > 0) openCount--;
//       else closeCount++;
      
//     }
//   }
//   return openCount + closeCount;
// }