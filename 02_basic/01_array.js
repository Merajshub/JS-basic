// const myArr = [0,1,2,3,4]
// const myArr1 = ["Meraj","Abbas","Mazhar",1,2,3];
// console.log(myArr);

const myArr = new Array(1,2,3,4)
// console.log(myArr)

// Array methods
myArr.push(6);
console.log(myArr)

myArr.pop();
console.log(myArr)

myArr.unshift(8);
// add 8 at 0th index
console.log(myArr)

myArr.shift();
// will remove 0th index.
console.log(myArr)

console.log(myArr.includes(6));
// (boolean type)- if 6 is present in myArr it'll give true if not give false.
// console.log(myArr)

// myArr.indexOf(9);
console.log(myArr.indexOf(9));

const newArr = myArr.join();
// here (newArr) type is String. newArr = 1,2,3,4
console.log(newArr);
console.log(typeof(newArr));

// Splice and Slice
const mna1 = myArr.slice(1,3);
// 1 --> is inclusive, 3 --> is exclusive
console.log(mna1);
console.log(myArr);

const mna2 = myArr.splice(1,2)
// 1 and 3 are both inclusive
 console.log(mna2);
 console.log(myArr);
// important: main diffrence btw slice and splice is --> SPLICE manipulates original array
 
const dc_Heros = ["SuperMan","Flash","BatMan"];
const marvel_Heros = ["SpiderMan","IronMan","CaptainAmerica"];

const all_Heros = dc_Heros.concat(marvel_Heros);
// returns a new Array and merge both Arrays in one 
console.log(all_Heros);

const all_new_heros = [...dc_Heros,...marvel_Heros];
// same as concat.
console.log(all_new_heros);


console.log(Array.isArray("Meraj"));
//return false.

console.log(Array.from("Meraj"));
// ['M','e','r','a','j'] converts into a new  array.

console.log(Array.from({name:"Meraj"}));
// prints--> [] 
