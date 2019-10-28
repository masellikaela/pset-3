const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const quarter = 0.25
const dime = 0.10
const nickle = 0.05
const pennies = 0.01

(C-0.25)
Q=Q+1
REPEAT UNTIL C<0.25
(C-0.10)
D=D+1
	REPEAT UNTIL C<0.10
(C-0.05)
N=N+1
REPEAT UNTIL C<0.05
(C-0.01)
P=P+1
REPEAT UNTIL C<0.01


const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
      console.log("invalid")
} else if (amount < MIN || amount > MAX) {
      console.log("invalid")
} else {
    // write your code for making change here
}
