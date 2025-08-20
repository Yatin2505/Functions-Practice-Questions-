/*
Write a function findSecondLargest(arr) that returns the second largest
number from an array.
 */

function findSecondLargest(...arr) {

    let firstLargest = 0;
    let secondLargest = 0;

   arr.array.forEach(element => {
    
   });

   
    
}

findSecondLargest(1,1,2,3,5,9)




























// function findSecondLargest(...arr) {
//     if (arr.length < 2) {
//         return null; // Not enough elements to find the second largest
//     }

//     let firstLargest = -Infinity;
//     let secondLargest = -Infinity;

//     arr.forEach((num) => {
//         if (num > firstLargest) {
//             secondLargest = firstLargest;
//             firstLargest = num;
//         } else if (num > secondLargest && num !== firstLargest) {
//             secondLargest = num;
//         }
//     });

//     return secondLargest === -Infinity ? null : secondLargest;
// }
// console.log(findSecondLargest(1, 2, 3, 4, 5)); // 4
// console.log(findSecondLargest(5, 5, 5)); // null
