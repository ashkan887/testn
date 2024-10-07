// Import the required modules
const readline = require('readline');

// Create an interface for reading input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask for input and display the result
rl.question('Enter first parameter (param1): ', (param1) => {
    rl.question('Enter second parameter (param2): ', (param2) => {
        console.log(`Hi ${param1}, this is ${param2}`);
        rl.close();
    });
});
