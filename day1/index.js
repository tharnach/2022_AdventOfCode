import fs from 'fs'
import chalk from 'chalk';

const stringArray = fs.readFileSync('./input.txt')
    .toString()
    .split("\n\n");

const groupTotals = stringArray
    .map((group) => group
        .split('\n')
        .reduce((acc, curr) => acc + Number(curr), 0))
    .sort()

console.log(chalk.greenBright.bold(groupTotals[groupTotals.length - 1]))