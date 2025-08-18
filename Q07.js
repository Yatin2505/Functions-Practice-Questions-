/**
 * Question 7: Handling Empty Input
 Create a function named getUserEmail. It should accept one parameter
email.
 Inside the function, use an if condition to check if email is undefined or
"falsy" (like if (!email)).
 If email does not exist, return "Please provide an email."
 If email exists, return "Your email is: " + email.
 Call the function once without an argument and once with a valid email,
and print the results.
 */

function getUserEmail(email) {
    if (!email) {

        return "Please provide an email." ;
        
    } else {
        return "Your email is: " + email ;
    }
}

 let empty=getUserEmail();
 console.log(empty);
 
 let filled=getUserEmail("yatintembhare@technoskill.com");
 console.log(filled);
 