/**
 * Write a function findMax(...nums) that returns the largest number among
all arguments.

 */
function findMax(...nums) {
    let largestNum=nums[0];
   
for (let i = 0; i < nums.length; i++) {
    if (nums[i]>largestNum) {
        
        largestNum=nums[i];

    } 
    
}

console.log( `In ${nums} `)
    
return largestNum;
}

let ans=findMax(1,2,3);
console.log(`THe largest value is ${ans}`);

 ans=findMax(954,55,200);
console.log(`THe largest value is ${ans}`);

 ans=findMax(45,2,0);
console.log(`THe largest value is ${ans}`);




