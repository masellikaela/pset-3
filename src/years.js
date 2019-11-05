const readlineSync = require("readline-sync");

 const MAX = Number.MAX_SAFE_INTEGER;
 const MIN = 0;

const year = Number(readlineSync.question("\nEnter a year: "));

if (Number.isNaN(year)) {
   console.log("\nInvalid.\n")

} else if (year < MIN || year > MAX) {
   console.log("\nInvalid.\n")

} else if (year % 4 == 0) {
   console.log("\n" + year + " is a leap year.\n")

} else if (year % 4 != 0) {
   console.log("\n" + year + " is not a leap year.\n")
} 
