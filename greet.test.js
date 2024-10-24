const { greet } = require('./greet'); // Adjust this path if necessary

test("greet returns correct greeting for valid inputs", () => {
    expect(greet("John", "Hello")).toBe("Hello, John!");
});

test("greet returns correct greeting for different name and greeting", () => {
    expect(greet("Alice", "Hi")).toBe("Hi, Alice!");
});

test("greet returns greeting with punctuation", () => {
    expect(greet("Bob", "Welcome")).toBe("Welcome, Bob!");
});
