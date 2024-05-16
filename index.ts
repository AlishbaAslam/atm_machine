#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance: number = 100000;

const myPinCode: number = 9912;

let enterPin = await inquirer.prompt([
    {
        name: "pinCode",
        message: "Please enter your 4 digits pin code",
        type: "number"
    }
]);

if (enterPin.pinCode === myPinCode) {
    console.log("Correct Pin code");

    let selectOpt = await inquirer.prompt([
        {
            name: "option",
            message: "Please select a Transaction",
            type: "list",
            choices: ["Cash Withdrawal", "Check Balance", "Fast Cash"]
        }
]);

if (selectOpt.option === "Cash Withdrawal") {
    let enterAmount = await inquirer.prompt([
        {
            name: "amount",
            message: "Please enter amount Rs.500 to Rs.50000",
            type: "number"
        }
]);

if (enterAmount.amount > myBalance ) {
    console.log("Insufficient Balance");
}else{
// Remaining Balance

myBalance -= enterAmount.amount;
console.log(`You have successfully withdrawal ${enterAmount.amount} \nYour remaining balance is ${myBalance}`);
}
}else if (selectOpt.option === "Check Balance") {
console.log(`Your remaining balance is ${myBalance}`);

}else if (selectOpt.option === "Fast Cash") {
    let decide = await inquirer.prompt([
        {
            name: "select",
            message: "Select one of them",
            type: "list",
            choices: [1000, 2000, 5000, 10000]
        }
]);

// Remaining Balance 

myBalance -= decide.select;
console.log(`You have successfully withdrawal ${decide.select} \nYour remaining balance is ${myBalance}`);

}
}else{
    console.log("Incorrect Pin code,Please Re-enter!");
    
}