import { createInterface } from 'readline';
import { bracketMatch } from './simple-bracket-check.js';
import { factorial } from './factorial.js';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const reverse_string = () => {
  let str = "hello";
  // return str.split('').reverse().join('');
  console.log(str.split('').reverse().join(''));
}

const exit = () => {
  console.log('Thank you for using the Sample Console App!');
  process.exit(0);
};

// console.log(process.argv);
// console.log(process.argv[2]);
// console.log(process.cwd());

// console.log("Welcome to the Algo & DS App!\n");
// console.log("1. Reverse string");
// console.log("2. Simple bracket check");
// console.log("3. Calculate factorial");

function run() {
  console.log("Welcome to the Algo & DS App!\n");
  console.log("1 - Reverse string");
  console.log("2 - Simple bracket check");
  console.log("3 - Calculate factorial");
  console.log('10 - Exit');
}

const OPTIONS = {
  1: reverse_string,
  2: bracketMatch,
  3: factorial,  
  10: exit
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
    console.log('Invalid option, please enter a correct number!');
  }
}

run(); 

rl.question('Select an option from above: ', (option) => {
  option = parseInt(option);

  if (!isNaN(option)) {
    console.log(`Selected option: ${option}!`);
    
    run_option(option);
    // if (option === '1') {
    //   const ret = reverse_string("Hello");
    //   console.log(`Reversed string: ${ret}`);
    // } else {
    //   console.log('Invalid option.');
    // }

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

