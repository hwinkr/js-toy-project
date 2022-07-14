// String
// type : primitive 
// * 한번 선언한 후 변경이 불가능 , 값을 바꾼다면 메모리상 저장되어있는 변수의 값이 바뀐것이 아님
// * 실제로는 메모리상에 변경한 값이 추가로 생성되고 원래 변수(식별자)가 그것을 가르키는 것.

// ! newStr1 , newStr2 의 메모리 주소는 다르다
const newStr1 = 'woong'
const newStr2 = 'woong'
console.log(newStr1 === newStr2) // true

// 1. declaration

let myName = 'woong'
console.log(myName) // woong
myName = "ellie"
console.log(myName) // ellie

// 2. type Change
// 2-1. automatic  change

const x = 10
const myString = x + ''
console.log(myString) // 10
console.log(typeof(myString)) // string
console.log(typeof(x)) // number

const boolToStr = true + '' // 'true' + ''
console.log(boolToStr)
console.log(typeof(boolToStr)) // string

// 2-2. directly change

const a = 10
const b = String(a)
console.log(typeof(b)) // string

const answer = true
const answerToStr = String(true)
console.log(typeof(answerToStr))

const num1 = 12
const num2 = 24
console.log(num1 + num2) // 36
console.log(String(num1) + String(num2)) // 1224

const user = {
    name : 'woong',
    age : 24,
    height : 170
}
const ageToStr = user.age.toString()
console.log(typeof(ageToStr))

// 3. string is array

const myStr ="hi my name is woong"
console.log(myStr.length) // 19

console.log(myStr[9])
myStr[9] = "i"
console.log(myStr[9]) // not changed

console.log(myStr.toUpperCase())
console.log(myStr.toLowerCase())

console.log(myStr.indexOf('name')) // start index of finding string
console.log(myStr.indexOf('boy')) // there isn't finding str , return -1

if(myStr.indexOf('boy') != -1){
    console.log('boy 가 포함된 문장입니다.')
}else{
    console.log('boy가 포함된 문장이 아닙니다')
}

const testStr1 = "choiHyunWoong"

console.log(testStr1.slice(2)) // index 2 to end
console.log(testStr1.slice(2,5))
console.log(testStr1.slice(2,-2))
console.log(testStr1.substring(2,5))

const testStr2 = '    a        bdce     '
console.log(testStr2.trim())
console.log(testStr2.repeat(3))

const str1 = 'abc'
const str2 = 'cde'
const str3 = str1.concat(str2)
console.log(str3)

let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열"
]

let newList = [];

for(let i = 0; i < list.length; i++){
    newList.push(
        list[i].slice(4)
    )
}

console.log(newList)
