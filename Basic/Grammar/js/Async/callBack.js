// 1. 동기 callback : 즉각 실행
function printImmediately (print){
    // 함수를 파라미터로 받아서 즉각 실행
    print();
}
// 2. 비동기 callBack
function printWithDelay(print , timeout){
    setTimeout(print , timeout)
}

// 1. 동기
// 호이스팅이 된 이후부터 코드를 차례대로 수행한다
// Hoisting : 어떤 스코프든 그 스코프 내에서 변수의 선언이 최상위 라인으로 올라가는 것 ex) var 선언 , function 표현식 
console.log("hi")
console.log("my")
console.log("10")

// 2. 비동기 : 언제 정의한 코드가 실행되는지 알수 없음, 순서대로 실행되지 않기 때문
// callBack 함수 : 함수를 특정 상황에서만 실행하는 것 , 나중에 다시 불러줘~
console.log("1")
setTimeout(() =>{
    console.log("2") // 1초뒤에 전달된 콜백 함수 (console.log("2")) 를 실행
} 
,1000)
// 콜백함수가 실행되는데 까지 걸리는 시간 1초를 기다리지 않고 바로 다음 코드인 3 , 4를 출력
console.log("3")
console.log("4")

printImmediately(() => console.log('hello'))
printWithDelay(() => console.log("my name is delay function") , 2000)

// callBack Hell

class UserStorage {
    loginUser(id , password , onSuccess , onError) {
        setTimeout(()=>{
            if(
                (id === "woong" && password === "1234")||
                (id === "choiy" && password === "2580" )
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found this user'))
            }
        }, 2000);
    }
    getRoles(user , onSuccess , onError){
        setTimeout(() => {
            if (user === "woong"){
                onSuccess({name : "woong" , role : "admin"})
            }else{
                onError(new Error('no access'))
            }
        }, 1000)
    }
}
const newUser = new UserStorage()
const id = prompt('enter your id')
const password = prompt('enter your password')

newUser.loginUser(
    id,
    password,
    user => {
        newUser.getRoles(
        user , 
        userWithRole => {
            alert(`Hello ${userWithRole.name} , you have a ${userWithRole.role} role`)
        },
        error => {
            console.log(error)
        }
    )},
    error => {console.log(error)}
)


