
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf | call
// test();

 // Funktionsrumpf | (callee)
// Funktionsdeklaration
// function test()
// {
//     console.log("Hallo, Simonas!");
// }

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// call
ausgabeNamen();

// Funktionalität
function ausgabeNamen() {
    // interne Variable | What happens in VEGAS
    let firstName = "Yasin";

    console.log("Hallo, " + firstName + "!");

}

// console.log(firstName); // Fehler Scope