// if
const isUserLoggedIn = true
const temperature = 41
if (temperature < 50) {
    console.log("less than 50");
} else {
    console.log("greater than 50");
}

// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);   
}

const balance = 1000
//if (balance > 500) console.log("test"), console.log("test2");  //not preferred

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 700) {
    console.log("less than 700");
} else if (balance < 900) {
    console.log("less than 900");
} else if (balance < 1200) {
    console.log("less than 1200");
} else {
    console.log("greater than 1200");
    
}

const isUserLoggedInn = true
const debitCard = true
const loggedFromGoogle = true
const loggedFromEmail = true
if (isUserLoggedInn && debitCard && 2==3) {
    console.log("Allow to buy course");
}
if (loggedFromGoogle || loggedFromEmail) {
    console.log("User logged in");
}