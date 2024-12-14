/*
Interviewer: What is an exception in JavaScript, and how can it affect the execution of a program?

Ideal Answer: An exception in JavaScript is an error that occurs during the execution of a program. These errors can be caused by various factors, such as invalid user input, missing files, or issues with external APIs. When an exception occurs, it can disrupt the normal flow of the program, potentially causing it to crash or behave unexpectedly. JavaScript provides built-in mechanisms to handle these exceptions, allowing developers to manage errors gracefully and ensure the application remains robust and user-friendly.


Interviewer: Can you explain the different types of errors in JavaScript and provide an example for each?

Ideal Answer: In JavaScript, there are three main types of errors: syntax errors, runtime errors, and logical errors.

Syntax Errors: These occur when there is a mistake in the code's syntax.
Example: console.log("Hello World" // Missing closing parenthesis
Runtime Errors: These occur when the code is syntactically correct but encounters an issue during execution.
Example: console.log(notDefinedVariable); // Throws ReferenceError
Logical Errors: These are mistakes in the program logic, which produce incorrect results but do not throw an error.
Example: const result = 10 - 5; // Intended addition, but used subtraction


*/

function add(a, b) {
    console.log(a + z);
}

console.log("Starting...");
try{
    add(10,20);
}
catch(e){
    console.log("Some Error Detected Please Refer to the Program code");
}
finally{
    console.log("Finally will be always executed regardless whether there is an error or not");
}
console.log("Ending...")