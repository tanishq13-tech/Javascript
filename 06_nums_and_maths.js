const score = 400
console.log(score);


const balance = new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(typeof balance);

const otherNumber = 123.5689
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// in console 
// Number.min/maxValue

// **************Maths************************************************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(30.44)); // round off 30
console.log(Math.round(30.94)); // round off 31
console.log(Math.ceil(30.44)); // round off but max value 31
console.log(Math.floor(30.94)); // round off but min value 30
console.log(Math.min(30.94, 3, 0,4));
console.log(Math.max(30.94, 3, 0,4));

console.log(Math.random());
console.log(Math.floor(Math.random()*10) + 1); // *10 .. to get from 0 to 10 and +1 .. to avoid of getting 0

const min = 10 
const max = 20 

console.log(Math.floor(Math.random() * (max - min +1)) + min)