

const myHeros = ["thor", "ironman", "spiderman"];
console.log(myHeros);

//another way of declaring array

const arry2 = new Array("thor", "ironman", "spiderman");
console.log(arry2);


//Arrays Methods

//push
const myArry = ["thor", "ironman", "spiderman"];
myArry.push("hulk");
console.log(myArry);
//pop
myArry.pop();
console.log(myArry);
//shift
myArry.shift();
console.log(myArry);

//unshift
myArry.unshift("hulk");
console.log(myArry);


//Questionaire methods of Array
//includes

const myArry2 = ["thor", "ironman", "spiderman"];
console.log(myArry2.includes("thor"));

//indexOf
console.log(myArry2.indexOf("thor"));

//lastIndexOf
console.log(myArry2.lastIndexOf("thor"));


 //!-------------------------------------------------------


//join
const myArry3 = ["thor", "ironman", "spiderman"];
console.log(myArry3.join(" "));
console.log(typeof myArry3);



//splice
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num.splice(1, 3, "hulk");
console.log(num);


// concat
const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["batman", "superman", "flash"];
// const allHeros = marvel_heros.concat(dc_heros);

// rest and spread operators

const allHeros = [...marvel_heros, ...dc_heros];

console.log(allHeros);


//FLAT : returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const arr = [
    1,
    2,
    [3, 4, [5, 6]]

]
console.log(arr.flat(2));


//! Important and intresting array elements
//isArray()

const myArry4 = ["thor", "ironman", "spiderman"];
console.log(Array.isArray(myArry4));

//Array.from()
console.log(Array.from("sharoon"));

// ArrayOf()
let score =1
let score2 =2
let score3 =3
console.log(Array.of(score,score2,score3));

