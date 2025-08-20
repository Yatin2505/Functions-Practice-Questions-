/*
Write a function countEvenOdd(arr) that counts how many even and odd
numbers are in the array
 */

function countEvenOdd(...arr) {
    let evenCount = 0;
    let oddCount = 0;
    
    arr.forEach((num) => {
        if (num % 2 === 0) {
        evenCount++;
        } else {
        oddCount++;
        }
    });
    
    return { even: evenCount, odd: oddCount };
    
}

console.log(countEvenOdd(1, 2, 3, 4, 5)); // { even: 2, odd: 3 }

