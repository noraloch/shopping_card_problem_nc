var expect    = require("chai").expect;
var { ShoppingCart,  
    STACOF,
    MEDNEW } = require("../src/shopping_cart.js")

describe('Test Shopping Cart', () => {
    describe("Test Shopping Cart Constructor", function() {
        it("Can create a shopping cart", function() {
            let sc = new ShoppingCart();
            expect(sc).to.not.equal(null);
            expect(sc.itemsList.length).to.equal(0);
        });
    });
    describe("Test Shopping Cart Add method", function() {
        it("Can add items to a shopping cart", function() {
            let sc = new ShoppingCart();
            expect(sc.add(STACOF)).to.equal("Coffee, STACOF has been added to cart");
            expect(sc.cartItems.length).to.equal(1);
            expect(sc.add(MEDNEW)).to.equal("Newspaper, MEDNEW has been added to cart");
            expect(sc.cartItems.length).to.equal(2);
        });
        it("Can add mutiple of the same item to the cart", function() {
            let sc = new ShoppingCart();
            expect(sc.add(MEDNEW)).to.equal("Newspaper, MEDNEW has been added to cart");
            expect(sc.add(MEDNEW)).to.equal("Newspaper, MEDNEW has been added to cart");
            expect(sc.cartItems.length).to.equal(2);
        });
        it("Will throw an error when SKU does not exist", function() {
            let sc = new ShoppingCart();
            let didThrow = false;
            try {
                sc.add(Symbol("TEST"));
            } catch (e) {
                expect(e.message).to.equal("SKU Symbol(TEST) doesn't exist, please try another SKU");
                didThrow = true;
            }
            expect(didThrow).to.equal(true);
            expect(sc.cartItems.length).to.equal(0);
        });
    });
    describe("Test Shopping Cart totalAmount method", function() {
        it("Can calculate the total amount", function() {
            let sc = new ShoppingCart();
            sc.add(STACOF);
            sc.add(MEDNEW);
            sc.add(STACOF);
            expect(sc.totalAmount()).to.equal('32.97');
        });
        it("Can calculate total amount with an empty cart", function() {
            let sc = new ShoppingCart();
            expect(sc.totalAmount()).to.equal('0.00');
        });
    });
    describe("Test Shopping Cart totalAmount method", function() {
        it("Can provide a unique list of current items names", function() {
            let sc = new ShoppingCart();
            sc.add(STACOF);
            sc.add(MEDNEW);
            sc.add(STACOF);
            expect(sc.itemsList()).to.equal("Coffee, Newspaper");
        });
        it("Returns an empty string when shopping cart is empty", function() {
            let sc = new ShoppingCart();
            expect(sc.itemsList()).to.equal("");
        });
    });
});

  