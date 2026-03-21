// for of

// ["", "", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const number of arr) {
    console.log(number); 
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "America")
map.set('FR', "France")
map.set('IN', "India") // print the unique value in the same order
console.log(map);

for (const [key, value] of map) {
    console.log(key, ':- ', value);
}

const object = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
for (const [key, value] of object) {
    console.log(key, ':- ', value);
}  // for object : no work
