module.exports = function (str) {
  // write your code here
  // let input = str.replace(/[\W_]/g, "").toLowerCase();
  // let inputString = input.split("").reverse().join("");
  // if (input === inputString) {
  //   return true;
  // }
  // return false;

  let flag;
  str = "race car";

  let input = str.replace(/[\W_]/g, "").toLowerCase();
  let inputString = input.split("");
  let mid = inputString.length / 2;
  for (let i=0; i<mid; i++) {
    let j = inputString.length - 1 - i;
    inputString[i], inputString[j] = inputString[j], inputString[i];
  }
  
  // console.log("input: ", input);
  // console.log("inputString: ", inputString);
  inputString = inputString.reverse().join("");
  // console.log("inputString -- string: ", inputString);
  if (input === inputString) {
    // return true;
    flag = true;
  }
  // return false;
  flag = false;
  if (flag) console.log("Is Palindrome");
  else console.log("Not Palindrome");
  return;
}

