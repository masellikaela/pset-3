const readlineSync = require("readline-sync");
const  MIN = 0.01;
const  MAX = 0.99;
const QUARTER = 0.25;
const DIME = 0.10;
const NICKEL = 0.05;
const PENNY = 0.01;

const change = Number(readlineSync.question("\n\nEnter a dollar amount: "));

if (Number.isNaN(change)) {
      console.log("\nInvalid.")
} else if (change < MIN || change > MAX) {
      console.log("\nInvalid.")
} else

{let quarteramount=	Math.floor(change/QUARTER);
  let remainquarter=change%QUARTER;

	let dimeamount= Math.floor(remainquarter/DIME);
	let remaindime= remainquarter%DIME;

	let nickelamount= Math.floor(remaindime/NICKEL);
	let remainnickel= remaindime%NICKEL;

	let pennyamount= Math.ceil(remainnickel/PENNY);
	let remainpenny= remainnickel%PENNY;

	console.log("\n"+ quarteramount + " quarters, " +  dimeamount +" dimes, "+ nickelamount +" nickels, and " + pennyamount +" pennies.")
}
