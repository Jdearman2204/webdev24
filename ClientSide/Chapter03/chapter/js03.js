/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: 
     Date:   

     Filename: js03.js
 */

// Days of the week
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//Function to write weekday names to calendar
function addWeekdays() {
    let i = 0; // initial ocunter value

    //reference the collection of heading cells
    let headingCells = document.getElementsByTagName("th");

    //write each of the seven days into a heading cell
    while (i < 7) {
        headingCells[i].innerHTML = weekDays[i];

        //increase the counter by 1
        i++;
    }
}

window.addEventListener("load", addWeekdays);

//Function to write game information in the calendar
function showGames() {
    for (let i = 0; i < gameDates.length; i++) {
        let gameInfo = "";

        //open the paragraph
        gameInfo += "<p>";


        //Include the oponent
        gameInfo += gameOpponents[i] + "<br>";

        //Include the result and score
        gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";

        //close paragraph
        gameInfo += "<p>";

        //Write information in the table cell
        let tableCell = document.getElementById(gameDates[i]);
        tableCell.insertAdjacentHTML("beforeend", gameInfo)
    }
}

window.addEventListener("load", showGames);