// // 1. Declare an empty array using JS literal notation to store
// // student names in future.
var students = [];
alert(students);
// // 2. Declare an empty array using JS object notation to store
// // student names in future.
var student = [];
student[student.length] = "muzammil";;
alert(student);
// // 3. Declare and initialize a strings array.
var studentstring = ["Muzammil", "Yaseen", "Kabeer", "Waqas"];
alert(studentstring);
// // 4. Declare and initialize a numbers array.
var studentnumber = ["1234", "09778", "576567", "46756"];
alert(studentnumber);
// // 5. Declare and initialize a boolean array.
var booleanArray = [true, false, true, false];
alert(booleanArray);
// // 6. Declare and initialize a mixed array.
var miscArray = ["Muzammil" , "Yaseen" , 1234 , 5678 , true , false];
alert(miscArray);
// // 7. Declare and Initialize an array and store available
// // education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// // BS, BCOM, MS, M. Phil., PhD). Show the listed
var degrees = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil', 'PhD'];
document.write(`<h1>Qualifications:</h1>
<ol>
<li>${degrees[0]}</li>
<li>${degrees[1]}</li>
<li>${degrees[2]}</li>
<li>${degrees[3]}</li>
<li>${degrees[4]}</li>
<li>${degrees[5]}</li>
<li>${degrees[6]}</li>
<li>${degrees[7]}</li>
</ol>`
) 
// // 8. Write a program to store 3 student names in an array.Take
// // another array to store score of these three students.
// // Assume that total marks are 500 for each student, display
// // the scores & percentages of students like:

var studentName = ['Michel', 'John', 'Tony'];
var studentScore = [320, 230, 480];
var studentTotalNo = 500;
var studentPercentAgeOne = studentScore[0]/studentTotalNo * 100;
var studentPercentAgeTwo = studentScore[1]/studentTotalNo * 100;
var studentPercentAgeThree = studentScore[2]/studentTotalNo * 100;
document.write(`<ol>
<li>Score of ${studentName[0]} is ${studentScore[0]}. Percentage: ${studentPercentAgeOne}% </li>
<li>Score of ${studentName[1]} is ${studentScore[1]}. Percentage: ${studentPercentAgeTwo}% </li>
<li>Score of ${studentName[2]} is ${studentScore[2]}. Percentage: ${studentPercentAgeThree}% </li>
</ol>`) 
// // 9. Initialize an array with color names. Display the array
// // elements in your browser.
// // a. Ask the user what color he/she wants to add to the
// // beginning & add that color to the beginning of the array.
// // Display the updated array in your browser.
// // b. Ask the user what color he/she wants to add to the end
// // & add that color to the end of the array. Display the
// // updated array in your browser.
// // c. Add two more color to the beginning of the array.
// // Display the updated array in your browser.
// // d. Delete the first color in the array. Display the updated
// // array in your browser.
// // e. Delete the last color in the array. Display the updated
// // array in your browser.
// // f. Ask the user at which index he/she wants to add a color
// // & color name. Then add the color to desired
// // position/index. . Display the updated array in your
// // browser.
// // g. Ask the user at which index he/she wants to delete
// // color(s) & how many colors he/she wants to delete. Then
// // remove the same number of color(s) from user-defined
// // position/index. . Display the updated array in your
// // browser.
// // 10. Write a program to store student scores in an array &
// // sort the array in ascending order using Array’s sort
// // method.
 var studentScore = [320, 230, 480, 120];
 document.write(`Scores of Students: ${studentScore}<br>`);
 document.write(`Ordered Scores of Students: ${studentScore[3]}, ${studentScore[1]} , ${studentScore[0]} , ${studentScore[2]}`);

// // 11. Write a program to initialize an array with city names.
// // Copy 3 array elements from cities array to selectedCities
// // array.
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectCity = [];
selectCity.push(cities[2], cities[3] );
document.write(`<h2>Cities List:</h2><br>${cities}<br>`)
document.write(`<h2>Select Cities List:</h2><br>${selectCity};`)
// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
var arrayString = ["This", "is", "my", "cat"];
var arraySplited = arrayString.split(" ")
document.write(`Array:<br> ${arrayString}`)
// document.write(`String:<br>${arraySplited}`);
