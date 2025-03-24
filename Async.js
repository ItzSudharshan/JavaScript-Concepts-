/* 🌟 What is async?
The async keyword is used to define an asynchronous function.
These functions return a promise by default.
You can perform asynchronous operations inside an async function.

Key Points:

Always returns a promise.

Makes it easier to work with promises.

*/

async function greet() {
    return "Hello World!!!";
}

greet().then((message) => {
    console.log(message);
})
