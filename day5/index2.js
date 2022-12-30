import fs from 'fs'
import chalk from 'chalk';

const stringArray = fs.readFileSync('./input.txt')
// const stringArray = fs.readFileSync('./sample.txt')
    .toString()
    .split("\n");

let startingIndex
let backwardsColumns = []

// set up initial 2 dimensional array
for(let i = 0; i < stringArray.length; i += 1) {
    if (stringArray[i] === '' || /\d/.test(stringArray[i])) {
        startingIndex = i + 2 // instructions start here
        break
    }
    for (let j = 0; j < stringArray[i].length; j += 4) {
        if (backwardsColumns?.[j/4] === undefined){
            backwardsColumns[j/4] = []
        }
        if (stringArray[i].substring(j, j + 3).trim().length > 1) {
            backwardsColumns[j/4].push(stringArray[i].substring(j, j + 3).trim())
        }
    }
}
const columns = backwardsColumns.map((column) => column.reverse())
// execute instructions on that array
for(let i = startingIndex; i < stringArray.length; i += 1) {
    const [move, from, to] = stringArray[i].match(/\d+/g)
    columns[to - 1] = [...columns[to - 1], ...columns[from - 1].slice(0 - move)]
    columns[from - 1] = columns[from - 1].slice(0, 0 - move)
}

// resulting array
// console.log(JSON.stringify(columns, null, 2))

// final message
const message = columns.map((column) => column[column.length - 1]).join()
const finalMessage = message.replace(/\W/g, '')
console.log(chalk.greenBright(finalMessage))

