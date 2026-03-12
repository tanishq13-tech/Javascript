// Primitive .... Call by value .. changes occur in copy
// 7 types: string, number, boolearn, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // False

const bigNumber = 145131511131331831183116515151135133115n  // n to make bigInt



// Reference (Non Primitive0)
// Array, Objects, Functons

const heros = ["shaktiman", "nagraj", "doga"];
let myObj = {
    name: "tanishq",
    age: 19,
}

const myfunction = function(){
    console.log("Hello");
}

console.log(typeof outsideTemp);

// ++++++++******************+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*+++**************************

// stack (primitive)... heap (non primitive)

let myname = "t.com"
let anotherName = myname
anotherName = "tt.com"

console.log(myname);
console.log(anotherName);

let userOne = {
    email: "user@com",
    upi: "user@ybl",
}

let user2 = userOne

user2.email = "yyy.com"

console.log(userOne);
console.log(user2);
