function sayMyName() {
  console.log("U");
  console.log("S");
  console.log("E");
  console.log("R");
}

// sayMyName();

/* function addTwoNumbers(num1, num2){
    console.log(num1+num2);
}
addTwoNumbers(3,4); 
*/

function addTwoNumbers(num1, num2) {
  /* let result = num1+num2
    return result */
  return num1 + num2;
}

const result = addTwoNumbers(3, 4);
console.log("Result: ", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    // username === undefined
    console.log("Please enter a username.");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("user"));
console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {  // ... rest opertator and spread opertor is same but naming according to use but this time it is rest
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 600));

const user = {
    username: "User",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "user2",
    price: 200
})

const myNewArray = [200, 400, 300, 500]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 300, 500]));
