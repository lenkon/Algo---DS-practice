module.exports = function (str) {
  // write your code here
  str = 'The quick brown fox jumped over the lazy dog';
  const words = str.split(' ');

  // Initialize a variable to store the length of the longest word
  let maxLength = 0;

  // Iterate through the words and find the longest one
  for (const word of words) {
    const wordLength = word.length;
    if (wordLength > maxLength) {
      maxLength = wordLength;
    }
  }
  console.log("Max str length: ", maxLength);
  return maxLength;
}
