let score = "33abc";

console.log(typeof score);

let valueInnumber = Number(score); //changinng string to number
console.log(valueInnumber); //NaN => Not a number when there is written 33abc like this.
console.log(typeof valueInnumber); // changed to number

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
//string => NaN

let isloggedIn = ""
let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => False
// "" => false
// "tanishq" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);

// ********_________________________________operations______________________________________________********


let value = 3
let negValue = -value
console.log(negValue);

// + - * / , **(power 2**3 => 2power3 , %(remainder)

let str1 = "tanishq"
let str2 = "hello"
let str3 = str1 + str2
console.log(str3);
console.log("1"+2);
console.log(1+"2");
console.log("1"+"2");
console.log("1"+2+2);
console.log(1+2+"2");
console.log((1+3)+(4-5));
console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+2
console.log(num1)

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

