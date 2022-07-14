// 1. computed property : 생성된 변수를 객체의 속성값으로 넣을 수 있다

const a = 'age'
const user = {
    name : 'woong',
    [a] : 24
}
console.log(user.age)
console.log(user["age"])

function makesObj(key , val){
    return{
        [key] : val
    }
}

const useObjFunction = makesObj("name" , "woong")
console.log(useObjFunction.name)

// 2. js Object APIs 


// 2.1 assign : 복제
// 객체는 참조타입이기 떄문에 따로 api를 사용하지 않으면 변수의 갯수와 상관없이 모두 같은 객체를 가르킴
const originUser ={
    name : "color",
    favSeason : "winter",
    [a] : 24
}
//Object.assign({고정값을 주거나 합칠 객체} , 넣을 객체)
const cloneUser = Object.assign({} , originUser)

cloneUser.favSeason = "summer"
console.log(cloneUser.favSeason) // summer
console.log(originUser.favSeason) // winter

const addPropUser = Object.assign({gender : "male"} , originUser)
console.log(addPropUser.gender) // male

const user_name ={
    name : 'woong'
}
const user_age ={
    age : 24
}
const user_gender ={
    gender : "female"
}

const mergeUser = Object.assign(user_name , user_age , user_gender)
console.log(mergeUser)

// 2.2 keys , values , entries 
const fruits = {
    name : 'waterMelon',
    season : 'summber',
    feature : 'sweety'
}

console.log(Object.keys(fruits))
console.log(Object.values(fruits))
for(key in fruits){
    console.log(`[${key}] : ${fruits[key]}`)
}
console.log(Object.entries(fruits))

// Symbol : 유일한 객체 식별자 생성
// 생성할때마다 다른 Symbol 값 생성
// why use ? -> 사용자가 확인할수 없게 해야하는 정보가 존재 하는 경우가 있는데 그 경우 , Symbol 을 사용

const unique_a = Symbol("alpa");
const unique_b = Symbol("alpa");

console.log(unique_a === unique_b)
console.log(unique_a == unique_b)

const id = Symbol('my uniqueId')

const muscleUser ={
    name : 'woong',
    age : 24,
    [id] : function(){
        console.log("hi muscle")
    }
}
console.log(muscleUser)
muscleUser[id]()
// symbol 을 통해 생성한 속성은 key ,value API를 사용해서 확인 할 수 없다
console.log(Object.keys(muscleUser))
console.log(Object.values(muscleUser))

const thinUser ={   
    name : 'woong',
    age : 24,
}

const id2 = Symbol('my uniqueId')
thinUser[id2] = 'thin'

console.log(Object.keys(thinUser))

// Symbol.for() : 전역 심볼 for 뒤의 값을 통해서 같은 값이면 공유

const for1 = Symbol.for("id")
const for2 = Symbol.for("id")
console.log(for1 === for2) // true
console.log(Symbol.keyFor(for1)) // id

console.clear()
// other developer
const makesUser = {
    name : 'tom',
    age : 18
}
// me
const hobby = Symbol('user hobby')
makesUser[hobby] = function(){
    console.log("hobby : soccer")
}
makesUser[hobby]()
// UI
for(let key in makesUser){
    console.log(`His ${key} is ${makesUser[key]}`)
}

const str = "woong"

console.log(str.lastIndexOf("2"))







