"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-04

      Project to turn a selection list into a selection of hypertext links
      Author: Jacob Dearman
      Date:   4/24/24

      Filename: project06-04.js
*/

// Selection lists in the web form
let year = document.getElementById("year");
let make = document.getElementById("make");
let model = document.getElementById("model");
let trim = document.getElementById("trim");

// Option elements within the selection lists
let yearOptions = document.querySelectorAll("select#year option");
let makeOptions = document.querySelectorAll("select#make option");
let modelOptions = document.querySelectorAll("select#model option");
let trimOptions = document.querySelectorAll("select#trim option");

// The number of options within each selection list
let years = yearOptions.length;
let makes = makeOptions.length;
let models = modelOptions.length;
let trims = trimOptions.length;

// Form button to generate the complete text of the selected vehicle
let selectVehicle = document.getElementById("selectVehicle");

// Paragraph containing the text of the selected vehicle
let vehicle = document.getElementById("vehicle");

// Function to show all the options within a selection list
function showAll(selectList) {
   let options = selectList.querySelectorAll('option');
   let optionLength = options.length;

   for (let i = 0; i < optionLength; i++) {
      options[i].style.display = "block";
   }
}

// Function to filter the options within a selection list to show only those options that match a previously chosen car make or car model
function filterSelect(selectList, category) {
   let options = selectList.querySelectorAll('option');
   let optionLength = options.length;

   for (let i = 0; i < optionLength; i++) {
      if (options[i].classList.contains(category)) {
         options[i].style.display = "block";
      } else {
         options[i].style.display = "none";
      }
   }
}

// Event handler to modify the content of the Make selection list when the Year selection list changes
year.onchange = function() {
   let yearIndex = year.selectedIndex;
   let yearCategory = year.options[yearIndex].text;

   if (yearIndex === 0) {
      showAll(make);
   } else {
      filterSelect(make, yearCategory);
   }  
}

// Event handler to modify the content of the Model selection list when the Make selection list changes
make.onchange = function() {
   let makeIndex = make.selectedIndex;
   let makeCategory = make.options[makeIndex].text;
   
   if (makeIndex === 0) {
      showAll(model);
   } else {
      filterSelect(model, makeCategory);
   }  
}

// Event handler to modify the content of the Trim selection list when the Model selection list changes
model.onchange = function() {
   let modelIndex = model.selectedIndex;
   let modelCategory = model.options[modelIndex].text;
   
   if (modelIndex === 0) {
      showAll(trim);
   } else {
      filterSelect(trim, modelCategory);
   }     
}

// Onclick event handler for the selectVehicle button
selectVehicle.onclick = function() {
   let yearText = year.options[year.selectedIndex].text;
   let makeText = make.options[make.selectedIndex].text;
   let modelText = model.options[model.selectedIndex].text;
   let trimText = trim.options[trim.selectedIndex].text;
   
   vehicle.textContent = yearText + ' ' + makeText + ' ' + modelText + ' ' + trimText;
}
