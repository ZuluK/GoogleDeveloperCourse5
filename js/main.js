

//Persistent data structures for efficient immutablity

/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "ballroom";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room === "dining room") {
    weapon = "knife";
    solved = true;
    suspect = "Mr. Parkes";
} else if (room === "gallery") {
    weapon = "trophy"
    solved = true;
    suspect = "Ms. Van Cleve";
} else if (room == "ballroom") {
    weapon = "poison";
    solved = true;
    suspect = "Mr. Kalehoff";
} else {
    weapon = "pool stick";
    solved = true;
    suspect = "Mrs. Sparr";

}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}

/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 20000.4345;
var checkBalance = true;
var isActive = true;

// your code goes here
if(checkBalance === false){
    console.log("Thank you. Have a nice day!")
} else if (checkBalance === true && (isActive === true && balance > 0)){
    console.log("Your balance is $" + balance.toFixed(2) + ".")
} else if (checkBalance === true && isActive === false) {
    console.log("Your account is no longer active.")
} else if (checkBalance === true && (isActive === true && balance === 0)){
    console.log("Your account is empty.")
} else if (checkBalance === true && (isActive === true && balance < 0)){
    console.log("Your balance is negative. Please contact your bank.")
}
