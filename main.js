#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.green.bgGrey.underline('\n\t********** TypeScript Quiz System **********\n'));
let score = 0;
let questions_1 = await inquirer.prompt([
    {
        name: "questions1",
        type: "list",
        message: chalk.bold.bgBlackBright("\tQ-1.TypeScript was born in which year?"),
        choices: [
            "1 October 2012",
            "20 January 2002",
            "9 Sepeteber 2000",
            "1 October 2005",
        ],
    },
]);
if (questions_1.questions1 === "1 October 2012") {
    console.log(chalk.bold.green("\nCorrect! Answer\n"));
    score += 10;
}
else {
    console.log(chalk.bold.red("\n\nWrong Answer\n\n"));
}
let questions_2 = await inquirer.prompt([
    {
        name: "questions2",
        type: "list",
        message: chalk.bold.bgBlackBright("\tQ-2.What are the three main 'simple types' in TypeScript?"),
        choices: [
            "Boolean , Number , String",
            "Object , Array , Symbol",
            "Array , Object , Boolean",
            "Object , String , Number",
        ],
    },
]);
if (questions_2.questions2 === "Boolean , Number , String") {
    console.log(chalk.bold.green("\nCorrect! Answer\n"));
    score += 10;
}
else {
    console.log(chalk.bold.red("\n\nWrong Answer\n\n"));
}
let questions_3 = await inquirer.prompt([
    {
        name: "questions3",
        type: "list",
        message: chalk.bold.bgBlackBright("\tQ-3.What type of assignment is this variable, `const fullName: string = 'Syed Saud Ali';`?"),
        choices: ["Implicit", "Explicit"],
    },
]);
if (questions_3.questions3 === "Explicit") {
    console.log(chalk.bold.green("\nCorrect! Answer\n"));
    score += 10;
}
else {
    console.log(chalk.bold.red("\n\nWrong Answer\n\n"));
}
let questions_4 = await inquirer.prompt([
    {
        name: "questions4",
        type: "list",
        message: chalk.bold.bgBlackBright("\tQ-4.True or False: TypeScript can always correctly infer a variables type."),
        choices: ["False", "True"],
    },
]);
if (questions_4.questions4 === "False") {
    console.log(chalk.bold.green("\nCorrect! Answer\n"));
    score += 10;
}
else {
    console.log(chalk.bold.red("\n\nWrong Answer\n\n"));
}
let questions_5 = await inquirer.prompt([
    {
        name: "questions5",
        type: "list",
        message: chalk.bold.bgBlackBright("\tQ-5.What is the inherited type for the variable example in `const example = ['Saud']`?"),
        choices: ["any[]", "string", "string[]", "unknown[]"],
    },
]);
if (questions_5.questions5 === "string[]") {
    console.log(chalk.bold.green("\nCorrect! Answer\n"));
    score += 10;
}
else {
    console.log(chalk.bold.red("\n\nWrong Answer\n\n"));
}
let questions_6 = await inquirer.prompt([
    {
        name: "questions6",
        type: "list",
        message: chalk.bold.bgBlackBright("\tQ-6.What are the two types of enums?"),
        choices: [
            "Number and Number Array",
            "String and Number",
            "Number and Boolean",
            "String and Boolean",
        ],
    },
]);
if (questions_6.questions6 === "String and Number") {
    console.log(chalk.bold.green("\nCorrect! Answer\n"));
    score += 10;
}
else {
    console.log(chalk.bold.red("\n\nWrong Answer\n\n"));
}
let questions_7 = await inquirer.prompt([
    {
        name: "questions7",
        type: "list",
        message: chalk.bold.bgBlackBright("\tQ-7._____ is a return type for when nothing is returned."),
        choices: ["any[]", "void", "any", "unknown"],
    },
]);
if (questions_7.questions7 === "void") {
    console.log(chalk.bold.green("\nCorrect! Answer\n"));
    score += 10;
}
else {
    console.log(chalk.bold.red("\n\nWrong Answer\n\n"));
}
let questions_8 = await inquirer.prompt([
    {
        name: "questions8",
        type: "list",
        message: chalk.bold.bgBlackBright("\tQ-8.True or False: TypeScript will always correctly infer the type of an array."),
        choices: ["True", "False"],
    },
]);
if (questions_8.questions8 === "False") {
    console.log(chalk.bold.green("\nCorrect! Answer\n"));
    score += 10;
}
else {
    console.log(chalk.bold.red("\n\nWrong Answer\n\n"));
}
let questions_9 = await inquirer.prompt([
    {
        name: "questions9",
        type: "list",
        message: chalk.bold.bgBlackBright("\tQ-9.What is the type of the parameter: `function ex(param1?: string){}`?"),
        choices: ["unknown ", "string | undefined", "string | null", "string"],
    },
]);
if (questions_9.questions9 === "string | undefined") {
    console.log(chalk.bold.green("\nCorrect! Answer\n"));
    score += 10;
}
else {
    console.log(chalk.bold.red("\n\nWrong Answer\n\n"));
}
let questions_10 = await inquirer.prompt([
    {
        name: "questions10",
        type: "list",
        message: chalk.bold.bgBlackBright("\tQ-10.which typeScript is used to represent a collection of values of the same type?"),
        choices: ["array", "collection", "list", "set"],
    },
]);
if (questions_10.questions10 === "array") {
    console.log(chalk.bold.green("\nCorrect! Answer\n"));
    score += 10;
}
else {
    console.log(chalk.bold.red("\n\nWrong Answer\n\n"));
}
console.log(chalk.bold.greenBright("Result of the quiz:"), `${chalk.cyanBright.underline(score)}`, "/", chalk.bold.redBright.underline("100"));
