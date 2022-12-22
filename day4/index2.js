import fs from 'fs'
import chalk from 'chalk';

const stringArray = fs.readFileSync('./input.txt')
// const stringArray = fs.readFileSync('./sample.txt')
    .toString()
    .split("\n");


const noOverlap = stringArray.reduce((acc, curr) => {
    const [s1, s2] = curr.split(',')
    const [s1s, s1e] = s1.split('-')
    const [s2s, s2e] = s2.split('-')
    const s1Start = Number(s1s)
    const s1End = Number(s1e)
    const s2Start = Number(s2s)
    const s2End = Number(s2e)
    if ((s1Start > s2End) || (s2Start > s1End)) {
        return acc += 1
    }
    return acc
}, 0)

const totalOverlap = stringArray.length - noOverlap

console.log(chalk.redBright('totalOverlap: ', totalOverlap))