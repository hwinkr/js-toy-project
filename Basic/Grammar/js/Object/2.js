// 객체와 변경불가성

// js의 객체를 참조하는 다른 장소에서 프로퍼티들을 변경 하게되면 원래 객체의 프로퍼티에도 영향을 주게 됨
// 의도하지않고 객체타입을 참조한 변수의 값을 바꿔도 원래 객체타입의 프로퍼티도 함께 변경이 되기 때문에 프로그램에 문제 발생 가능성 증가

// js 의 원시타입은 변경 불가능한 값
// Boolean , null , undefined , Number , String , Symbol

// 메모리에 문자열 "hello" 생성 , 식별자(변수) str은 메모리에 생성된 문자열 "hello" 의 주소를 가르킴
let str = "hello" 
console.log(str)
// "hello" 가 "world" 로 변경 되는것이 아니라 다른 메모리 공간에 "world" 가 추가로 생성 , str이 가르키는 메모리 주소가 달라지는 것
str = "world" 
console.log(str)

const currentStr = " i am a human"
const newStr = currentStr.slice(6, 10) // 새로운 문자열 urrentStr.slice(6, 10) 을 생성후 반환
console.log(newStr)

// array : 객체 타입

let arr = []
console.log(arr.length)
// arrPointer 가 직접 원래의 배열 arr의 구성을 변경
let arrPointer = arr
arrPointer.push(3)
console.log(arr.length) 

let user = {
    name : "woong",
    city : "busan"
}
// 1. 원시타입을 참조 : 불변
// 새로운 메모리 공간에 "woong" 을 생성하고 그것을 myName1 이 가르킴

let myName1 = user.name
user.name = "hyun"
console.log(myName1) // woong

let myName2 = user.name 
myName2 = "hyun"
console.log(user.name) // woong

// 2. 객체타입을 참조 : 가변

let newUser = user
newUser.name = "choi"
console.log(user.name) // choi

// 객체의 가변성을 불변성으로
// 1. Object.assign
const boy = {
    name : "tmoBoy",
    age : 18,
    sayhi(otherName){
        print(`hi ${otherName} my name is ${this.name}`)
    }
}

const copyBoy = Object.assign({} , boy)
console.log(boy === copyBoy)
copyBoy.age = 20
console.log(boy.age) // 18

const o1 = {
    a : 1
}
const o2 = {
    b : 1
}
const o3 = {
    c : 1
}

// assign을 이용하여 객체를 합칠수 있다
const merge = Object.assign(o1 , o2 , o3)

console.log(merge)
merge.a = 10 
console.log(o1)
console.log(o1.a)
 
const user1 ={
    name : "Choi",
    address : {
        city : "Busan"
    }
}

const user2 = Object.assign({} , user1)

console.log(user1 === user2)
user2.name = "Kim"
console.log(user1.name) // "Choi"

// 객체 내부의 객체는 완전한 copy
console.log(user1.address === user2.address) // true

user2.address.city = "Seoul"
console.log(user1.address.city)

// 2. Object.freeze : freeze 또한 내부 객체는 변경가능
const food = {
    name : "apple",
    seson : "all season",
    country : {
        conName : "korea"
    }    
}

Object.freeze(food)
food.name = "banana"
console.log(food.name) // apple
console.log(Object.isFrozen(food)) // true
let newFood = food
newFood.seson = "summer"
console.log(food.seson) // all season

function deepFreeze(obj){
    const props = Object.getOwnPropertyNames(obj)

    props.forEach((name) => {
        const prop = obj[name]
        if(typeof prop === 'object' && prop !== null){
            deepFreeze(prop);
        }
    })
    return Object.freeze(obj)
}

const userInform = {
    name : "woong",
    age : 24,
    address : {
        city : "busan"
    }
}
deepFreeze(userInform)
userInform.address.city = "Seoul"
console.log(userInform.address.city)