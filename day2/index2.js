import fs from 'fs'
import chalk from 'chalk';

// A: Rock
// B: Paper
// C: Scissors

const dataMapper = {
    A: { // opponent guess
        X: 'C', // my guess to lose
        Y: 'A', // my guess to tie
        Z: 'B', // my guess to win
    },
    B: { // opponent guess
        X: 'A', // my guess to lose
        Y: 'B', // my guess to tie
        Z: 'C', // my guess to win
    },
    C: { // opponent guess
        X: 'B', // my guess to lose
        Y: 'C', // my guess to tie
        Z: 'A', // my guess to win
    }
}

const ResultValueMapper = {
    X: 0,
    Y: 3,
    Z: 6
}

const ValueMapper = {
    A: 1,
    B: 2,
    C: 3
}

const calcValue = (enemy, result) => {
    return ResultValueMapper[result] + ValueMapper[dataMapper[enemy][result]]
};

const stringArray = fs.readFileSync('./input.txt')
// const stringArray = fs.readFileSync('./sample.txt')
    .toString()
    .split("\n");

const rounds = stringArray
    .reduce((acc, curr) => acc + calcValue(curr[0], curr[2]), 0)

console.log(chalk.redBright('Final Score: ', rounds))