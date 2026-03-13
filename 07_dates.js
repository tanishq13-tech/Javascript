let myDate = new Date()
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toDateString()),
console.log(myDate.toLocaleString());
console.log(typeof myDate); //interview question type of **date** which is **object**

// let myCreatedDate = new Date(2023, 0, 23, 15, 3)
// let myCreatedDate = new Date("2023-01-23 15:30")
let myCreatedDate = new Date("01-23-2023 15:30")
console.log(myCreatedDate)
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toDateString()),
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));


console.log(myDate.getDay());
console.log(myDate.getDate());
console.log(myDate.getMonth());
console.log((myDate.getMonth())+1); //adding one to get get exact month numder as in array months starts from 0

myDate.toLocaleDateString('default', {
    weekday: "long",
})
