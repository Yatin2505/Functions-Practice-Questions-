/**
 * Question 5: Use Default Parameters
 * 
 Create a function named loginUserMessage. It should accept one
parameter username and set a default value of "guest".

 If no argument is provided, the function should return "Welcome back,
guest!".

 If an argument is provided (e.g., “shivam"), it should return "Welcome
back, Shivam!".

 Run the function in both scenarios and print the results to the console.

 */

function loginUserMessage(username="guest") {
    console.log(`Welcome ${username}`);
}

loginUserMessage();
loginUserMessage("Yatin");
