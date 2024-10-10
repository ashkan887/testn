// Import the required module
import readline from 'readline';

// Create an interface for reading input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to greet the user
export function greet() {
    rl.question('Enter first parameter (param1): ', (param1) => {
        rl.question('Enter second parameter (param2): ', (param2) => {
            console.log(`Hi ${param1}, this is ${param2}`);
            rl.close();
        });
    });
}

// Optionally, you can call greet() immediately if you want to prompt on file execution
if (import.meta.url === 'file://' + process.argv[1]) {
    greet();
}
