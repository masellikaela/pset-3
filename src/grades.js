const readlineSync = require("readline-sync");
const  MIN = 0;
const  MAX = 100;
const grade = Number(readlineSync.question("\nEnter a grade: "));

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
      console.log("invalid")
} else if (grade < MIN || change > MAX) {
      console.log("invalid")

} else if (grade >= lowA && grade <= highA) {
      console.log("\nYou received an A.\n")

} else if (grade >= lowB && grade <= highB) {
      console.log("\nYou received a B.\n")

} else if (grade >= lowC && grade <=highC) {
      console.log("\nYou received a C.\n")

} else if (grade >= lowD && grade <=highD) {
      console.log("\nYou received a D.\n")

} else if (grade >= lowF && grade <=highF) {
      console.log("\nYou received an F.\n")
}
