// // 호이스팅 : 스코프 내부 어디서든 변수 선언이 최상위에서 선언된 것 처럼 동작
// // 변수를 사용하기 위해서 초기화가 진행 되어야함 선언 -> 초기화 -> 할당

// // 1. var , let , const

// // a. var : 변수 선언과 동시에 초기화 진행

// console.log(a) // undefined
// var a = 10;
// console.log(a) // 10

// // b. let : 변수 선언과 초기화 따로 진행

// console.log(b) // Reference Error 
// let b; 
// console.log(b) // undefined
// b = 10;
// console.log(b) // 10

// // c. const : 사용하기 위해서 선언 , 초기화 , 할당이 동시에 진행 되어야함

// console.log(c) // error
// const c;
// console.log(c) // error
// c = 10
// console.log(c)

// const d = 10
// console.log()

// // 2. function

// // a : expression of function
// let sum = 0;

// console.log(addNumber(10, 2, 3, 4, 5))
// function addNumber (...numbers){
//     numbers.forEach((number) => sum += number)
//     return sum;
// }
// sum = 0;

// // b : declaration of function

// // console.log(myFunction(10, 2, 3, 4, 5)) // typeError
// var myFunction = function(...numbers){
//     numbers.forEach((number) => sum += number)
//     return sum
// }
// console.log(myFunction(10, 2, 3, 4, 5))


// 클로저 : 함수와 렉시컬 환경의 조합

// ex 1
// can't use let one , can use addOne
let one;
// one = undefined , can use addOne
one = 1;
// one = 1 , can use addOne

// 함수의 lexical 환경 : 넘겨받은 매개변수 , 지역변수
// 함수에 사용된 lexical 을 찾을때 함수 내부 -> 외부 -> 전역 lexical 순으로 찾음
function addOne(num){
    console.log(one + num)
}
// 함수가 호출되는 동안 함수에서 만들어진 내부 lexical 환경 , 외부에서 받은 외부 lexical 환경이 만들어짐
addOne(5) 

// ex 2
// 함수가 생성될 당시 외부 변수를 기억 하고 함수가 생성된 이후에도 계속 접근이 가능
function makeAdder(x){
    return function(y){
        return x + y;
    }
}

const add3 = makeAdder(3)
// const numAdder = function(y) {return 3 + y}
console.log(add3(2)) // 5
console.log(add3(5)) // 8

const add10 = makeAdder(10)
console.log(add10(5)) // 15
console.log(add3(1)) // 4

let num = 0;
function addNumber(){
    return function(){
        return num ++;
    }
}

const addDevice = addNumber()
console.log(addDevice())
console.log(addDevice())
console.log(addDevice())

function outerFunc(){
    let x = 10
    return innerFunc = function(){
        console.log(x)
    }
    
}
// closer : 자신이 생성되었을때의 환경을 기억
// 자신이 선언 됬을때의 환경 밖에서 호출이 되어도 초기 환경에 접근할수 있음을 의미
const myFunction = outerFunc() // outerFunc() 는 스택에서 아제 제거
myFunction() // 선언 환경 외부에서 함수를 호출 , 스택에서 제거된 outerFunc() 의 lexical 환경의 변수 x에 접근 가능

