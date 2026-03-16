let a = 10 
const b = 20
var c = 30 

console.log(a);
console.log(b);
console.log(c);

// global scope => a,b,c

if (true) {
    let a = 10 
const b = 20
var c = 30 
}

// now they are in Block scope bcoz  of {}

function one() {
    const username = "user"

    function two(){ 
        const website = "youtube"
        console.log(username);
    }
//    console.log(website);             ..error
   two()  
}
one()

if (true) {
    const username = "user"
    if (username === "user") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);             ..error
}
// console.log(username);               ..error


//  +++++++++ interesting ++++++++++

function addone(num) {
    return num + 1
}

console.log(addone(5));

const addtwo = function (num) {
    return num+2
}
console.log(addtwo(5));
