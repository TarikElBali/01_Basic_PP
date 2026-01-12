
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

let firstZahl = prompt("Bitte die erste Zahl eingeben: ");
let secondZahl = prompt("Bitte die zweite Zahl eingeben: ");

firstZahl = Number(firstZahl);
secondZahl = Number(secondZahl);

let summe = firstZahl + secondZahl;
console.log("Die Summe der Zahlen ist:" + summe);

