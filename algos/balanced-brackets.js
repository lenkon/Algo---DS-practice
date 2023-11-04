module.exports = function (str) {
  // write your code here
  str = ']][[[][][][]][';
  console.log("", str);
  const stack = [];
  // const bracketPairs = { '[': ']', '(': ')', '{': '}' };
  const bracketPairs = { '[': ']' };

  for (const bracket of str) {
    if (bracket in bracketPairs) {
      // It's an opening bracket, push it onto the stack
      stack.push(bracket);
    } else {
      // It's a closing bracket
      const lastOpenBracket = stack.pop();

      // Check if the closing bracket matches the last opening bracket
      if (bracketPairs[lastOpenBracket] !== bracket) {
        console.log("", false);
        return false; // Mismatched str
      }
    }
  }

  // If the stack is empty, it means all str are balanced
  // let ret = stack.length === 0;
  // let ret = stack.length === 0 ? true:false;

  console.log("", stack.length === 0);
  return stack.length === 0;
}
