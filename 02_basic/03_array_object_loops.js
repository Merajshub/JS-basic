// const map = new Map()
// map.set('IN','India')
// map.set('USA','United State')
// map.set("IN",'India')
// map.set("GER",'Germany')
// // console.log(map);

// for(const [key, value] of map) {
//     console.log(key,':-',value);   
// }
// ----------------->>

// Objects

// const myObj = {
//     js : 'javaScript',
//     cpp:'C++',
//     rb:'ruby',
//     Swift: 'swift by apple'
// }

// for (const key of myObj) {
//     console.log(key);
    
// }


// in above example  here we can't iterate over object if using for of loop

// so we use for in loop to iterate over objects.


 const myObj = {
        js : 'javaScript',
        cpp:'C++',
        rb:'ruby',
        Swift: 'swift by apple'
    }

    // for (const key in myObj) {
    //     // for printing keys of object
    //     // console.log(key);


    //     // for printing values of object
    //     console.log(myObj[key]);
            
    //     }

    // for in over Arrays

        // const myArr = ['js','cpp','ruby','swift'] 

        // for (const key in myArr) {
        //     console.log(key);
        // }
        // here it'll print only keys (key--> index value)
    

// --------------------------------------------------------------->>

//FOR EACH

// const myArr = ['js','cpp','ruby','swift', 'java']

// myArr.forEach(function(item){
//     console.log(item);
// })

// myArr.forEach(function(item,index,arr){
//     console.log(item,index,arr);
// })


//ARRAYS OF OBJECTS

const myArr = [
    {
        file: 'javaScript',
        fileName: 'JS'
    },
    {
        file: 'java',
        fileName: 'JAVA'
    },
    {
        file: 'CPP',
        fileName: 'C++'
    }

]

myArr.forEach(function(item){
    console.log(item.fileName);
})
  