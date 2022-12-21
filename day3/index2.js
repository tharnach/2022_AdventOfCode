import fs from 'fs'
import chalk from 'chalk';

const stringArray = fs.readFileSync('./input.txt')
// const stringArray = fs.readFileSync('./sample2.txt')
    .toString()
    .split("\n");

const getCaseValue = (letter) => {
    if (letter === letter.toUpperCase()) {
        return 38
    }
    return 96
}

let temp = [];
let values = [];
for(let i = 0; i < stringArray.length; i += 1) {
    if(i % 3 === 0 && i > 0) {
        // do calc
        const commonValue = new Set(
            [...new Set(temp[0].split(''))]
                .filter(x => new Set(temp[1].split('')).has(x) && new Set(temp[2].split('')).has(x)))
        const setIter = commonValue.values()
        const value = setIter.next().value
        // push common letter's priority value to total array
        values.push(value.charCodeAt(0) - getCaseValue(value))
        // clear temp array
        temp = []
    }
    temp.push(stringArray[i])
}

// console.log(chalk.magenta(`Values: ${values}`))
const result = values.reduce((acc, curr) => acc + curr, 0)
console.log(chalk.bgMagenta(`Result: ${result}`))
