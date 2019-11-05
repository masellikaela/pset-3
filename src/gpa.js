const readlineSync = require("readline-sync");

const a = 4.00
const b = 3.00
const c = 2.00
const d = 1.00
const f = 0.00

let gpa = form.gpa1.value; // ???????do i need this??????

const grade = readlineSync.question("\nEnter a letter grade: "));

if !(Number.isNaN(grade)) {
      console.log("Invalid.");
             } 
  else if (grade....????...) {
      console.log("Invalid.");
              } 
  else if (grade = "A+" || grade= "A") {
             gpa = 4.00;
             }
  else if (grade == "B") {
             gpa = 3.00;
             }
  else if (grade == "C") {
             gpa = 2.00;
             }
  else if (grade == "D") {
             gpa = 1.00;
        	}
  else if (grade == "F") {
             gpa = 0.00;
  }
  

//console.log("Your GPA is " + gpa + ".")
