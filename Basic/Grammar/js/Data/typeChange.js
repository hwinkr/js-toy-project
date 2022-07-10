// alert : 사용자에게 알림 기능 제공 
// prompt : 사용자에게 메세지를 보여주고 값을 입력할 수 있는 필드 제공
const name = prompt("이름을 입력 하세요." , "2022 07-04")
alert(`환영합니다 ${name} 님`)

// confirm : 사용자의 행동을 한번 더 확인 하기 위해 사용 , 의사 여부 확인
const isAdult = confirm("당신은 성인이 확실 합니까?")
console.log(isAdult);
// if(isAdult) ~

const mathScore = Number(prompt("수학 점수 ?"))
const engScore = Number(prompt("영어 점수 ?"))
// '100' + '70' = 10070 / 2 = 5035
const result = (mathScore + engScore) / 2;
console.log(result);

// 형변환 
 
// 1. 자동 형변환 / 암묵적 타입 변환 : js 엔진이 문맥을 바탕으로 표현식을 평가

// 1-1 문자형 타입으로 변환
const toString1 = 1 + "10"
console.log(toString1) 
console.log(typeof(toString1)) //string

let x = 10
let toString2 = x + '' // '10' + '' 
console.log(typeof toString2 , toString2) // 10
console.log(typeof(x.toString())) // string

let booleanToStr = true + '' // 'true' + ''
console.log(booleanToStr)
console.log(typeof(booleanToStr)) // string

// 1-2 숫자형 타입으로 변환

// 산술 연산자는 숫자에 적용 

const toNumber1 = "6" / "2" 
console.log(toNumber1) // 3
console.log(typeof(toNumber1)) // number 

const toNumber2 = 5 * '10'
console.log(toNumber2) 
console.log(typeof(toNumber2)) //nubmer

const toNumber3 = 1 - '1'
console.log(toNumber3)
console.log(typeof(toNumber3))

// 비교연산자 : true or false

const compare1 = "1" > 0
console.log(compare1)
// 산술 연산자 + : 문자열을 합침 , 두 숫자를 더함 
// 객체 , 빈 배열이 아닌 배열 , undefined 는 변환 X NaN
console.log(+false) // 0
console.log(+null) // 0
console.log(+true) // 1
console.log(typeof(+true)) // number
console.log(+[]) //0
console.log(+{}) //NaN 
console.log(+undefined) //NaN

// 1-3 불리언 타입으로 변환

// 나머지 모두 true
console.log(
// false
    Boolean(0),
    Boolean(''),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN)
)

if('') console.log('1')
if('hello') console.log('2')
if(0) console.log('3')
if(true) console.log('4')
if(null) console.log('5') // 2 4 출력 

function isFalse(v) {
    return !v
}

function isTrue(v) {
    return !!v
}

console.log(isFalse(false))
console.log(isFalse(undefined))
console.log(isFalse(null))
console.log(isFalse(0))
console.log(isFalse(''))

console.log(isTrue(1))
// 빈 문자열이 아닌 문자열은 true
console.log(isTrue('0'))
console.log(isTrue([]))

// 2. 명시적 형변환

// 2-1 문자열 타입으로 변환

// String 생성자 함수를 new 연산자 없이 호출 

console.log(String(1))
console.log(String(true))
console.log(typeof(String(true))) // string
const num1 = 12
const num2 = 24
console.log(String(num1) + String(num2)) //1224

// Object.prototype.toString() 이용

const trueStr = (true).toString()
console.log(typeof(trueStr))

const myInform = {
    name : "woomg",
    age : 24,
    height : 170
}
const ageStr = myInform.age.toString()
console.log(typeof(ageStr))

console.log(typeof(1 + ''))
console.log(typeof(true + ''))

// 2-2 숫자 타입으로 변환

// Number 생성자 함수를 new 연산자 없이 호출

console.log(Number("0"))
console.log(Number("-1"))
console.log(Number("9.12"))
console.log(Number(true))
console.log(1 - Number(true)) // 0

// parseInt , parseFloat : 문자형에만 사용가능

console.log(parseInt("0"))
console.log(parseFloat("10.12"))
console.log(typeof(parseFloat("10.12"))) // number

// 단항 연산자 + 
// + 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입으로 형변환
const a = 10
console.log(a + '') // 피연산자의 타입에 숫자가 있음 
console.log(typeof(a + '')) // string

console.log(+"0") // 피연산자의 타입에 숫자가 없음
console.log(typeof(+"0")) // number

// 2-3 불리언 타입으로 변환

// Boolean 생성자 함수를 new 연산자 없이 호출

console.log(Boolean(''))
console.log(Boolean('0')) //true
console.log(Boolean('false')) //true
console.log(Boolean(undefined))

// 부정논리 연산자 !
console.log(!!'x') //true
console.log(!!'') //false
console.log(!! 0)
console.log(!! null)
console.log(!! undefined)
console.log(!! []) // true

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
