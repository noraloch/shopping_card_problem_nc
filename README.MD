# Shopping Cart Assessment

Shopping cart is a class that items can be added to, calculate the total price, and provides the names of the items in the card. Items consist of a name, price and a unique SKU.

### Build Requirements
Node v15.2.0

### How to run
run: `node src/shopping_cart.js`  

### Test Instructions
run: `npm run test` 

### Examples

```js
const sc1 = new ShoppingCart();
console.log(sc1); // -> ShoppingCart { cartItems: [] }
sc1.add(MEDNEW); 
sc1.add(STARIC);
sc1.add(MEDNEW);
console.log(sc1); // -> 
/*
ShoppingCart {
  cartItems: [
    { itemSku: 'MEDNEW', itemName: 'Newspaper', itemPrice: 2.99 },
    { itemSku: 'STARIC', itemName: 'Rice', itemPrice: 30 },
    { itemSku: 'MEDNEW', itemName: 'Newspaper', itemPrice: 2.99 }
  ]
}
*/
console.log(sc1.add(STARIC)); // -> "Rice, STARIC has been added to cart"
console.log(sc1.totalAmount()); // -> 65.98; (2.99 * 2 + 30.00 * 2)
console.log(sc1.itemsList()); // -> Newspaper, Rice
```

---

### the problem:
<h2>Introduction</h2>

You are asked to submit a solution to the following problem using any programming language. Feel free to use books, Google or Stack Overflow, just like you would if you were programming normally. We are looking for one or more files (code + tests) and instructions on how to run the tests to validate the requirements are met.

Please timebox this activity to 90 minutes max (you may need much less). We are interested in how you organize your code and what/how you test. You may also include notes, future TODOs, and/or questions with your submission. There may also be an opportunity to discuss your solution during the interview loop.

<h2>Instructions</h2>

Your task is to define a shopping cart for a corner shop. The cart should keep track of the list of items added, and correctly calculate the price.
Items are added to the basket using stock-keeping unit (SKU) codes. The items in the shop are:
```
Name    	| Price	| SKU
Potatoes	| 10.00	| STAPOT
Rice        | 30.00 | STARIC
Coffee      | 14.99	| STACOF
Newspaper   | 2.99  | MEDNEW
```

You need to define a ShoppingCart class, with three public methods:

* add: Takes a SKU and adds it to the cart. The SKU is a Symbol comprised of the first three uppercase letters of the product type + the first three uppercase letters of the product name.
* total_amount: The value of the items in the cart as a number with two decimal places (e.g. 3.99).
* items_list: A list of the names of the items in the cart, ordered alphabetically, with no duplicates, separated by a comma and a space.

For example:

```
shopping_cart = ShoppingCart.new
shopping_cart.add(:STAPOT)
shopping_cart.add(:STARIC) 

shopping_cart.total_amount
// Returns: 40.00

shopping_cart.items_list
// Returns: "Potatoes, Rice"
```