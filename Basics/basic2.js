// type conversions..

let score = "33"
console.log(typeof score); // string
let valueInnum = Number(score)
console.log(typeof valueInnum);// number
console.log(valueInnum); // 33
console.log("----------------------");
//----------------------
let score2 = "33abc"
console.log(typeof score2); // string
let valueInnum2 = Number(score2)
console.log(typeof valueInnum2);// number -- be very carefull while type casting
console.log(valueInnum2); // NaN  -- the value will be converted to number but it will be NaN-not a number..
console.log("----------------------");
//----------------------
let score3 = null
console.log(typeof score3); // object
let valueInnum3 = Number(score3)
console.log(typeof valueInnum3);// number -- be very carefull while type casting
console.log(valueInnum3); // 0  -- the null value will be converted to number but it will be zero.
console.log("----------------------");
//--------------------------------
let score4 = undefined
console.log(typeof score4); // undefined
let valueInnum4 = Number(score4)
console.log(typeof valueInnum4);// number -- be very carefull while type casting
console.log(valueInnum4); // 0  -- undefined will be converted to number but it will be NaN-not a number..
console.log("----------------------");
// true will be convertes as 1 and false will be converted as 0
console.log("----------------------");
// to convert into boolean,
let isloggedin = 1
let boolConverted = Boolean(isloggedin)
console.log(typeof boolConverted);// boolean
console.log(boolConverted);//true
// 0 converted will be false,, and any other number converted will also be true
// if you convert emptyString "" then its false and any value in it will be true
console.log("----------------------");
// to convert into String..

let someNumber = 32
let stringConverted = String(someNumber)
console.log(typeof stringConverted);// string
console.log(stringConverted); 32

