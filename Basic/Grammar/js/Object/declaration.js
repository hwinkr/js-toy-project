// object : key + value
// type : object , 연속성을 보장하지 않는 dataStructure
// js object는 원시타입이 아닌 객체타입(참조 타입)
// 하나의 객체가 여러개의 변수에 담길때 그 모든 변수는 같은 메모리 주소를 참조하게 된다
// 하나의 변수에서 객체의 값을 변경하면 기존의 객체값도 같이 변경되어 프로그램에 문제를 발생 시킬수 있다.
// 

// 1. declaration

// 1-1. directly

let objExample = {
    name : "hyunwoong",
    age : 24,
    driverLicense : false,
    sayHi1(){
        // console.log(objExample.name) // 객체를 null 로 변경하면 해당 객체가 사라지기 때문에 TyperError
        console.log(this.namee) // undefined
    },
    sayHi2(personName){
        console.log(`안녕 ${personName} 나는 ${this.name} 이야`)
    },
    //js 일반 함수에서 this는 해당 객체를 가르킴
    sayThis1() {
        console.log(this)
    },
    //js 화살표 함수에서 this는 전역객체인 window를 가르킴 왠만해서 사용하지 않는것이 좋다
    sayThis2 : () => {
        console.log(this)
    }
}

console.log(objExample.age) // 24
console.log(objExample["age"]) // key를 문자형으로 사용 가능

objExample.sayHi2("choi")
// add value
objExample.major = "computer"
console.log(objExample.major) // computer
// delete value
delete objExample.age
console.log("age" in objExample) // false

// 객체의 경우 키 반환 typeof(key) : string
// for(key in objExample){
//     console.log(`${key} : ${objExample[key]}`)
// }

// pass-by-reference
const person = objExample;
person.sayHi1();
person.name = "choihyun"
console.log(person.name , objExample.name) //choihyun choihyun
console.log(person === objExample) // true
objExample = null
console.log(objExample)
console.log(person.sayHi1())

// pass-by-value
// 원시타입의 경우 값이 복사되어 변수에 저장
let a = 1
let b = a // 값만 복사 후 전달 메모리 주소를 모름

console.log(a , b) // 1 1
console.log(a === b) // true

a = 10
console.log(a, b) // 
console.log(a === b) // false

// 1-2 . using generator Object

let explain = new Object();

explain.name = "mike"
explain.gender = "male"
explain.sayHello = function () {
    console.log(`hi! my name is ${this.name}`)
}

console.log(typeof(explain))
console.log(explain.name)
explain.sayHello()

// 1-3. using generator function

function Person(name , gender, age){
    return {
        name ,
        gender,
        age,
        hobby : "coding",
        sayHi(){
            console.log(`hi ${this.name}`)
        }
    }
}

const person1 = Person("woong" , "Male" , 24);
console.log(person1.name) // woong

const person2 = new Person("hyun" , "FeMale" , 26)
console.log(person2.name) // hyun












