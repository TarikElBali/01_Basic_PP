
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1980;
const birthYearMark = 1990;

// // Berechnung Alter - Iteration 1
// let year = 2026;
// ageJohn = year - birthYearJohn;
// ageMark = year - birthYearMark;


// // Berechnung Alter - Iteration 2
// let date = new Date();
// console.log("Datum: " + date)
// let year = date.getFullYear();
// console.log("Jahr: " + year);
// ageJohn = year - birthYearJohn;
// ageMark = year - birthYearMark;



// Berechnung Alter - Iteration 3
let year = new Date().getFullYear();
console.log("Jahr: " + year);
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);

// Deklaration | Tests | Aussagenlogik
// let isJohnOlder = false;
let isJohnOlder = (ageJohn > ageMark); // Test auf Ungleichheit
let isJohnEqual = (ageJohn == ageMark) // Test auf Gleichheit
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);




