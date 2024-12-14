/* 
The pyramid of doom, or callback hell, happens when you have a lot of nested callbacks in your code, making it look like a pyramid. It can make the code hard to read and maintain.

To avoid this, you can use:

Promises


*/

console.log("----->Welcome<-------")
function placeOrder(item , callback) {
    setTimeout(() => {
        console.log('Order Placed for',item,'.');
        callback();
    },2000);
}

function makePayment(amt, callback) {
    setTimeout(() => {
        console.log(amt,'received. Payment status refreshing.....');
        callback();
    }, 3000)
}


function confirmOrder(item,callback) {
    setTimeout(() => {
        console.log('Payment has been Received!!',item,'Confirmed and will be Shipped Soon');
        callback();
    },3500)
}


function sendEmail(callback) {
    setTimeout(() => {
        console.log("Order Details sent to Registered Email");
    }, 3700)
}

placeOrder('MultiPupose Hoodie',() => {
    makePayment(2200, () => {
        confirmOrder('MultiPupose Hoodie' , () => {
            sendEmail();
        })
    })
})