const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reverse_string(str) {
  return str.split('').reverse().join('');
}

console.log("Welcome to the Algo & DS App!\n1. Reverse string\n2. Calculate factorial");

rl.question('Select an option- ', (option) => {
  console.log(`Selected option: ${option}!`); 

  if (option === '1') {
    const ret = reverse_string("Hello");
    console.log(`Reversed string: ${ret}`);
  } else {
    console.log('Invalid option.');
  }

  rl.close();
});

// Handle the close event
rl.on('close', () => {
  console.log('Thank you for using the Sample Console App!');
  process.exit(0);
});