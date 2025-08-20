/**
 * Write a function doubleArray(arr) that returns a new array with all values
doubled.
 */

function doubleArray(...arr) {

let doubledValue= arr.map((value) => {
  return value * 2;});
  console.log(arr)
  return doubledValue;

}  

console.log(doubleArray(1, 2, 3, 4, 5)); // [2, 4, 6, 8, 10]
