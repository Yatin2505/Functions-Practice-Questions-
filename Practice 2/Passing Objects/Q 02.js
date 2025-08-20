/**
 Write a function applyDiscount(product) that reduces the price of a
product object by 20%.

 */
function applyDiscount(product){
    let discount = 0.2; // 20% discount
    product.price = product.price - (product.price * discount);
    console.log(`Product: ${product.name}, Price after discount: $${product.price.toFixed(2)}`);
}

// Example usage:
const product = {
    name: "Laptop",
    price: 1000
};
applyDiscount(product); // Output: "Product: Laptop, Price after discount: $800.00"




