// const tinderUser =  new Object()  // singleton
const tinderUser = {}   // non singleton
tinderUser.id = "123abc"
tinderUser.idname = "User"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "user@g.com",
    fullname: {
        userFullname: {
            firstName: "user",
            lastName: "gupta"
        }
    }
}

console.log(regularUser.fullname.userFullname.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = { obj1, obj2} // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({}, obj1, obj2) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "user0@gmail.com"
    },
    {
        id: 1,
        email: "user1@gmail.com"
    }
]

console.log(users[1].email);
console.log(tinderUser);
console.table(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check here the property exists or not.

const course = {
    coursename : "javascript",
    price: "99",
    courseInstructor: "User"
}
//ways of calling
console.log(course.courseInstructor);

const {courseInstructor} = course  // destructuring
console.log(courseInstructor);

const {courseInstructor: instructer} = course
console.log(instructer);
//

/*   *** JSON Structure ***
{
    "name": "user",
    "course" : "JS",
    "price": "free"
}
*/