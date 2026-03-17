const user = {
    username: "user",
    price: 99,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
console.log(this);   // in browser value comes window and in node value comes empty{}

function thiss() {
    const username = "USER"
    console.log(this.username);
}
thiss()

const thisss = function () {
    const username = "USER"
    console.log(this.username);
}
thisss()

const thissss = () => {
    const username = "USER"
    console.log(this.username);
}
thissss()


const addTwo = (num1, num2) => {
    return num1 + num2         //explcit return
}
console.log(addTwo(3,4));

//const addTwoo = (num1, num2) => num1 + num2  // implicit return
const addTwoo = (num1, num2) => (num1 + num2)   // {} needs return but () need not return
console.log(addTwoo(3,4));
const object = (num1, num2) => ({username: "user"})   // for defining object
