const readlineSync = require("readline-sync");
const  MIN = 0;
const  MAX = 100;
const grade = Number(readlineSync.question("\n\nEnter a grade: "));

const highA = 100;
const lowA = 90;
const highB = 89;
const lowB = 80;
const highC = 79
const lowC = 70;
const highD = 69;
const lowD = 60;
const highF = 59;
const lowF = 0;

if (Number.isNaN(grade)) {
      console.log("\nInvalid.")
} else if (grade < MIN || grade > MAX) {
      console.log("\nInvalid.")

} else if (grade >= lowA && grade <= highA) {
      console.log("\nYou received an A.")

} else if (grade >= lowB && grade <= highB) {
      console.log("\nYou received a B.")

} else if (grade >= lowC && grade <=highC) {
      console.log("\nYou received a C.")

} else if (grade >= lowD && grade <=highD) {
      console.log("\nYou received a D.")

} else if (grade >= lowF && grade <=highF) {
      console.log("\nYou received an F.")
}
