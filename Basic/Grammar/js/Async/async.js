// callBack -> promise -> async & await
// clear style of using promise with long chaining

// promise 3 state : pending(보류) , fullfilled , reject
// pending : resolve, rejcet 둘중 아무것도 호출 하지 않을 경우 현재 프로미스를 보류

// 서버에서 데이터를 가져와서 처리하는 시간이 오래 걸리는 경우에서 동기적으로 코드를 작성하면 처리가 종료되는 시점까지 다음 코드 진행을 못하기 떄문에 사용자는 빈 UI를 계속 보게되는 상황이 발생할 수 있다.
// 따라서 서버와의 통신 코드 작성은 비동기로 처리하는 것이 바람직하다

// 1. async
// using asyncd keword , in function code block , change to promise

function promiseUser(){
    return new Promise((resolve , reject) => {
        resolve('woong')
    })
}
const proUser = promiseUser()
console.log(proUser)
proUser
.then((name) => {
    console.log(name)
})

async function asyncUser(){
    return 'woong'
}
const asyUser = asyncUser()
console.log(asyUser)
asyUser
.then((name) => {
    console.log(name)
})

// 2. await
// only using in async function
function delay(ms){
    return new Promise((resolve , reject) => {
        setTimeout(() => setTimeout(resolve , ms))
    })
}

async function getBanana(){
    await delay(2000)
    return 'banana'
}
const banana = getBanana()
banana
.then((fruit) => console.log(fruit))

async function getApple() {
    await delay(1000)
    return 'apple'
}
const apple = getApple()
apple
.then((fruit) => console.log(fruit))

async function getFruits(){
    return getApple().then(async (apple) =>{
        return getBanana().then((banana) => `${apple} + ${banana}`)
    })
}

async function pickFruits(){
    // const apple = await getApple() // wait 1 second
    // const banana = await getBanana() // wait 1 second
    // await 병렬처리 : 각 await는 독립적으로 실행 되기때문에 서로 관련이 없음
    // 미리 프로미스를 받아놓고 한번에 처리
    try{
        const applePromise = getApple()
        const bananaPromise = getBanana()
        const apple = await applePromise
        const banana = await bananaPromise
        console.log(`${apple} + ${banana}`)
    }catch(error){
        console.log(error)
    }
    return `${apple} + ${banana}`
}

pickFruits()

// 3. useful Promise APIs
function pickALlFruits(){
    return Promise.all([getApple() , getBanana()])
    .then((fruits) => fruits.join(" + "))
}
pickALlFruits().then((value) => console.log(value))

function pfickOnlyOne(){
    return Promise.race([getApple() , getBanana()])
}
pfickOnlyOne().then((firstFruit) => console.log(firstFruit))


