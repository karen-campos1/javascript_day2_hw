// Variable to check if user is logged in
let isLoggedIn = true; 

// Function to check if user is logged in
function checkLogin() {
    if (isLoggedIn) {
        console.log("User is logged in. You can add items to your cart.");
        return true;
    } else {
        console.log("User is not logged in. Please log in to add items to your cart.");
        return false;
    }
}

// List of available products using an array 
// each element in the products array is an object (with 2 properties: name and price)
let products = [
    { name: "Laptop Case", price: 40.00 },
    { name: "Phone Case", price: 19.99 },
    { name: "Headphones", price: 110.00 },
    { name: "Keyboard", price: 199.00 }
];

// Cart to store selected products
let cart = [];

// Function to display products
function displayProducts() {    
    console.log("Available Products:");
// using index [i] to loop. if [i] is less than length then it will continue looping and incrementing until no longer true.
    for (let i = 0; i < products.length; i++) {
        console.log(`${i + 1}. ${products[i].name} - $${products[i].price.toFixed(2)}`);
    }
}


// Function to add products to cart
function addToCart(productIndex) {
    if (checkLogin()) {
        if (productIndex >= 0 && productIndex < products.length) {
            cart.push(products[productIndex]);
            console.log(`${products[productIndex].name} has been added to your cart.`);
        } else {
            console.log("Invalid product selection.");
        }
    }
}
// Display products to the user
displayProducts();


// Function to calculate total cost
function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    console.log(`Total cost of items in your cart: $${total.toFixed(2)}`);
}
// Calculate and display the total cost
calculateTotal();


// Function to add products to cart with user input
function addToCart() {
    if (checkLogin()) {
        let productIndex = Number(prompt("Enter the number of the product you want to add to the cart:")) - 1;
        if (productIndex >= 0 && productIndex < products.length) {
            cart.push(products[productIndex]);
            console.log(`${products[productIndex].name} has been added to your cart.`);
        } else {
            console.log("Invalid product selection.");
        }
    }
}
addToCart();



// ------ EXPLORING FUNCTIONS IN JAVASCRIPT -----

// Initial balance of zero
let balance = 0;

// Function to handle deposits
function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        console.log(`You have deposited $${amount}. Your new balance is $${balance}.`);
    } else {
        console.log("Deposit amount must be greater than zero.");
    }
}

// Function to handle withdrawals
function withdraw(amount) {
    if (amount > 0) {
        if (amount <= balance) {
            balance -= amount;
            console.log(`You have withdrawn $${amount}. Your new balance is $${balance}.`);
        } else {
            console.log("Insufficient balance for this withdrawal.");
        }
    } else {
        console.log("Withdrawal amount must be greater than zero.");
    }
}

// Function to check the current balance
function checkBalance() {
    console.log(`Your current balance is $${balance}.`);
}



// Example usage with user input
let userChoice = prompt("Enter 'd' to deposit, 'w' to withdraw, or 'b' to check balance: ").toLowerCase();
if (userChoice === 'd') {
    let depositAmount = Number(prompt("Enter the amount to deposit:"));
    deposit(depositAmount);
} else if (userChoice === 'w') {
    let withdrawAmount = Number(prompt("Enter the amount to withdraw:"));
    withdraw(withdrawAmount);
} else if (userChoice === 'b') {
    checkBalance();
} else {
    console.log("Invalid choice.");
}

// Example usage with hardcoded values
deposit(100);    
withdraw(50);    
checkBalance();  
withdraw(100);   // Tries to withdraw $100, but should fail due to insufficient balance
deposit(200);    
checkBalance();  // Checks the balance
