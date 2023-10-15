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