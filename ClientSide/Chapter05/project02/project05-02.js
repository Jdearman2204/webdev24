"use strict";

/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Jacob Dearman
      Date:   3/21/24

      Filename: project05-02.js
*/

document.addEventListener("DOMContentLoaded", function() {
    // Declare Variables
    let images = document.getElementsByTagName("img");
    let photoBucket = document.getElementById("photo_bucket");
    let photoList = document.getElementById("photo_list");

    for (let i = 0; i < images.length; i++) {
        images[i].onclick = function() {
            if (this.parentElement.id === "photo_bucket") {
                let newItem = document.createElement("li");
                photoList.append(newItem);
                newItem.appendChild(this);
            } else {
                let oldItem = this.parentElement;
                photoBucket.append(this);
                oldItem.parentNode.removeChild(oldItem);
            }
        }
    }
});
