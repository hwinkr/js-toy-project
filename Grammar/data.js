//변수

//number
let number1 = 150
//string
let string1 = "hello"
//boolean
let boolean1 = false
//null
let non = null
//undefined
let bob; 

let obj = {
    name : "woong",
    address : "busan"
}
console.log(obj.name)

//연신지

//비교 연산자
let compare_1 = 3 > 5
console.log(compare_1) // false
//논리 연산자
let compare_2 = (5 > 3) && (2 < 4)
console.log(compare_2) // true
//타입 연산자
let type = typeof("hi")
//인스턴스 생성 연산자 (java 의 참조변수)
let now = new Date()
console.log(now.getFullYear());

// while
let i = 0;
while(1) {
    if(i > 5) break;
    console.log(i);
    i ++;
}
// for
function factorial(n) {
    if (n < 1) return 1;
    return n * factorial (n - 1);
}

for(let i=0; i<10; i++){
    console.log(i + "! = " + factorial(i))
}

// 문 : 컴퓨터 (웹 브라우저) 에 의해 단계별로 수행되어야할 명령들의 집합

// 함수 : 작업을 수행하기 위해 필요한 문 들의 집합인 코드블럭
function add (x ,y){
    return x + y;
}
// if 문
let age = 20;
if (age >= 18) console.log("성인입니다.")
else console.log("미성년자 입니다")
// for 문
for(let i = 0; i<10; i++){
    console.log(i)
}
// 표현식 : 하나의 값
// 값(상수) , 뱐수 , 객체 프로퍼티 , 배열 , 함수 , 피연산자 + 연산자 들의 조합
console.log(5 * 10)

// 객체 : js 는 객체 기반의 스크립트 언어 / Data Type 가 다른 Data 묶음
let person = {
    name : "woong",
    gender : "male",
    age : 24,
    sayHi : function () {
        console.log("Hi! my name is" + this.name)
    }
}
console.log(typeof(person.age))
person.sayHi();

// 배열 : Data Type 가 같은 Data 묶음
let arr = [1, 3 ,4, 2 ,6]
console.log(arr[2])
console.log(typeof(arr[2]))