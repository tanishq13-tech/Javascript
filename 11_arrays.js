// shallow and deep copy********

const myArr = [0, 1, 2, 3, 4]
const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[1]);

// Array methods

myArr.push(6)
myArr.push(6)
console.log(myArr)
myArr.pop()
myArr.unshift(9) //add the element at front
myArr.shift() // remove the element from front
console.log(myArr.includes(9))
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(newArr)  // typeof => string

// Slice and splice
console.log("A", myArr);

const myn1 = myArr.slice(1, 3) // shows the elements from start upto end but without end
console.log(myn1);              // and original array remain same
console.log("B", myArr);

const myn2 = myArr.splice(1, 3) //  shows the elements from start upto end with end  
console.log(myn2);              //  but original array doesn't remain same.. It removes the spliced elements
console.log("c", myArr);