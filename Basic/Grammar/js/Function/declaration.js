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
console.log(multilpy(2, 4)) // error , 참조받은 변수를 사용해야함

//3. 생성자 함수 이용하기
new Function (arg1 , arg2 , argN , functionBody)
const squareConstructor = new Function("number", "return number * number")
console.log(squareConstructor(4))

// 일급 객체 : 기본적 조작을 제한없이 이용
// js 에서 함수는 객체이다
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




