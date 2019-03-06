console.log("Hello World!");

function a() {

}

let b = function() {

}

console.log(1);

// Sets a 1 second delay, and this happens asynchronously (out of order, threaded way)
// So the print statements will say 1, 2, 3, and 1 second has passed
setTimeout(() => {
	console.log(3);
	console.log("1 second has passed");
}, 1000);
console.log(2);



/*
*		Part 2: Javascript Promises
*	https://scotch.io/tutorials/javascript-promises-for-dummies
*/

var isMomHappy = true;

// Promise
// 1) Pending: You don't know whether you are going to get a new phone
// 2) Fulfilled: Mom is happy (condition is met) and you get a new phone
// 3) Rejected: Condition is not met and you therefore don't get a new phone
var willIGetNewPhoneFunction = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('condition not met');
            reject(reason); // reject
        }

    }
);

// call our promise
var askMom = function () {

	// * Key feature in node.js, this function will just sit here until it is met (asynchronous)
    willIGetNewPhoneFunction
        .then(function (phone) {
            // yay, you got a new phone
            console.log(phone);
         // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'condition not met'
        });
};

askMom();



/*
*		Part 3: Using Javascript Promises with Timeouts
*/

console.log();
console.log();
console.log();


//setTimeout(() => {
//	console.log(1);
//}, 1000);


function timeout(ms) {
	// fill this in
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, ms);
	});
}

/* timeout(1000).then(function () {
	console.log(5);
})
*/

timeout(1000)
	.then( (milliseconds) => {
		console.log('Waited ${milliseconds} ms');
	})
	.catch( (milliseconds) => {
		console.log('Rejected after ${milliseconds} ms');
	});


