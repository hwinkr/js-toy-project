// AJAX : 동적으로 서버와 데이터를 주고 받을수 있는 기술 

// XML : HTML 과 같은 마크업 언어 ,  서버와 데이터를 주고 받을 경우 XML 뿐만 아니라 여러 포맷 형태도 가능 
// 사용해야하는 코드가 많고 가독성이 떨어지기 때문에 최근에는 많이 사용 하지 않음

// fetch API + JSON
// JSON : Javascript Object Notation 
// 1. 서버와 데이터를 주고 받을수 있는 데이터 포맷 형식
// 2. 텍스트 기반 , 가독성이 좋은 Key + value 형식을 가지는 object
// 3. 언어 , IDE 상관 없이 사용

// 1. object to JSON
// stringify(obj)
// js만 가지고있는 특별한 Data Type ( ex) symbol ) + fucntion 은 JSON 에 정의 X\

const fruits = ['apple' , 'waterMelon']
let json = JSON.stringify(fruits)
console.log(json)

const rabbit ={
    name : 'tori',
    color : 'white',
    size : 'null',
    birthDate : new Date(),
    jump : () => {
        console.log(`${this.name} take a jump !!`)
    }
}
json = JSON.stringify(rabbit)
console.log(json)

json = JSON.stringify(rabbit , ["name" , "color"])
console.log(json)

json = JSON.stringify(rabbit , (key , value) => {
    console.log(`key : ${key} , value : ${value}`)
    return key === "name" ? "woong" : value
})
console.log(json)

// 2. JSON to object
// JSON 형태로 저장되어있는 데이터들은 String , 따라서 parse를 통해서 다시 원래 오브젝트로 돌아와도 테이터 형태는 String
// parse : JSON -> return origin object


json = JSON.stringify(rabbit)
console.log(json)
let obj = JSON.parse(json , (key , value) => {
    console.log(`key : ${key} value : ${value}`)
    return key === "birthDate" ? new Date(value) : value
})
console.log(obj)

console.log(rabbit.birthDate.getDate())
console.log(obj.birthDate.getDate())
