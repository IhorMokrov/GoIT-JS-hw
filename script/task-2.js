// Task 2
// Write a script to check the quantity of products in stock. You have variables named total (total quantity of products in stock) and ordered (number of units of a product in the order).

// Compare these values and based on the comparison, display:

// If the order quantity exceeds the quantity of products in stock, then display the message "Insufficient goods in stock!".
// Otherwise, display the message "Order placed, a manager will contact you".
// Test the code with different values for the ordered variable, for example, 20, 80, and 130.

const total = 100;
const ordered = 50;

let msg =
  total > ordered
    ? "Order placed, a manager will contact you"
    : "Insufficient goods in stock!";

console.log(msg);
