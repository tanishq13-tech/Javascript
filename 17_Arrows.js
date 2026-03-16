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