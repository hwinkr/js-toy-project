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
// 4. name : 함수의 이름

// parameters ES6
// ! Early return 
// 1. default parameters : 함수 사용자가 함수 생성시 정의된 파라미터를 전달하지 않으면 defalut -> undefined
function printHello(message , from){
    if(from === undefined){
        from = 'unknown'
    }
    console.log(`${message} is from ${from}`)
}

printHello("nice to meet you")

// 2. rest parameters : parameter 를 하나의 배열로 전달받음
function printAll(...props){
    for(let i=0; i<props.length; i++){
        console.log(props[i])
    }
    for (const prop of props) 
        console.log(prop)
    props.map((prop) => console.log(prop))
    props.forEach((prop) => console.log(prop))
}

printAll("meat" , "chicken" , "apple")

// scope : 밖에서는 안을 볼수 없고 안에서는 밖을 볼 수 있다

let globalMessage = "global"

function printMessage(){
    let localMessage = "local"
    console.log(globalMessage)
    console.log(localMessage)
    function printAnother(){
        console.log(localMessage)
        let childMessage = "child"
    }
    // console.log(childMessage) -> error
}
printMessage()
// console.log(localMessage) -> error

// callBack function : 함수가 상황에 맞게 실행

function randomQuiz(answer , printYes , printNo){
    if(answer === 'love you')
        printYes()
    else  
        printNo()
}

const printYes = function(){
    console.log("yes!")
}
const printNo = function(){
    console.log("no!")
}

randomQuiz("wrond" , printYes , printNo)

// arrow Function : 간결한 표현을 지향

const arrowFunction = (message , from) => {
    console.log(`${message} from ${from}`)
}

arrowFunction("hi")

//IIFE 
 
