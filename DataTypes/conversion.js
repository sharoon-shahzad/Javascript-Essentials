

// let score = "33abc"; 
// this is not a pure number , its string , but the thing is that it can be converted to a number (NAN) 

// console.log(typeof score);

// converting from the  string to number
// let valueInNumber = Number(score);

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// let score1 = null;

// let valueNumber = Number(score1);
// console.log(typeof valueNumber);
// console.log(valueNumber);

// let score2 = undefined;
// let valueInNumber2 = Number(score2);
// console.log(typeof valueInNumber2);
// console.log(valueInNumber2);

//side notes
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
//undefined => NaN


let isLoggedIn = undefined;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
