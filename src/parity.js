const readlineSync = require("readline-sync");

 const MAX = Number.MAX_SAFE_INTEGER;
 const MIN = Number.MIN_SAFE_INTEGER;


 let number = Number(readlineSync.question("\nEnter an Integer: "));
 if (Number.isNaN(number)) {
    console.log("\nInvalid.")
}
else if  (!Number.isInteger(number)){
    console.log("\nInvalid.")
}
else if (number < MIN || number > MAX) {
    console.log("\nInvalid.")
}
else if (number % 2 === 0) {
    console.log("\nEven.");
}
else {
    console.log("\nOdd.");
}
