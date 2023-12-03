  const readline = require('readline');
  const reverseString = require('./algos/reverse_string.js');
  const bracketMatch = require('./algos/simple-bracket-check');
  const squareRoot = require('./algos/square_root');
  const factorial = require('./algos/factorial');
  const nth_square_root = require('./algos/nth_square_root');
  const booWho = require('./algos/boo-who');
  const balancedBrackets = require('./algos/balanced-brackets');
  const convertsecondstocompound = require('./algos/convert-seconds-to-compound-duration');
  const findLongestWord = require('./algos/find-the-longest-word-in-a-string');
  const falsyBouncer = require('./algos/falsy-bouncer');
  const happyNumbers = require('./algos/happy-numbers.js');
  const romanConverter = require('./algos/roman-numeral-converter');
  const findDuplicates = require('./algos/sets-basic');
  const quickSort = require ('./algos/quickSort');
  const largestInt = require('./algos/largest-int-from-concatenated-ints');
  const noRepeatsPlease = require('./algos/no-repeats-please');
  const gcd = require('./algos/greatest-common-divisor');
  const diffOfTwoArray = require('./algos/diff-two-arrays');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const exit = () => {
    console.log('Thank you for using the Sample Console App!');
    process.exit(0);
  };

  function run() {
    console.log("Welcome to the Algo & DS App!\n");
    console.log("1 - Reverse string");
    console.log("2 - Simple bracket check");
    console.log("3 - Square root");
    console.log("4 - Nth square root");
    console.log("5 - Calculate factorial");
    console.log("6 - Check boo-who");
    console.log("7 - Check balance brackets");
    console.log("8 - Convert seconds to compound duration");
    console.log("9 - Longest word in a string");
    console.log("10 - Falsy Bouncer");
    console.log("11 - Happy Numbers");
    console.log("12 - Roman Numerical Converter");
    console.log("13 - Find Duplicate numbers");
    console.log("14 - Quick sort a number array");
    console.log("15 - Largest integer from concatenated integers");
    console.log("16 - No repeat please");
    console.log("17 - Greatest common divisor");
    console.log("18 - Difference of two arrays");
    console.log('20 - Exit');
  }

  const OPTIONS = {
    1: reverseString,
    2: bracketMatch,
    3: squareRoot,
    4: nth_square_root,
    5: factorial,
    6: booWho,
    7: balancedBrackets,
    8: convertsecondstocompound,
    9: findLongestWord,
    10: falsyBouncer,
    11: happyNumbers,
    12: romanConverter,
    13: findDuplicates,
    14: quickSort,
    15: largestInt,
    16: noRepeatsPlease,
    17: gcd,
    18: diffOfTwoArray,
    20: exit
  };

  Object.freeze(OPTIONS);

  function run_option(option) {
    const method = OPTIONS[option];
    
    if (method) {
      if (typeof method === 'function') {
        method(); // Call the function directly
      } else {
        console.log('Invalid option, please enter a correct number!');
      }
    } else {
      console.log("No method")
      console.log('Invalid option, please enter a correct number!');
    }
  }

  run();

  rl.question('Select an option from above: ', (option) => {
    option = parseInt(option);

    if (!isNaN(option)) {
      console.log(`Selected option: ${option}!`);

      run_option(option);
      rl.close();
    } else {
      console.log('Invalid input. Please enter a number.');
      rl.close();
    }
  });

  rl.on('close', () => {
    console.log('Thank you for using the Sample Console App!');
    process.exit(0);
  });
