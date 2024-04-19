/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Jacob Dearman
      Date:   4/19/24

      Filename: project02-04.js
 */
 
      const CHICKEN_PRICE = 10.95;
      const HALIBUT_PRICE = 13.95;
      const BURGER_PRICE = 9.95;
      const SALMON_PRICE = 18.95;
      const SALAD_PRICE = 7.95;
      const SALES_TAX = 0.07;
      
      // Wait for DOM content to fully load
      document.addEventListener("DOMContentLoaded", function() {
          // Add event listeners to all number input elements
          document.getElementById("chicken").addEventListener("input", calcTotal);
          document.getElementById("halibut").addEventListener("input", calcTotal);
          document.getElementById("burger").addEventListener("input", calcTotal);
          document.getElementById("salmon").addEventListener("input", calcTotal);
          document.getElementById("salad").addEventListener("input", calcTotal);
      });
      
      function calcTotal() {
          let cost = 0;
          let buyChicken = parseFloat(document.getElementById("chicken").value);
          let buyHalibut = parseFloat(document.getElementById("halibut").value);
          let buyBurger = parseFloat(document.getElementById("burger").value);
          let buySalmon = parseFloat(document.getElementById("salmon").value);
          let buySalad = parseFloat(document.getElementById("salad").value);
      
          // Check if input is NaN and handle gracefully
          if (!isNaN(buyChicken)) {
              cost += buyChicken * CHICKEN_PRICE;
          }
          if (!isNaN(buyHalibut)) {
              cost += buyHalibut * HALIBUT_PRICE;
          }
          if (!isNaN(buyBurger)) {
              cost += buyBurger * BURGER_PRICE;
          }
          if (!isNaN(buySalmon)) {
              cost += buySalmon * SALMON_PRICE;
          }
          if (!isNaN(buySalad)) {
              cost += buySalad * SALAD_PRICE;
          }
      
          document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
      
          let tax = cost * SALES_TAX;
      
          document.getElementById("foodTax").innerHTML = formatCurrency(tax);
      
          let totalCost = cost + tax;
      
          document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
      }
      
      // Function to display a numeric value as a text string in the format $##.## 
      function formatCurrency(value) {
          return "$" + value.toFixed(2);
      }
      