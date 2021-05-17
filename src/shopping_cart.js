class ShoppingCart {

    constructor() {
        this.cartItems = [];
    };

    // Potiential todo: The add method could take in more than one parameter, in order to
    // specify the value of the quantity.

    // The add method takes an SKU (a Symbol) and it attempts to add it to the cartItems.
    // It will throw if the SKU does not exist. 
    add(sku) {
        let itemObject = {};

        try {
            itemObject["itemSku"] = sku.description;
            itemObject["itemName"] = items.get(sku).name;
            itemObject["itemPrice"] = items.get(sku).price;
        } catch (e) {
            throw Error("SKU " + sku.toString() + " doesn't exist, please try another SKU");
        }

        this.cartItems.push(itemObject);
        return (`${itemObject.itemName}, ${itemObject.itemSku} has been added to cart`)
    }

    // It returns the sums of the prices in the cart. 
    totalAmount() {
        let total = 0;
        this.cartItems.forEach(item => {
            total += item.itemPrice;
        })
        //the return value will be a string (toFixed returns a string). The question said 
        //that it need to be a number with two decimal places. Altough, if I leave it as a 
        //float (number data type), the compiler would remove the decimal when the sum ends 
        //in 0.
        return total.toFixed(2);
    }

    // It lists unique, sorted item names from the cart. 
    itemsList() {
        let namesList = new Set(); //set for the uniqueness of the items
        this.cartItems.forEach(item => {
            namesList.add(item.itemName);
        })
        let listAsArray = (Array.from(namesList).sort());

        let list = "";
        // the follwoing will help us make sure we follow the required format (name1, name2)
        listAsArray.forEach((name, i) => {
            list += i === listAsArray.length - 1 ? name : name + ", ";
        })
        return list;
    }
}

// It was a little ambiguit whether I was given the type of the items or not. For that reason
// and in addition to the time constraint, I stored the items in a map for quick lookup.
// Otherwiser, I would have created an Item class initiated with a name, type, price, and a 
// sku being an interpolated word comprised of the first three uppercase letters of the product
// type + the first three uppercase letters of the product name.
let items = new Map();

let STAPOT = Symbol("STAPOT");
let STARIC = Symbol("STARIC");
let STACOF = Symbol("STACOF");
let MEDNEW = Symbol("MEDNEW");

items.set(STAPOT, { price: 10.00, name: "Potatoes" });
items.set(STARIC, { price: 30.00, name: "Rice" });
items.set(STACOF, { price: 14.99, name: "Coffee" });
items.set(MEDNEW, { price: 2.99, name: "Newspaper" });


module.exports = {
    ShoppingCart,
    STAPOT,
    STARIC,
    STACOF,
    MEDNEW,
}





