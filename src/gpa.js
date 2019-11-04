const readlineSync = require("readline-sync");

const a = 4.00
const b = 3.00
const c = 2.00
const d = 1.00
const f = 0.00

let gpa = form.gpa1.value; // ?????????????

const grade = readlineSync.question("\nEnter a letter grade: "));

if !(Number.isNaN(grade)) {
      console.log("Invalid.");
             } 
  else if (grade.......) {
      console.log("Invalid.");
              } 
  else if (gpa == "A") {
             gpa = 4.00;
             }
  else if (gpa == "B") {
             gpa = 3.00;
             }
  else if (gpa == "C") {
             gpa = 2.00;
             }
  else if (gpa == "D") {
             gpa = 1.00;
        	}
  else if (gpa == "F") {
             gpa = 0.00;
        	}
  else if (gpa == "a") {
             gpa = 4.00;
             }
  else if (gpa == "b") {
             gpa = 3.00;
             }
  else if (gpa == "c") {
             gpa = 2.00;
             }
   else if (gpa == "d") {
             gpa = 1.00;
        	}
    else if (gpa == "f") {
             gpa = 0.00;
        	}
  console.log("Your GPA is " + gpa + ".")
