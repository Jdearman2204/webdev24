/*
Student Name: Jacob Dearman
File Name: script.js
Date: 4/8/24
*/

//Global Variables
var video = document.getElementById("example");

//Hamburger Menu
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}