// Number
// type : primitive type

// all js number type data => real number

// 1. declaration

const num1 = 12
console.log(num1)
console.log(typeof(num1))

const devideNum = 3 / 2;
console.log(devideNum) // 1.5

const infinityNum = 10 / 0
console.log(infinityNum) // infinity

const multyStr = 1 * "str"
console.log(multyStr) // NaN

// 2. type change
// 2-1. automatic change

// a. + 를 제외한 산술 연산자는 모두 숫자에 적용

const strToNum1 = '10' / '5'
console.log(strToNum1)
console.log(typeof(strToNum1)) // number

const strToNum2 = '10' * 5
console.log(strToNum2)
console.log(typeof(strToNum2))

// b. +
// + 단항 연산자는 피연산자가 숫자타입이 아니면 값을 숫자타입으로 변환

console.clear()

const testNum1 = + "0"
console.log(testNum1)
console.log(typeof(testNum1))

const testNum2 = + false
console.log(testNum2) // 0 
console.log(typeof(testNum2))

// c. number generator function 

const numStr = "1234"
console.log(Number(numStr))
console.log(typeof(Number(numStr))) // number
console.log(parseInt(numStr))
console.log(typeof(parseInt(numStr))) // number

const mathScore = prompt("수학 점수 ?")
const engScore = prompt("영어 점수 ?")
const result = (mathScore + engScore) /2
console.log(result)

const mathToNum = parseInt(mathScore)
const engToNum = parseInt(engScore)
const resultToNum = (mathToNum + engToNum) / 2
console.log(resultToNum)



