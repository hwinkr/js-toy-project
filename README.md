<<<<<<< HEAD
# ES6 기준 js 문법 학습

1. 변수와 데이터 타입

***
### 원시 타입 
1. 변수 : 값을 담는 저장소 <br/>
js 는 동적으로 변수의 타입을 할당해주기 때문에 변수의 타입을 따로 설정 하지 않는다 -> 동적 타입 언어<br/>
변수는 값의 위치를 기억하는 저장소,  값이 위치하고 있는 메모리 상의 주소에 접근하기 위해 사람이 이해할 수 있는 언어로 정의한 식별자.<br/>
Data type + variable + literial value <br/>
let str = "hellow world" 

1-1 종류 
1. number <br/>
js 에서 모든 수는 실수로 Type을 부여 하며 정수를 처리하기 위한 특별한 방식이 존재하지 않음
```
console.log(1 === 1.0)

let result = 4 / 2;
console.log(result);

result = 3 / 2; // 1.5 (정수 / 정수 = 실수)
console.log(result);
console.log(typeof(result)) //number
```
2. string <br/>
js 의 문자열은 원시타입 , 한번 선언 후 변경이 불가능
```
let name = 'woong'
name = 'choi'
```
woong -> choi 수정 하는 것이 아니라, <br/> 
새로운 문자열 choi 를 메모리에 추가로 생성 하고 식별자 name은 <br/>
새로운 값인 choi 를 가르킴 <br/>

3. boolean <br/>
프로그램의 흐름 제어 / 조건문에서 주로 사용 <br/>

4. undefined <br/>
undefined 의 값은 undefined 가 유일 <br/>
선언은 되었지만 값을 할당하지 않은 변수. <br/>
값이 비어있는 상태로 두지 않고 js가 undefined 로 초기화 <br/>
변수를 선언후 값 할당을 하지 않는것이 의도적이지 않은 경우 <br/>

5. null <br/>
null 의 값은 null 이 유일 <br/>
 의도적으로 변수가 선언만 되고 <br/>
값이 할당 되지 않았다는 것을 명시 해야하는 경우 사용 <br/>
```
// 함수가 호출 되었으나 유효하지 않는 값을 반환 할 경우 -> null
// 조건에 부합하는 HTML 요소를 검색 불가능
const element = document.querySelector(".className")
console.log(element)
```
6. symbol

### 객체 타입

1. Object 

[참고] (https://poiemaweb.com/)


=======
# Js-programming
Web programming Using Js
>>>>>>> eb2eb1e0c011c9e4290828eab20dd78605ed1ff5
