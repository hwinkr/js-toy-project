// 클로저 : 함수와 렉시컬 환경의 조합
// 자신이 선언되었을 당시의 환경을 기억
// 자신이 선언된 환경 외부에서 다시 호출이 되어도 초기 환경에 접근 가능

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
const myFunction = outerFunc() // outerFunc() 는 스택에서 제거
myFunction()


//  application of closer

// 1. maintain state

const box = document.querySelector('.box')
const toggleBtn = document.querySelector('.toggle')

const toggle = function(){
    let isShow = false

    return function(){
        box.style.display = isShow ? "block" : "none"
        isShow = !isShow
    }
}
toggleBtn.onclick = toggle()

// closer function
// toggle 함수가 실행 되었을때 결과값으로 반환 하는 함수는 반횐되는 함수가 생성 되었을 당시의 외부 함수 lexical 환경인 변수 isShow를 기억하는 함수다

// 2. decreasrion of using global variable frequency

const increaseBtn = document.querySelector('.addBtn')
const count = document.querySelector('.number')

// 전역 변수로 상태를 관리 할 경우 모든 스코프에서 이 변수에 접근이 가능하여 , 초기 상태가 변경될 가능성이 있다. 
let counter = 10; // 초기 상태 10 , 클릭시 11
function increase(){
    return ++counter;
}
increaseBtn.addEventListener('click' , ()=>{
    count.innerHTML = increase()
})
// 클로저 함수를 사용 , newIncrease가 반환 하는 함수는 이 함수가 생성될 당시의 let counter = 0 상태를 기억하고 있다. 추가로 외부에서 이 변수에 접근할수 없으므로 안전하다.
function newIncrease(){
    let counter = 0;
    return function(){
        return ++counter;
    }
}
const increaser = newIncrease()
increaseBtn.addEventListener('click' , ()=>{
    count.innerHTML = increaser()
})

