/*
Write a function shoppingCart(discount, ...prices) that calculates the total
price after applying a discount percentage.
 */

function shoopingCart(discount,...prices) {
    
    let totalAmount=0;
     prices.forEach(element => {
        totalAmount =totalAmount+element;
    });
    
    let totalDiscount= discount/100 * totalAmount
    let finalBill=totalAmount-totalDiscount
    console.log(finalBill);
    
}

shoopingCart(20,50,50);
shoopingCart(20,200,566,45,199);