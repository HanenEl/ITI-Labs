
// Q1
var number1 = 3, number2 =2.9 , number3 =90 ;
var first_name = "Haneen", second_name = "Elladam" ;
console.log("This is the External JavaScript file");  
console.log("***************") ; 

// Q2

var flag = true; 
var numbers = 5; 
console.log("Sum of number1 and number2: ", number1 + number2);  // 5.9

console.log("Sum of number1 and numbers: ", number1 + numbers); // 8

console.log("Sum of flag and number2: ", flag + number2); // 3.9

console.log("Sum of firstName and flag: ", first_name + flag); // Haneentrue

console.log("Sum of number1 and firstName: ", number1 + first_name); // 3Haneen

console.log("Multiplication of number1 and flag: ", number1 * flag); // 3

console.log("Divide number1 and lastName: ", number1 / second_name); NaN

console.log("Full Name: ", first_name + " " + second_name); // Full Name:  Haneen Elladam

console.log("Last Name as an array: ", second_name.split()); // Last Name as an array:  [ 'Elladam' ] 
console.log("***************") ; 
// Q3
console.log(FirstName) ; 
var FirstName =" Haneen";
console.log("***************") ; 
/* 
A) The output will be undefined due to hoisting
*/
var FirstName ;   
console.log(FirstName) ; 
FirstName =" Haneen";
/* B) The output: undefined */
console.log("***************") ; 