// Array : 
// 비슷한 종류의 데이터를 한 공간에 묶어 정리하는 자료구조
// Array also reference type

// 1. Declaration

const arr1 = new Array()
const arr2 = [1,2,3]

// 2. index position

const fruits = ["apple","banana","mango"]

// a. for
for(let i = 0; i < fruits.length; i++)
    console.log(fruits[i]);

// b. for in , of
for(index in fruits)
    console.log(fruits[index])

for(let fruit of fruits)
    console.log(fruit)

// c. forEach
// * forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
fruits.forEach((fruis, index) => console.log(fruis , index))

// 3. Addtion , deletion , copy

// push : add item to the end
fruits.push("blueBerry" , "peach")
console.log(fruits)

// pop : remove item to the end
fruits.pop()
console.log(fruits)

// unshift : add item to the beggining
fruits.unshift("grapes")
console.log(fruits)

// shift : remove item to the beggining
fruits.shift()
fruits.shift()
console.log(fruits)

// splice : remove item by index position
fruits.push("lemon" , "pineApple" , "tomato")
console.log(fruits) // ['banana', 'mango', 'blueBerry', 'lemon', 'pineApple', 'tomato']
fruits.splice(3 , 1) // startIndex : 3 , deleteCount : 1 -> delete "lemon"
console.log(fruits)
fruits.splice(1 , 1 , "grape" , "choco")
console.log(fruits)

// combine two arrays
const fruits2 = ["pear","fig"]
const newArr = fruits2.concat(fruits)
console.log(newArr)

// 4. searching : indexOf
console.clear()
console.log(fruits)
console.log(fruits.indexOf("banana"))
console.log(fruits.indexOf("grape"))

console.log(fruits.indexOf("peach")) // array fruits doesn't have peach
console.log(fruits.includes("paach")) // false 

console.clear()

// lastIndexOf : same value , different index
fruits.push("grape")
console.log(fruits.indexOf("grape"))
console.log(fruits.lastIndexOf("grape"))

console.clear()

const lolCharacter = ["탐켄치" , "케이틀린" , "아리" , "나서스" , "다리우스"]
const poped = lolCharacter.pop()
console.log(poped)

const newCharacter = ["자크" , "쓰레쉬"]
const combineCharacter = lolCharacter.concat(newCharacter)
console.log(combineCharacter)

// join : combine origin array by "/"
const slashLol = lolCharacter.join("/")
console.log(slashLol)
// slice
lolCharacter.push("베인" , "이즈리얼" , "갈리오")
const subLol = lolCharacter.slice(2 , 5)
console.log(subLol)
// sort
const numArr = [12 , 8 , 25 , 1 , 6]
const sortNumArr = numArr.sort((a , b) => a - b)
console.log(sortNumArr)

lolCharacter.sort()
console.log(lolCharacter) // ㄱ,ㄴ,ㄷ,ㄹ...

// filter
const filterArr = numArr.filter((value , index , array) => {
    console.log(value)  
    console.log(index)
    console.log(array)

    return value >= 10
})

console.log(filterArr)

numArr.push(35 , 3 , 22)

const filterArr2 = numArr.filter((number) => number >= 15)
console.log(filterArr2)

const guys = [
    {
        name : "woong",
        salary : 500
    },
    {
        name : "choi",
        salary : 200
    },
    {
        name : "ellie",
        salary : 1000
    }
]

const richGuys = guys.filter(guy => guy.salary >= 500)
console.log(richGuys)

console.clear()

// some , every , reduce

// js에서 배열은 Data Type 이 달라도 연속되게 값들을 묶을 수 있다

const arr = ["woong" , 24 , "busan" , false]

// 배열의 경우 index 반환 typeof(index) : number
for(index in arr){
    console.log(`${index} : ${arr[index]}`)
}