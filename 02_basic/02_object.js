const mySym = Symbol("key1")
// Initializing Symbol

const jsUser = {
    fName : "Meraj",
    age:"18",
    location :"Bihar",
    email: "xyz@gmail.com",
    isLogged: false,
    [mySym]: "myKey1"
}
// console.log(jsUser);

console.log(jsUser.fName);
// another way to access.
console.log(jsUser["location"]);

console.log(jsUser[mySym]);
// for accessing symbols.

Object.freeze(jsUser)
// afterwards you cannot change anything inside object
jsUser.email = "xyz1@gmail.com"
// console.log(jsUser.email);


// Empty Object 

const myObj = new Object();
// console.log(myObj);
// both are empty object.
// const myObj1 = {};

myObj.id = "123ab"
myObj.name = "Meraj"
myObj.isLogged = false
// console.log(myObj);


const regularUser = {
    Email:"xyz@gmail.com",
    fullname:{
        userName: {
            fname:"Meraj",
            lname: "Abbas"
        }
    }   
}

console.log(regularUser.fullname.userName);

// Arrays of Object

const user = [
    {
        id : "123ab",
        email :"meraj@git.com" 
    },
    {
        fname:"Meraj",
        lname: "Abbas"
    },
    {
        age:"18",
        location :"Bihar"
    }
]

console.log(user[0]);

console.log(Object.keys(myObj));

console.log(Object.values(myObj));

console.log(Object.entries(myObj));
// give keyvalue pairs.


// Object Destructing 

const Course = {
    name: "JS",
    Price : "$90",
    courseInstructor:"Meraj"

}

const {courseInstructor} = Course
console.log(courseInstructor);
const {courseInstructor:Instructor} = Course
console.log(Instructor);
