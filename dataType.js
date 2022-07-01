// 원시타입

// 1. number
// -> js 에서 모든 수는 실수를 처리 하며 정수를 처리하기 위한 특별한 dataType X
// numvber => 실수

// 값과 데이터 타입이 모두 같아야함 === 
// 실수 === 실수
console.log(1 === 1.0)

let result = 4 / 2;
console.log(result);

result = 3 / 2;
console.log(result);
console.log(typeof(result))

// 무한값

let pInfi = 10 / 0;
console.log(pInfi)
let nInfi = -10 / 0;
console.log(nInfi)
let nan = 1 * "string"
console.log(nan)

// 2. string
// -> js 의 문자열은 원시타입 , 한번 선언 후 변경이 불가능
// 'woong' -> 'choi' 수정 하는 것이 아니라 , 새로운 문자열 'choi'를 메모리에 생성 식별자 name은 이것을 가르킴
// 메모리 공간을 더 차지함 수정이 아니라 가리키는 값이 달라진 것. 메모리에는 'woong' , 'choi' 둘다 존재
let name = 'woong'
name = 'choi'
// string -> 유사 배열
let myName = 'string'
for(let i=0; i<myName.length; i++){
    console.log(myName[i])
}
// 변경하는 것이 아니라 재할당하고 가리키는 방향을 달리 하는 것
let str = "yourName"
console.log(str)

str = "addminus"
console.log(str)

str += "plus"
console.log(str)

str = str.substring(0 , 5)
console.log(str)

str = str.toUpperCase();
console.log(str)

// 3.boolean 
//-> 프로그램의 흐름 제어 / 조건문에서 주로 사용
let ok = true;
let no = false

// 4. undefined : undefined 의 값은 undefined 가 유일
// -> 선언은 되었지만 값을 할당하지 않은 변수. 값이 비어있는 상태로 두지 않고 js가 undefined 로 초기화
// 변수를 선언후 값 할당을 하지 않는것이 의도적이지 않은 경우
let question ;
console.log(question)

// 5. unll : null 의 값은 null 이 유일
// -> 의도적으로 변수가 선언만 되고 값이 할당 되지 않았다는 것을 명시 해야하는 경우 사용

let boy = "hiBoy"
boy = null
console.log(null)
console.log(boy === null) // true
// 함수가 호출 되었으나 유요하지 않는 값을 반환 할 경우 -> null
// 조건에 부합하는 HTML 요소를 검색 불가능
const element = document.querySelector(".className")
console.log(element)

// 객체 타입

// 1. Object : 
// 식별자인 변수명을 통해서 변수에 저장된 값을 참조
// 메모리에 저장된 값을 참조 하려먼 메모리상의 주소를 알아야 함. 식별자(변수명) 은 값이 저장된 메모리상의 주소를 기억. 따라서 식별자를 통해 저장된 값을 참조

let myObject = {
    name : 'woong',
    address : 'busan',
    height : 169,
    say : function(name) {
        console.log(`hi ${name} from ${this.name}`)
    }
}

console.log(myObject.address)
myObject.say("girl")

console.log(foo);
let foo = 123;
console.log(foo);
foo = 456;

console.log(foo)