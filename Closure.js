function outerFunction() {
    let count = 0;
    return function innerFunction() {
        count++;
        console.log(`The Count is ${count}`);
    }
}

const counter = outerFunction();
counter(); // 1
counter(); // 2
counter(); // 3


/*
Interviewer: What is a closure in JavaScript?

Ideal Answer: A closure in JavaScript is a feature where an inner function has access to the outer (enclosing) function’s variables. This happens even after the outer function has finished executing. Closures are created when a function is defined inside another function, allowing the inner function to remember and access the variables from its parent function’s scope.


Why Are Closures Important? 🔑

Maintain State: Closures allow you to maintain variables between function calls.

Encapsulation: Hide implementation details and protect your code.

Callbacks: Widely used in higher-order functions.

Dynamic Behavior: Provide flexibility by letting inner functions use variables from the outer function.
*/