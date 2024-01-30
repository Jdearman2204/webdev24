/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Jacob Dearman
      Date:   1/25/24

      Filename: js02.js
 */

//setup the form when the page loads
//declare global constants for the application
const EMP_COST = 100;  //cost of the photographers per hour
const BOOK_COST = 350;  //cost of memory book
const REPRO_COST = 1250;  //cost of reproduction rights
const TRAVEL_COST = 2;  //cost of travel per mile
window.addEventListener("load",setupForm);

//set the form's default values
function setupForm() {
      document.getElementById("photoNum").value=1;
      document.getElementById("photoHrs").value=2;
      document.getElementById("makeBook").checked=false;
      document.getElementById("photoRights").checked=false;
      document.getElementById("photoDist").value=0;
}
