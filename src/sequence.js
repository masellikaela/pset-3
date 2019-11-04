const readlineSync = require("readline-sync");

 const MAX = Number.MAX_SAFE_INTEGER;
 const MIN = Number.MIN_SAFE_INTEGER;

let number1 = Number(readlineSync.question("\nEnter three numbers: \n\n"));
number2= Number(readlineSync.question());
number3= Number(readlineSync.question());

 if (Number.isNaN(number1 && number2 && number3)) {
   console.log("\nInvalid.")
 } else if ((number1 && number2 && number3) < MIN || (number1 && number2 && number3) > MAX){
   console.log("\nInvalid.")
}
else if (number1<number2 && number2<number3){
      if (number2-number1)==(number3-number2){
      console.log("\nStrictly increasing.")}
      else{
      console.log("\nIncreasing.")
    }
}
else if (number1==number2 && number2==number3 && number1==number3){
    console.log("\nEqual.")
}
else if (number1>number2 && number2>number3){
     console.log("\nDecreasing.")}
}
//else if (){
  // console.log("\nStrictly decreasing.")
//}
//else if (){
    //  console.log("\nUnordered.")
//}
