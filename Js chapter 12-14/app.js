// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var upercaseInput = prompt("Please Type a Upper Case & number");
var lowercaseInput = prompt("Please Type a Lower Case & number");
if(upercaseInput == 65){
   alert(`${upercaseInput} This is a Uppercase A`);
   }else if(upercaseInput == 90){
      alert(`${upercaseInput} This is a Uppercase Z`);
      }else if(lowercaseInput == 97){
         alert(`${upercaseInput} This is a Lowercase a`);
      
         }else if(lowercaseInput === 122){
            alert(`${upercaseInput} This is a Lowercase z`);
         
            }else{
               alert(`This is a Unvalid Number`);
            }

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
var num1 = prompt("Enter the first Integer");
var num2 = prompt("Enter the second Integer");
if(num1 > num2){
   alert("The larger integer is:" + num1);
}else if(num2 > num1){
   alert("The larger integer is:" + num2);
}else {
   alert("Both integers are equal.");
// }
// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
var userNumber = prompt("Enter a number");
if(userNumber > 0){
   alert("The Number is Positive");
}else if(userNumber < 0){
   alert("The Number is Negative");
}else{
   alert("The number is zero.");
}
// 4. Write a program that takes a character (i.e. string of
//    length 1) and returns true if it is a vowel, false otherwise
var vowelsInput = prompt("Enter a character");
vowelsInput = false;
if(vowelsInput == 'a' || vowelsInput == 'e' || vowelsInput == 'i' || vowelsInput == 'o' || vowelsInput == 'u'){
   vowelsInput = true;
   alert("This is a Vowels Words" + vowelsInput);
}else{
   alert("This is a Not Vowels Word");
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.
var correctPassword = "password123";
var enteredPassword = prompt("Enter your password:");
if(correctPassword === null || correctPassword === ""){
   alert("Please Enter your password");
}else if (enteredPassword === correctPassword) {
   alert("Correct! The password you entered matches the original password.");
} else {
   alert("Incorrect password.");
}
// 6. This if/else statement does not work. Try to fix it:
// var greeting;
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting);
} else {
    greeting = "Good evening";
    alert(greeting);
}



}
// Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var timeZone= prompt("Enter a Time Number");
if(timeZone > 1700){
    alert("5pm");
}else if(timeZone > 1800){
    alert("6pm");
}else if(timeZone > 1900){
    alert("7pm");
}else if(timeZone > 2000){
    alert("8pm");
}else if(timeZone > 2100){
    alert("9pm");
}else if(timeZone > 2200){
    alert("10pm");
}else if(timeZone > 2300){
    alert("11pm");
}else if(timeZone > 2400){
    alert("12am");
}
