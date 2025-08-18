/**
 * Question 6: Functions with Conditions
 Create a function named checkAge. It should accept one parameter
age.
 If age is greater than 18, it should return "You are an adult".
 Otherwise, it should return "You are not an adult."
 Call the function with different age values and print the results.

 */

function checkAge(age) {
    if (age>=18) {

     console.log("You are an adult");
     
        
    } else {
        console.log("You are not an adult");
        
    }
    
}

checkAge(15);
checkAge(25);