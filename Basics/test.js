console.log("test");// used to print the value in the log
// for Js we no need to define the dataType. just use the let keyword to create a variable.
let accountname = "myName"
let accountEmail = "myEmail@gmail.com"
let accountPass = 12457
let isLoggedIn = true

console.table([accountname,accountEmail,accountPass,isLoggedIn]) // used to print multiple values in the form of a table in log

// dataTypes...
/*
Number => 2 to power 53
Bigint
string
boolean
null
undefined
symbol=> for unique

// Object

*/

console.log(typeof isLoggedIn); // typeoff is used to find the datatype of the variable..
console.table([typeof isLoggedIn,typeof accountEmail,typeof accountPass, typeof null, typeof undefined])
// typeof null is object, typeof undefined is undefined