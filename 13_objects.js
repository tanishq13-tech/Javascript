// singleton
// Object.create .... constructor method to create obeject which is singleton

// object literals .... also a method to create the objects

const mySym = Symbol("key1")
const jsUser = {
    name: "User",
    "full name": "User !",
    age: 19,
    [mySym]: "mykey1",
    email: "user@google.com", 
    location: "Jaipur",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mySym]); //** */
console.log(jsUser["full name"]); //** */

jsUser.email = "user1@google.com"
// Object.freeze(jsUser)
console.log(jsUser);

jsUser.greeting = function () {
    console.log("hello JS user");
}
jsUser.greeting2 = function () {
    console.log(`hello JS user, ${this.name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())
