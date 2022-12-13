import fs from 'fs'
import chalk from 'chalk';

const stringArray = fs.readFileSync('./input.txt')
// const stringArray = fs.readFileSync('./sample.txt')
    .toString()
    .split("\n");

const getCaseValue = (letter) => {
    if (letter === letter.toUpperCase()) {
        return 38
    }
    return 96
}

const rucksacks = stringArray
    .reduce((acc, curr) => {
        var middle = Math.floor(curr.length / 2);
        var container1 = curr.substr(0, middle).split("");
        var container2 = curr.substr(middle).split("");
        const commonItem = container1.filter((c1) => container2.find((c2) => c2 === c1))
        if (!commonItem?.[0]) return acc
        const value = commonItem[0].charCodeAt(0) - getCaseValue(commonItem[0])
        return acc + value
    }, 0)

console.log(chalk.redBright('Sum of priorities: ', rucksacks))