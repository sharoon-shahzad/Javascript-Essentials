//singleton
//! object.create() actually refers to the singleton pattern






//object  literals
const jsUser = {
    name: 'John', // - > key value pair
    age: 30,
    email: 'user@example.com',
    "fullname" : "john doe",

}
console.log(jsUser.age);

//? another way to access the objects
console.log(jsUser['name']);
console.log(jsUser['fullname']);




// symbol data type : Symbol is a primitive data type in JavaScript that is used to create a unique identifier for objects. It is a unique value that is not equal to any other value. It is used to avoid conflicts between different properties of different objects.

//syntax 
// const sym = Symbol('description');

const mySym = Symbol('mySym');

const jsUser2 = {
    name: 'John', // - > key value pair
    age: 30,
    email: 'user@example.com',
    "fullname" : "john doe",
    [mySym] :"key1"
}

console,log(jsUser2[mySym])


// working with functions in objects
// function declaration
jsUser.sayHello = function(){
    console.log('Hello');
}
console.log(jsUser.sayHello());


// worling with onjects methods
const obj1 = { 1:"a" , 2:"b", 3:"c"};
const obj2 ={ 4:"d", 5:"e", 6:"f"};


const obj3 = Object.assign({},obj1,obj2);

const obj4 = {...obj1, ...obj2};
console.log(obj3);


console.log(jsUser.hasOwnProperty('hello')); // return the boolean values