/* 

learn
completed
Understanding Promises
A Promise is a special type of object in JavaScript that represents the eventual completion (or failure) of an 
asynchronous operation and its resulting value. Promises allow you to handle asynchronous operations in a more structured way, 
avoiding the complexities and callback hell of traditional JavaScript.

Key Concepts of Promises:
States of a Promise:
A Promise can be in one of the following states:

Pending (⏳): The initial state, before the Promise has been resolved or rejected.

Resolved (✅): The operation completed successfully, and the Promise is now fulfilled.

Rejected (❌): The operation failed, and the Promise is now rejected.

*/

//resolve
// let p1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Fetching the data.....");
//         resolve(1024);
//     }, 2500);
// })

// .then((data) => {
//     console.log(data," data has been featched successfully ")
// })


//Reject 
let p1 = new Promise(function(resolve,reject) {
    setTimeout(function() {
        console.log("featching data....");
        reject();
    })
})
.catch(() => {
    console.log("Error Occured Couldnt Fetch the data....")
})

//Both above  resolve and reject using Promises are done 
/* Advantages of Promises:
Avoid Callback Hell: Promises avoid nested callbacks, making the code more readable and maintainable.

Error Handling: Promises provide a better way to handle errors via .catch().

Chaining: Promises allow chaining, so you can write multiple asynchronous operations in sequence.

This mechanism is essential for working with asynchronous tasks like fetching data from
APIs or waiting for user inputs in web applications.


*/
