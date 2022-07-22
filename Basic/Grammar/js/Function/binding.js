// call , apply , bind : 함수 호출 방식과 상관 없이 this를 지정할 수 있음 , 함수 선언시 사용하는 this 의 주인을 지정

// 1. call : 모든 함수에서 사용 가능 , this를 특정값으로 지정 가능
// 매개변수를 하나씩 직접 받는다
const mike = {
    name : "Mike",
    age : 24
}

const tom = {
    name : "Tom",
}

const printName = function showThisName(){
    console.log(this.name , this.age)
}

printName()
printName.call(mike)

function updateUser(birthDay , occupation){
    this.birthDay = birthDay
    this.occupation = occupation
}
updateUser.call(mike , 1999 , "student")
console.log(mike)

// 2. apply : call과 달리 매개변수를 배열로 받는다
const ellie = {
    name : 'ellie',
    age : 34
}

updateUser.apply(ellie , [1980 , "teacher"])
console.log(ellie)

const arr = [2 , 4 , -1 , 10 , -8]
const minNum = Math.min(...arr)
console.log(minNum)

const maxNum = Math.max.apply(null , arr)
console.log(maxNum)

const maxNum2 = Math.max.call(null , ...arr)
console.log(maxNum2)

// 3. bind : 함수의 this 값을 영구적으로 변경

const updateTom = updateUser.bind(tom)
updateTom(1998 , "bodyBuilder")
console.log(tom)

// ex
const user = {
    name : "Mike",
    showName : function(){
        this.name = 'woong'
        console.log(`Hello , ${this.name}`)
    }
}
user.showName()

let fn = user.showName
fn.call(user)
fn.apply(user)

let boundFn = fn.bind(user)
boundFn()