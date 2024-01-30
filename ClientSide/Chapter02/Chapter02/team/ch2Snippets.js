let user = "Dawson";    //global scope - global variable

function showUser()
{
    let User = "Reynolds";  //local scope - local variable
    console.log("In showUser - local scope");
    console.log(user);
}


console.log("Global scope");
console.log(user);  //print the global variable user
showUser();


console.log("Welcome to \"JavaScript Programming\"" + "\n" + "\tYou will enjoy this!");