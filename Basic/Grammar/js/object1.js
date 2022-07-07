// object : key + value

//일반적인 생성

let objExample = {
    name : "hyunwoong",
    age : 24,
    driverLicense : false,
    sayHi1(){
        console.log(objExample.name) // 객체를 null 로 변경하면 해당 객체가 사라지기 때문에 TyperError
        console.log(this.name)
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

objExample.major = "computer"
console.log(objExample.major) // computer

delete objExample.age
console.log("age" in objExample) // false

// 객체의 경우 키 반환 typeof(key) : string
for(key in objExample){
    console.log(key)
    console.log(objExample[key]) // value 출력
}

// js에서 배열은 Data Type 이 달라도 연속되게 값들을 묶을 수 있다
// 배별은 순서를 보장 , 객체는 순서를 보장하지 않는 Data type
const arr = ["woong" , 24 , "busan" , false]

// 배열의 경우 index 반환 typeof(index) : number
for(index in arr){
    console.log(`${index} : ${arr[index]}`)
}

// 객체는 원시타입이 아닌 참조타입 이므로 연산이 값을 복사해서 전달하는 방식이 아닌 참조값을 할당
// pass-by-reference
const person = objExample;
person.sayHi1();
person.name = "choihyun"
console.log(person.name , objExample.name) //choihyun choihyun
console.log(person === objExample) // true
objExample = null
person.sayHi1()

// pass-by-value
// 원시타입의 경우 값이 복사되어 변수에 저장
let a = 1
let b = a // 값만 복사 후 전달 메모리 주소를 모름

console.log(a , b) // 1 1
console.log(a === b) // true

a = 10
console.log(a, b) // 
console.log(a === b) // false

// Object 생성자 함수 이용하기 : 빈 객체인 Object 를 가져와서 내용 채우기 

let explain = new Object();

explain.name = "mike"
explain.gender = "male"
explain.sayHello = function () {
    console.log(`hi! my name is ${this.name}`)
}

console.log(typeof(explain))
console.log(explain.name)
explain.sayHello()

//객체 생성자 함수 이용하기 : 일반적으로 대문자로 시작

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











