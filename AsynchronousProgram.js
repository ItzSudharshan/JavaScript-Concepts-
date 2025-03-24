/* 
Interviewer: Can you explain asynchronous programming with an example?

Ideal Answer: Asynchronous programming allows tasks to be executed without waiting
for other tasks to finish. For example, using setTimeout in JavaScript allows a task 
to be delayed while other tasks continue to run. Here's a simple example:


*/

console.log("Task1");

setTimeout(() => {
    console.log("Task2");
}, 2000);

console.log("Task3");
