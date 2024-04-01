#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 6590;

let pinAns = await inquirer.prompt([
  {
    message: "Enter Your Pin",
    type: "number",
    name: "pin",
  },
]);
if (pinAns.pin === myPin) {
  let operationAns = await inquirer.prompt([
    {
      message: "Select One Of The Operation",
      type: "list",
      name: "operation",
      choices: ["Withdraw", "Check Balance"],
    },
  ]);
  if (operationAns.operation === "Withdraw") {
    let withdrawlMethod = await inquirer.prompt([
      {
        message: "Select One Of The Withdraw Method",
        type: "list",
        name: "withdrawl",
        choices: ["Fast Cash", "Enter Amount"],
      },
    ]);
    if (withdrawlMethod.withdrawl === "Fast Cash") {
      let fastCashAns = await inquirer.prompt([
        {
          message: "Select Your Amount",
          type: "list",
          name: "fastCash",
          choices: ["1000", "2000", "5000", "10000"],
        },
      ]);
      if (fastCashAns.fastCash > myBalance) {
        console.log("Your Balance Is Insufficient");
      } else {
        console.log("Your Transaction Is Successfull ");
      }
      myBalance -= fastCashAns.fastCash;
      console.log("Your Remaining Balance Is : ", myBalance, "");
    } else if (withdrawlMethod.withdrawl === "Enter Amount") {
      let amountAns = await inquirer.prompt([
        {
          message: "Enter Amount Your Wanna Withdraw",
          type: "number",
          name: "amount",
        },
      ]);
      if (amountAns.amount > myBalance) {
        console.log("Your Balance Is Insufficient");
      } else {
        console.log("Your Transaction Is Successfull");
        myBalance -= amountAns.amount;
        console.log("Your Remaining Balance Is ", myBalance, "");
      }
    }
  } else if (operationAns.operation === "Check Balance") {
    console.log("Your Balance Is ", myBalance, "");
  }
} else {
  console.log("Your Pin Is Not Valid");
}

console.log("Thank You For Coming In My Bank");
