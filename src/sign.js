const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = Number.MIN_SAFE_INTEGER;

let number = Number(readlineSync.question("\n\nEnter a number: "));

if (Number.isNaN(number)) {
       console.log("\nInvalid.")
} else if (number < MIN || number > MAX) {
       console.log("\nInvalid.")
} else if (number>0){
       console.log("\nPositive.")
} else if(number<0){
       console.log("\nNegative.")
} else if (number === 0){
       console.log("\nZero.")
}
