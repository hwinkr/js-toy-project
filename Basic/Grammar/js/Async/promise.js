// promise : 비동기를 간편하게 처리할수 있게 해주는 object 

// promise object : js 안에 내장되어있는 object


// * state : pending(진행) -> fullfilled(완료) or rejected(실패)
// * producer vs consumer

// 1. producer
// when new promise is created, the executor runs automatically

const promise = new Promise((resolve , reject) => {
    // connecting network , read file -> heavy work
    // 동기적으로 처리하게 되면 무거운 작업이 진행되는 동안 다른 작업이 수행 될 수 없어 , 시간 지연 발생
    console.log("doing something....")
    setTimeout(() => {
        resolve('woong')
        // reject(new Error('no network'))
    }, 2000)
});

// 2. consumer : then , catch , finally
// then : resolve -> return value or new promise 
// catch : reject -> return value or new promise 
promise
    // Successful case
.then((value) => {
    console.log(value)
    })
    // failed case
    .catch((error) => {
        console.log(error)
    })
    .finally(() =>{
        console.log('finally')
    })

// 3. promise chaining

const fetchNumber = new Promise((resolve , reject) =>{
    setTimeout(() => {
        resolve(1)
    }, 1000)
})

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then((num) => {
    return new Promise((resolve, reject) => {
        resolve(num -1)
    }, 1000)
})
.then((num) => {
    console.log(num)
})
.catch((error) => {
    console.log(error)
})
.finally(
    console.log('finally')
)

// 4. Error handling

const getHen = () => 
    new Promise ((resolve , reject) => {
        setTimeout(() => resolve('female chicken'), 1000)
    })
const getEgg = (hen) => 
    new Promise ((resolve , reject) => {
        setTimeout(() => resolve(`${hen} => egg`), 1000)
    })    
const cook = (egg) =>
    new Promise ((resolve , reject) => {
        setTimeout(() => resolve(`${egg} => fried`), 1000)
    })

getHen()
.then((hen) => getEgg(hen))
.catch((error) => {
    return 'bread' 
})
.then((egg) => cook(egg))
.then((meal) => console.log(meal))
.catch((error) => console.log(error))

// callBack Hell Esape
// in class , no using arrow function
class UserStorage {
    loginUser(id , password){
        return new Promise((resolve , reject) => {
            setTimeout(() => {
                if(
                    (id === "woong" && password === "1234")||
                    (id === "choiy" && password === "2580" )
                ){
                    resolve(id)   
                }else{
                    reject(new Error ('user not found'))
                }
            }, 1000)
        }) 
    }
    getRoles(user){
        return new Promise((resolve , reject) => {
            setTimeout(() => {
                if(user === 'woong')
                    resolve({name : 'woong' , role : 'admin'})
                else
                    reject(new Error('you do not have accession'))
            })
        })}
}
const newUser = new UserStorage()
const id = prompt('enter your id')
const password = prompt('enter your password')

// 1. using then , catch
newUser
.loginUser(id , password)
.then((user) => newUser.getRoles(user))
.then((user) => {
    alert(`Hello ${user.name} your role is ${user.role}`)
}) 
.catch((error) => {
    console.log(error)
})
// 2. using async function
async function checkUser(){
    try{
        const userId = await newUser.loginUser(id , password)
        const thisUser = await newUser.getRoles(userId)
        console.log(`${thisUser.name} + ${thisUser.role}`)
    }catch(error){
        console.log(error)
    }
}
checkUser()