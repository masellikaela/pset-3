const readlineSync = require("readline-sync");

 const MAX = Number.MAX_SAFE_INTEGER;
 const MIN = Number.MIN_SAFE_INTEGER;

let number = Number(readlineSync.question("\nEnter three numbers: \n\n"));
number= readlineSync.question();
number= readlineSync.question();

let numArr = Array.prototype.slice.call(arguments);
  let truthArray = [];

  for (var num = 0; num < numArr.length; num++) {
    while (numArr[num + 1] !== undefined) {
      if (numArr[num] < numArr[num + 1]) {
        truthArray.push(true);
      } else {
        truthArray.push(false);
      }
      num++
    }
  }

  if (truthArray.includes(false)) {
    return false;
  } else {
    return true;
  }
}//test that stuff above?

 /*if (Number.isNaN(number)) {
   *console.log("\nInvalid.")
 *} else if (number < MIN || number > MAX){
    *   console.log("\nInvalid.")
 */}
 //else if (){
  //     console.log("\nStrictly increasing.")
// }
/// else if (){
  //     console.log("\nIncreasing.")
/// }
 //else if (){
  //     console.log("\nEqual.")
// }
 //else if (){
  //     console.log("\nDecreasing.")
 //}
 //else if (){
  //     console.log("\nStrictly decreasing.")
 //}
//else if (){
  //     console.log("\nUnordered.")
 //}
