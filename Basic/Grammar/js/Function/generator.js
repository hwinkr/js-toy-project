// Generator : 함수의 실행을 멈췄다가 다시 진행하는 기능
// next() , return() , throw()
// iterable
// -> Symbol.iterator 메서드를 가지고 있다 , iterator 을 반환한다
// iterator 
// -> next() 를 가지고 value , done 속성을 가진 객체를 반환한다. 작업이 끝나면 done : true

// generator , array , string 모두 iterable(반복가능) 하다.

// 1. generator
function *fn(){
    try{
        console.log(1)
        yield 1;
        console.log(2)
        yield 2;
        console.log(3)
        console.log(4)
        yield 3;
        return 'finish'
    }catch(e){
        console.log(e)
    }
}
const a = fn()
console.log(a)
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
// 2. array
const arr = [1, 2, 3, 4, 5]

const item = arr[Symbol.iterator]();
console.log(item.next())
console.log(item.next())
console.log(item.next())
console.log(a.return("END!"))

for(value of arr){
    console.log(value)
}
// 3. string
const str = 'hello'
const strItem = str[Symbol.iterator]();
console.log(strItem.next())
console.log(strItem.next())

for(char of str){
    console.log(char)
}

// send value to next()

function * newFn(){
    const num1 = yield "첫번째 값을 입력 해주세요";
    console.log(num1)

    const num2 = yield "두번째 값을 입력 해주세요";
    console.log(num2)

    return num1 + num2
}

const test = newFn()

function * testFn(){
    let num = 0;
    while(1){
        yield num ++;
    }
}

const newTest = testFn()

function *gen1(){
    yield 'w'
    yield 'o'
    yield 'r'
    yield 'l'
    yield 'd'
}

function *gen2(){
    yield "Hello, ";
    yield * gen1();
    yield "!"
}

const gen = gen2()

// 필요한 순간까지 함수의 진행을 하다가 중간에 멈추고 다른 작업을 수행하고 다시 돌아와서 작업을 재게 할때 용이
