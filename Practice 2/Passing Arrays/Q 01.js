/**
Write a function getFirstAndLast(arr) that returns the first and last element
of an array.

 */


function getFirstAndLast(...arr) {
 return`THe first element of the input is ${arr[0]} and the last element was ${ arr[arr.length-1]}`
}
let final=getFirstAndLast(1,2,2,3,3,4,4,5, 5,5,5,5,4,4,4)
console.log(final);
