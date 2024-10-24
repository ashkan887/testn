// greet.js

// The function that takes in a name and greeting
export function greet(name, greeting) {
    return `${greeting}, ${name}!`;
}

// If the file is run directly from the command line
if (process.argv[1].includes('greet.js')) {
    const args = process.argv.slice(2);
    const name = args[0];
    const greeting = args[1];
    console.log(greet(name, greeting));
}
