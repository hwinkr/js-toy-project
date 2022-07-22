// 구조분해 할당

//1 . array

const [x , y] = [1 , 2]
console.log(x) // 1
const numberArr = [1 , 2]
console.log(numberArr[0])

const names = ["Mike" , "Tom " , "Woong"]

const name1 = names[0]
const name2 = names[1]
const name3 = names[2]
console.log(name1) // Mike

const [user1, user2, user3] = names
console.log(user1) // Mike

const strUser = 'Ellie-Toreu-Eun'
const [user4, user5, user6] = strUser.split('-')
console.log(user4)

const [a , b , c] = [1 , 2]
console.log(a)
console.log(c)
const [f = 1 , g = 5] = [3]
console.log(f) // 3
console.log(g) // 5

const [boy1, ,boy2] = ["Tommy" , "Swan" , "Choco" , "BBoo"]
console.log(boy2) // Choco , ignore Swan

// * change value

var p = 1;
var q = 3;

[p , q] = [q , p]

console.log(p)
console.log(q)

// 2. object

const user = {
    userName : 'woong',
    userAge : 30
}
// 순서를 보장하지 않는 자료구조 , 즉 프로퍼티의 순서 상관없이 같은 이름의 value 를 출력
let {userAge , userName , gender = "female"} = user
console.log(userAge)
console.log(gender) // female
// change props name
let {userAge : age , userName : name} = user
console.log(age)
console.log(name)

// 인수 전달 
// 1. argument parameters
// 함수로 넘어온 모든 인수에 접근 , 함수 내에서만 사용 가능한 지역변수
// length, index API 접근 가능
// Array 형태의 객체 , 배열 내장 메서드 없음
function printHello(name){
    console.log(arguments.length)
    console.log(arguments[0])
    console.log(arguments[1])
}
printHello("Tom" , "Woong")
// 2. rest parameters
// 전달하는 인수의 갯수가 함수를 호출하는 경우마다 다르고 그 갯수를 정확히 파악하지 못하는 경우
// rest 는 항상 제일 마지막에 ,, 어느 부분이 rest parameters 의 끝인지 판단 할수 없기떄문
function printNice(...name){
    for(index in name){
        console.log(`${name[index]} so nice!`)
    }
}
printNice("Tom" , "Woong" , "Peak")

let sum = 0;
function addAll(...numbers){
    for(index in numbers)
        sum += numbers[index]
    numbers.forEach((number) => sum += number)
    return sum;
}
console.log(addAll(1 , 2 , 3 , 4 , 5))

function userObj(name , age , ...skills){
    return {
        name , 
        age, 
        skills
    }
}
const myUser = userObj("woong" , 24 , "health" , "benchPress" , "shoulderPress")
myUser.skills.forEach((skill) => {
    console.log(`${skill} wow `)
})

// 전개 구문
// 1. array
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const newArr = [...arr1 , ...arr2] // [1, 2, 3, 4, 5, 6]
const newArr2 = [0 , ...arr1, ...arr2 , 7 , 8]
console.log(newArr2)
console.log(newArr2.splice(1, 3))
console.log(newArr2)

let numArr1 = [1, 2, 3]
let numArr2 = [4, 5, 6]
numArr2.reverse().forEach((num) =>{
    numArr1.unshift(num)
})
numArr1 = [...numArr2 , ...numArr1]
console.log(numArr1)
// 2. object
const newUser ={
    name : "woong",
    age : 24
}
const newUser2 = {
    addr : 'busan',
    hobby : 'footBall'
}
const testNewUser = {...newUser , ...newUser2}
console.log(testNewUser)
testNewUser.age = 30
console.log(newUser.age) // 24 , 복제

let testUser = {name : 'woong'}
let userInfo = {age : 30}
let fe = ["react" , "js"]
let lng = ["korean" , "english"]

testUser = Object.assign({} , testUser , userInfo , {
    skills : []
},
)
fe.forEach((item) => {
    testUser.skills.push(item)
})
lng.forEach((item) => {
    testUser.skills.push(item)
})
console.log(testUser)

testUser = {
    ...testUser,
    ...userInfo,
    skills : [
        ...fe,
        ...lng
    ]
}
console.log(testUser)



