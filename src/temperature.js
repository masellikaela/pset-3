const readlineSync = require("readline-sync");

const temperature = Number(readlineSync.question("\n\nEnter a temperature: "));
const scale = readlineSync.question("Enter a scale: ")

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = Number.MIN_SAFE_INTEGER;
const fahrenheitFreezingPoint = 32;
const fahrenheitBoilingPoint = 212;
const celsiusFreezingPoint = 0;
const celsiusBoilingPoint = 100;
const kelvinFreezingPoint = 273;
const kelvinBoilingPoint = 373;


if (temperature < (Number.MIN_SAFE_INTEGER) || temperature > Number.MAX_SAFE_INTEGER) {
      console.log("\nInvalid.")
} else if (temperature <= fahrenheitFreezingPoint && (scale == "F" || scale == "f")){
      console.log("\nSolid.")
} else if ((temperature > fahrenheitFreezingPoint && temperature < fahrenheitBoilingPoint) && (scale == "F" || scale == "f")){
      console.log("\nLiquid.")
} else if (temperature >= fahrenheitBoilingPoint && (scale == "F" || scale == "f")){
      console.log("\nGas.")
} else if (temperature <= celsiusFreezingPoint && (scale == "C" || scale == "c")){
      console.log("\nSolid.")
} else if ((temperature > celsiusFreezingPoint && temperature < celsiusBoilingPoint) && (scale == "C" || scale == "c")){
      console.log("\nLiquid.")
} else if (temperature >= celsiusBoilingPoint && (scale == "C" || scale == "c")){
      console.log("\nGas.")
} else if (temperature <= kelvinFreezingPoint && (scale == "K" || scale == "k")){
      console.log("\nSolid.")
} else if ((temperature > kelvinFreezingPoint && temperature < kelvinBoilingPoint) && (scale == "K" || scale == "k")){
      console.log("\nLiquid.")
} else if (temperature >= kelvinBoilingPoint && (scale == "K" || scale == "k")){
      console.log("\nGas.")
} else {
      console.log("\nInvalid.")
}
