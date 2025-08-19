/**
 * Write a function sumAll(...numbers) that takes any number of arguments
and returns their sum.

 */

function sumAll(...numbers){
  
    let total=0;
    numbers.forEach(element => {
        total=total+element
    });

    return total;
}

let sum=sumAll(1,2,3,6,8)
console.log(sum);
