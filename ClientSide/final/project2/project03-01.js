/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: 
      Date:   

      Filename: project03-01.js
*/

let menuItems = document.getElementsByClassName("menuItem");

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("input", calcTotal);
}

function calcTotal() {
    let orderTotal = 0;
    let subtotal = 0;
    let taxRate = 0.07;

    for (let i = 0; i < menuItems.length; i++) {
        let quantity = parseInt(menuItems[i].value);
        let price = parseFloat(menuItems[i].getAttribute("data-price"));
        subtotal += quantity * price;
        orderTotal += quantity;
        let itemSubtotal = quantity * price;
        let formattedSubtotal = formatCurrency(itemSubtotal);
        document.getElementById("item" + (i + 1) + "subtotal").innerHTML = formattedSubtotal;
        document.getElementById("item" + (i + 1) + "quantity").innerHTML = quantity;
    }

    let tax = subtotal * taxRate;
    let total = subtotal + tax;

    document.getElementById("subtotal").innerHTML = formatCurrency(subtotal);
    document.getElementById("tax").innerHTML = formatCurrency(tax);
    document.getElementById("billTotal").innerHTML = formatCurrency(total);
}

// Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
    return "$" + value.toFixed(2);
}
