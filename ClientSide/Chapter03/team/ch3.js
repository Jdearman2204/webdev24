//initializing array months with values
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//initializing array dataValues to an empty array
let dataValues = [];

//initializing array months2 using new Array
let months2 = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

//initializing array daysWeek to be a new array of 7 elements
let daysWeek = new Array(8);
let monthName = new Array(12);//holds 12 elements

//initializing an array with 4 undefined values
let vals = [,,,];
console.log(vals[0]);
vals[0] = "Silvia";
console.log(vals[0]);
vals[4] = "Jack";
console.log(vals[4]);
console.log("The size of array vals is " + vals.length); //print the size of the array
console.log(vals); //display the content of the array in the form of [values, ..., values]

//populate array daysWeek with values
daysWeek[0] = "";
daysWeek[1] = "Monday";
daysWeek[2] = "Tuesday";
daysWeek[3] = "Wednesday";
daysWeek[4] = "Thursday";
daysWeek[5] = "Friday";
daysWeek[6] = "Saturday";
daysWeek[7] = "Sunday";

//Sparse Arrays
let sparse = new Array();
sparse[0] = 1;
sparse[99] = 100;

console.log(sparse[0]);
console.log(sparse[1]);
console.log(sparse[99]);

let foodMenu = new Array("Breakfast", "Lunch", "Dinner");
//or
// let foodMenu = ["Breakfast", "Lunch", "Dinner"];
let size = foodMenu.length;

//return the 3rd element in foodMenu array
console.log(foodMenu[2]);

//a loop to add numbers from 0 to 10
let x = 1;
let sum = 0;
//while loop is a pre-test loop:it checks your condition before
//you can get in the loop
while(x <= 10) //no semicolon here
{
    sum += x; // total = total + num
    x++;      // num = num + 1
}
console.log("Total (using a while loop) is " + sum);


//reset variables
num = 1;
total = 0;
//do...while is a post-test loop: it lets you in the loop, then 
//check your condition
do
{
    total += num; 
    num++;
} while(num <= 10);
console.log("Total (using a do...while loop) is " + total);

total = 0;
//for loop is also a pre-test loop
for(num = 1; num <= 10; num++) {
    total += num;
}
console.log("Total (using a for loop) is " + total);