// module.exports = function (items) {
//   // write your code here
//   // Create a copy of the input array to avoid modifying the original array
//   const words = [...items];
  
//   // Initialize an empty array to store the word chain
//   const wordChain = [];
  
//   // Function to find a word with a specific starting letter in the array
//   function findWordWithStartingLetter(letter) {
//     return words.find(word => word.charAt(0) === letter);
//   }
  
//   // Start with the first word in the input array
//   let currentWord = words.shift();
//   wordChain.push(currentWord);
  
//   while (words.length > 0) {
//     const lastLetter = currentWord.charAt(currentWord.length - 1);
    
//     // Find a word with the same starting letter as the last letter of the current word
//     const nextWord = findWordWithStartingLetter(lastLetter);
    
//     // If a matching word is found, add it to the chain and remove it from the array
//     if (nextWord) {
//       wordChain.push(nextWord);
//       words.splice(words.indexOf(nextWord), 1);
//       currentWord = nextWord;
//     } else {
//       break; // No matching word found, exit the loop
//     }
//   }
  
//   return wordChain;
// }


module.exports = function (items) {
  function Ref(index, first_char, last_char) {
    this.index = index;
    this.first_char = first_char;
    this.last_char = last_char;
  }

  var items_len = items.length
  var refs_len = items_len;
  var refs = []

  // enough space for all items
  var longest_path_refs_len = 0;
  var longest_path_refs = new Array(items_len);

  function search(curr_len) {
    if (curr_len > longest_path_refs_len) {
      longest_path_refs_len = curr_len;

      for (var i = 0; i < curr_len; i++) {
        longest_path_refs[i] = refs[i];
      }
    }

    // recursive search
    var last_char = refs[curr_len - 1].last_char;
    for (var i = curr_len; i < refs_len; i++)
      if (refs[i].first_char == last_char) {
        var aux = refs[curr_len];
        refs[curr_len] = refs[i];
        refs[i] = aux;
        search(curr_len + 1);
        refs[i] = refs[curr_len];
        refs[curr_len] = aux;
      }
  }

  for (var i = 0; i < items_len; i++) {
    var itemsi_len = items[i].length;
    refs.push(new Ref(i, items[i][0], items[i][itemsi_len - 1]));
  }

  // try each item as possible start
  for (var i = 0; i < items_len; i++) {
    var aux = refs[0];
    refs[0] = refs[i];
    refs[i] = aux;
    search(1);
    refs[i] = refs[0];
    refs[0] = aux;
  }

  var longest_path_len = longest_path_refs_len;
  var longest_path = new Array(longest_path_len);

  for (var i = 0; i < longest_path_len; i++)
    longest_path[i] = items[longest_path_refs[i].index];

  return longest_path;
}
