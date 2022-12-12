import fs from 'fs'
import chalk from 'chalk';

const MoveMapper = {
    X: 'A',
    Y: 'B',
    Z: 'C'
}

const ValueMapper = {
    X: 1,
    Y: 2,
    Z: 3
}

const calcWinValue = (enemy, me) => {
    if(enemy === MoveMapper[me]) {
        return 3 + ValueMapper[me]
    }
    if((enemy === 'A' && MoveMapper[me] === 'B') || (enemy === 'B' && MoveMapper[me] === 'C') || (enemy === 'C' && MoveMapper[me] === 'A')) {
        return 6 + ValueMapper[me]
    }
    return 0 + ValueMapper[me]
};

const stringArray = fs.readFileSync('./input.txt')
// const stringArray = fs.readFileSync('./sample.txt')
    .toString()
    .split("\n");

const rounds = stringArray
    .reduce((acc, curr, index) => {
        console.log(`Round ${index + 1} - ${acc + calcWinValue(curr[0], curr[2])}`)
        return acc + calcWinValue(curr[0], curr[2])
    }, 0)

console.log(chalk.redBright('Final Score: ', rounds))