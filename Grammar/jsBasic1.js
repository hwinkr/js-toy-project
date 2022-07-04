//변수

// 1.1 원시 타입
// 1.number : js 에서 모든 수는 실수를 의미 한다.
//선언
// let number1 = 150

// console.log(1 === 1.0) // true 정수 실수 구분이 없다

// result = 3 / 2;
// console.log(result) // 1.5
// console.log(typeof(result)) // number

// let positivieInfi = 10 / 0; // Infinity
// let negativeInfi = -10 / 0; // -Infinity

// let nan = 1 * "string" // number * string
// console.log(nan) // not a number

// // 2.string : js 의 문자열은 원시타입 , 한번 선언 후 변경이 불가능
// // 'woong' -> 'choi' 수정 하는 것이 아니라 , 새로운 문자열 'choi'를 메모리에 생성 하고 식별자 name은 이것을 가르킴
// // 메모리 공간을 더 차지함 수정이 아니라 가리키는 값이 달라진 것이다. 메모리에는 'woong' , 'choi' 둘다 존재
// let name = 'woong'
// name = 'choi'
// console.log(name) // 'choi'
// // string 은 유사 배열로 활용 가능
// let myName = 'string'
// for(let i=0; i<myName.length; i++){
//     console.log(myName[i])
// }
// str = "hyun"
// str += "woong"
// str = str.toUpperCase() 
// console.log(str) // HYUN WOONG
// const subStr = str.substring(0,5)
// console.log(subStr)

// // 3.boolean : 프로그램의 흐름 제어 / 조건문에서 주로 사용
// let ok = true
// let no = false

// // 4. unll : null 의 값은 null 이 유일 , 의도적으로 변수가 선언만 되고 값이 할당 되지 않았다는 것을 명시 해야하는 경우 사용
// let boy = "hiBoy"
// boy = null
// console.log(null)
// console.log(boy === null) // true
// // 함수가 호출 되었으나 유요하지 않는 값을 반환 할 경우 null 출력. 조건에 부합하는 HTML 요소를 검색 불가능
// const element = document.querySelector(".className")
// console.log(element)

// // 5. undefined : undefined 의 값은 undefined 가 유일  
// //선언은 되었지만 값을 할당하지 않은 변수. 값이 비어있는 상태로 두지 않고 js가 undefined 로 초기화
// let question ;
// console.log(question)

// let obj = {
//     name : "woong",
//     address : "busan"
// }
// console.log(obj.name)

// // 1.2 객체 타입
// // 1. Object : 
// // 식별자인 변수명을 통해서 변수에 저장된 값을 참조
// // 메모리에 저장된 값을 참조 하려먼 메모리상의 주소를 알아야 함. 식별자(변수명) 은 값이 저장된 메모리상의 주소를 기억. 따라서 식별자를 통해 저장된 값을 참조
// let myObject = {
//     name : 'woong',
//     address : 'busan',
//     height : 169,
//     say : function(name) {
//         console.log(`hi ${name} from ${this.name}`)
//     }
// }
// // 2. 배열 : Data Type 가 같은 Data 묶음
// let arr = [1, 3 ,4, 2 ,6]
// console.log(arr[2])
// console.log(typeof(arr[2]))

// //연산자

// //산술 연산자
// // + - / % *
// //비교 연산자
// let compare_1 = 3 > 5
// console.log(compare_1) // false
// //논리 연산자
// let compare_2 = (5 > 3) && (2 < 4)
// console.log(compare_2) // true
// //타입 연산자
// let type = typeof("hi")
// //인스턴스 생성 연산자 new (java 의 참조변수)
// let now = new Date()
// console.log(now.getFullYear());


// // 문 : 컴퓨터 (웹 브라우저) 에 의해 단계별로 수행되어야할 명령들의 집합

// // 1. 반복문
// // while
// let i = 0;
// while(1) {
//     if(i > 5) break;
//     console.log(i);
//     i ++;
// }
// // for
// function factorial(n) {
//     if (n < 1) return 1;
//     return n * factorial (n - 1);
// }

// for(let i=0; i<10; i++){
//     console.log(i + "! = " + factorial(i))
// }

// 2. 조건문 : only true or false
let age = 20;
if (age >= 18) console.log("성인입니다.")
else console.log("미성년자 입니다")

// 연산자를 사용하여 if 활용 
console.log(10 > 5)
console.log(10 == 5)
console.log(10 != 5)

const a = 1;
const b = "1"
console.log(a == b) // true
console.log(a === b) // false 

const message = "cat" && "dog"
console.log(message)
// for 문
for(let i = 0; i<10; i++){
    console.log(i)
}

// 함수 : 작업을 수행하기 위해 필요한 문 들의 집합인 코드블럭
function add (x ,y){
    return x + y;
}






