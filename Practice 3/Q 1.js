/**
 *  Shopping Cart Management
 */


let shoppingCart=[]

let product1={
    name: "Mouse",
price: 249

}

let product2={
    name: "keyboard",
    price: 2000
}

shoppingCart.push(product1,product2)
function calculateTotalPric(products) {
 
    let total=0
    products.forEach(element => {
       
        total=total+ element.price
    });

    let print=`Total Items =${products.length}
total price =${total}`
    return print
}

let totalAmount=calculateTotalPric(shoppingCart)

console.log(totalAmount)


let product3={
    name:"laptop",
    price: 80000
}
shoppingCart.push(product3)

totalAmount=calculateTotalPric(shoppingCart)
console.log(totalAmount)
 