//  unll : null 의 값은 null 이 유일 , 의도적으로 변수가 선언만 되고 값이 할당 되지 않았다는 것을 명시 해야하는 경우 사용
let boy = "hiBoy"
boy = null
console.log(null)
console.log(boy === null) // true
// 함수가 호출 되었으나 유요하지 않는 값을 반환 할 경우 null 출력. 조건에 부합하는 HTML 요소를 검색 불가능
const element = document.querySelector(".className")
console.log(element)

//  undefined : undefined 의 값은 undefined 가 유일  
//선언은 되었지만 값을 할당하지 않은 변수. 값이 비어있는 상태로 두지 않고 js가 undefined 로 초기화
let question ;
console.log(question)

// js 단축 평가 : 참 / 거짓을 결정짓는 값을 변수에 저장한다

let catAndDog = "cat" && "dog"
console.log(catAndDog) // dog
catAndDog = "cat" || "dog"
console.log(catAndDog) // cat

const elem = null;
console.log(elem && elem.value) // elem 이 false 를 결정 , null 출력


function getStrLength (str) {
    str = str || ''
    return str.length
}
const str1 = "hello"
console.log(getStrLength(str1))

// 논리 연산자 : && || ! 

const gender = 'F'
const personName = 'jane'
const personIsAdult = true
// && 우선순위는 || 우선순위보다 높다
if (gender === 'M' && personName === 'jane' || personIsAdult){
    console.log("come here!")
}else {
    console.log("go back!")
}
if (gender === 'M' && (personName === 'mike' || personIsAdult)){
    console.log("come here!")
}else {
    console.log("go back !")
}
