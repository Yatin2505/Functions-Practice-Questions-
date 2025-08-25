/**
 * User Profile and Data Transformation
 * 
 * You have a user profile object. You need to create a function to generate
a personal summary.
1) Create an arrow function named getProfileSummary that accepts a user
object as an argument.
2) The function should return a string that includes the user's name, age, and
location in a readable sentence, for example: "John is 30 years old and
lives in London.“
3) Add a new property to the userProfile object: isLoggedIn with a value of
true.
4) Call the getProfileSummary function, passing the userProfile object, and
print the result to the console.

 */

let userProfile1={
 name:"Yatin",
 age:20,
 address:"Paraswada"
}

getProfileSummary=(user)=>{
   
    return` ${user.name} is ${user.age} years old and lives in ${user.address}.`
}
 let print=getProfileSummary(userProfile1)
 console.log(print)

 userProfile1.push([isLoggedI]="true")