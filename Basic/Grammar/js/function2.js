// function 매개변수 전달

// call-by-value : 값만 복사해서 전달 , 메모리 주소를 알지 못함
function add(num){
    num += 10
    return num
}

let x = 10;
console.log(add(x))
console.log(x)

// call-by-reference : 참조값 전달 , 메모리 주소 공유

function modify (num , obj){
    num += 10
    obj.name = "choi"
    obj.age = 18
    return [num , obj]
}

let y = 10;
let user = {
    name : "woong",
    age : 24
}
console.log(modify(y , user))
console.log(y)
console.log(user.age)
console.log(user.name)

// 함수의 프로퍼티 : js 함수는 그 함수만의 특별한 프로퍼티를 가짐

// 1. arguments 프로퍼티

function sum (){
    let res = 0;
    for(let i=0; i<arguments.length; i++){
        res += arguments[i]
    }
    return res
}
console.log(sum(1, 2, 3))
console.dir(sum)

// 2. caller : 자신을 호출한 함수를 출력

function ex1(func){
    let res = func()
    return res
}

function ex1_1(){
    return "caller :" + ex1_1.caller
}

console.log(ex1(ex1_1))

// 3. length : 매개변수의 갯수 출력
// 4. name : 함수명

//내일은 콜백함수와 js의 비동기