const readlineSync = require("readline-sync");
const  MIN = 0;
const  MAX = 100;
const grade = Number(readlineSync.question("\nEnter a grade: "));


if (Number.isNaN(grade)) {
      console.log("invalid")
} else if (grade < MIN || change > MAX) {
      console.log("invalid")
} else if (grade>=90 && grade<=100){
        console.log("You recieved an A.")
  
} else if (grade>=80 && grade<=89){
        console.log("You recieved a B.")
  
}  else if (grade>=70 && grade<=79){
        console.log("You recieved a C.")
  
}  else if (grade>=60 && grade<=69){
        console.log("You recieved a D.")
  
}  else if (grade>=0 && grade<=59){
        console.log("You recieved a F.")
}   
  /// wait its suppose Use const variables to represent the thresholds between A, B, C, D, and F?
