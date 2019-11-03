// You need to write code to represent the process of ordering food at a fast food joint. Your restaurant is Bob's Burgers, and you have some starter code below. The object will have two behaviors that you must define.

// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.


// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.

// you are adding objects to an array in the restaurant object

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal);
    },
    getOrders: function () {
        return this.orders;
    }
};

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "small"
};

// when somrthing is being returned you ahve to acpture the value of the return with a variable or console.log. here are 2 examples of solutions to this exercise. one using console.table to return the vaule of the getOrders function. the other creates a variable to hold the returned vaule of the function getOrders

// Place an order- invoke functions placeOrder and getOrder
// Invoke the function to return the list of all orders
// Output all orders to the console using console.table()

restaurant.placeOrder(chickenComboMeal);
restaurant.getOrders();

const orderedFood = restaurant.getOrders();
console.table(orderedFood)


// Place an order- invoke functions placeOrder and getOrder

// restaurant.placeOrder(chickenComboMeal);
// restaurant.getOrders();

// console.table(restaurant.getOrders());


