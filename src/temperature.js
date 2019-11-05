const readlineSync = require("readline-sync");

change the variables !!!!!!!!!const theTemperature = Number(readlineSync.question("\nEnter a temperature: "));
const theScale = readlineSync.question("Enter a scale: "))

const fahrenheitFreezingPoint = 32;
const fahrenheitBoilingPoint = 212;
const celsiusFreezingPoint = 0;
const celsiusBoilingPoint = 100;
const kelvinFreezingPoint = 273;
const kelvinBoilingPoint = 373;


if (theTemperature < (Number.MIN_SAFE_INTEGER) || theTemperature > Number.MAX_SAFE_INTEGER) {
      console.log("\nInvalid.\n")

} else if (theTemperature <= fahrenheitFreezingPoint && (theScale == "F" || theScale == "f")){
      console.log("\nSolid.\n")

} else if ((theTemperature > fahrenheitFreezingPoint && theTemperature < fahrenheitBoilingPoint) && (theScale == "F" || theScale == "f")){
      console.log("\nLiquid.\n")

} else if (theTemperature >= fahrenheitBoilingPoint && (theScale == "F" || theScale == "f")){
      console.log("\nGas.\n")

} else if (theTemperature <= celsiusFreezingPoint && (theScale == "C" || theScale == "c")){
      console.log("\nSolid.\n")

} else if ((theTemperature > celsiusFreezingPoint && theTemperature < celsiusBoilingPoint) && (theScale == "C" || theScale == "c")){
      console.log("\nLiquid.\n")

} else if (theTemperature >= celsiusBoilingPoint && (theScale == "C" || theScale == "c")){
      console.log("\nGas.\n")

} else if (theTemperature <= kelvinFreezingPoint && (theScale == "K" || theScale == "k")){
      console.log("\nSolid.\n")

} else if ((theTemperature > kelvinFreezingPoint && theTemperature < kelvinBoilingPoint) && (theScale == "K" || theScale == "k")){
      console.log("\nLiquid.\n")

} else if (theTemperature >= kelvinBoilingPoint && (theScale == "K" || theScale == "k")){
      console.log("\nGas.\n")

} else {
      console.log("\nInvalid.\n")
}
