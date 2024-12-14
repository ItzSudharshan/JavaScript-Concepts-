/*
⏳ What is await ?
The await keyword can only be used inside an async function. It pauses the execution of the async function until the promise is resolved, allowing you to write asynchronous code that reads like synchronous code.

Key Points:

Can only be used inside an async function.

Waits for a promise to resolve or reject.

*/

async function process() {
    console.log("Task1");
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task2");
            resolve();
        }, 2400)
    })
    await p1;
    console.log("This is task 3 which has to wait till Task 2 is completed so after Task2 this will be displayed");
}

process();
console.log("Task4 is independent doesnt depend on anyone so it displays after task1");