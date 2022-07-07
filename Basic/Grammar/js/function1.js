// 1. 함수 선언문
function square (number) {
    return number * number
}
console.log(square(4))
// 2. 함수 표현식
const mulit = function multilpy(a , b){
    return a * b
}
console.log(mulit(2, 4))

// console.log(multilpy(2, 4)) // error , 참조받은 변수를 사용해야함
// 3. 생성자 함수 이용하기
// new Function (arg1 , arg2 , argN , functionBody)
const squareConstructor = new Function("number", "return number * number")
console.log(squareConstructor(4))

// 호이스팅 : 스코프 내부 어디서든 변수 선언이 최상위에서 선언된 것 처럼 동작
// 선언만 됐기 때문에 undefined로 초기화 되고 값 할당은 할당문에서 이루어짐

// 1. 함수 
// 함수 선언문 : 함수 호이스팅으로 동작 , 함수가 최상위에서 이미 선언된 것 처럼 동작
console.log(add(1 , 5)) //6 

function add (a, b){
    return a + b;
}
// 함수 표현식 : 변수 호이스팅으로 동작 , 선언만 되고 할당 X 함수를 정의 할수 없음
// var res ; 

var res = minus(5 - 2)

var minus = function(a , b){
    return a - b
}

// 2. 변수
// 선언은 호이스팅으로 동작 , 할당은 호이스팅을 하지 않음 따라서 undefined

console.log(myName1) // undefined 
var myName1 = "mike" // 할당부 
console.log(myName1) // "mike"

// let , const : temporal dead zone 에 영향을 받음 -> 값을 할당 하기 전에 사용 할 수 없다
// 코드를 예측하게 하고 잠재적 오류 줄임
console.log(myName2)
const myName2 = "tom"

// 호이스팅은 스코프 단위로 동작 함수 내에서 호이스팅 발생
let myAge = 20
function showMyAge (){
    console.log(myAge) // 값을 할당 받기전에 사용 할 수 없다
    let myAge = 30
}
console.log(showMyAge())

let age ;
console.log(age)
// 스코프
// var : 함수 스코프 함수 내에서만 지역변수로 작용
// let , const : 블록 스코프 함수 , if , while , switch 문 에서 지역변수로 작용
var weight1 = 30
if(weight1 >= 25){
    var txt1 = "비만"
}
console.log(txt1)

function showWeight(weight2){
    var txt2;
    if (weight2>=25){
        txt2 = "비만"
    }
}
console.log(txt2)

// 일급 객체 : 기본적 조작을 제한없이 이용
// js 에서 객체는 호출이 아닌 참조 , 함수는 참조가 아닌 호출 , 여러번 호출 가능
// 1. 함수 표현식에서 무명 리터럴 사용

var increase = function(num){
    return ++num
}
var decrease = function(num){
    return --num
}
// 2. 변수 , 자료구조에 저장 가능
var predicates = {increase , decrease}
// 3. 매개변수로 전달 가능
// 4. 반환값으로 사용 가능
function makeCounter(predicates){
    var num = 0;
    return function () {
        console.log(num)
        num = predicates(num)
        return num
    }
}

var increaser = makeCounter(predicates.increase)
console.log(increaser())
console.log(increaser())

var decreaser = makeCounter(predicates.decrease)
console.log(decreaser())
console.log(decreaser())




