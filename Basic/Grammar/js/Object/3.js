// Class vs Object
// Class : 관련있는 변수들과 메서드를 묶어놓은 것. 데이터를 생성할수 있는 틀을 제공
// Object : 그 틀을 통해서 실제로 만들어진 데이터
 
class Person {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    printHi(name){
        console.log(`hi ${name} form ${this.name}`)
    }
}

const person1 = new Person("woong" , 24)
console.log(person1.name)
console.log(person1.age)
person1.printHi("choi")

// 객체지향 개념 : getter , setter
// 사용자가 값을 잘못 입력했을 경우를 대비해서 존재 ex) 나이 : -1

class User {
    constructor(firstName , lastName , age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    
    get age(){
        return this._age 
    }
    set age(value){
        if(value < 0){
            throw Error('age can not be negative')
        }
        this._age = value < 0 ? 0 : value
        this._age = value // value는 set age() 호출
    }
}   

const user1 = new User ("choi" , "woong " ,-1)
// user1.age를 했을때 값을 가져올수 있는 것은 class 내부적으로 get 함수가 있기 때문
console.log(user1.age) 
// Public vs Private
class Experiment{
    publicField = 2
    #privateField = 0 // 클래스 내부에서만 값을 읽고 변경 가능
     
}

const experiment = new Experiment()
console.log(experiment.publicField)
console.log(experiment.privateField)
// static : 새로 만들어지는 object 마다 할당 해주는것이 아니라 class 내부 자체에 붙어있음
class Article{
    static publisher = "choi woong"
    constructor(articleNumber){
        this.articleNumber = articleNumber
    }
    static printPublisher(){
        console.log(this.publisher)
    }
}
const article1 = new Article(1)
console.log(article1.publisher)
console.log(Article.publisher)
Article.printPublisher()
// inheritance
class Shape{
    constructor(width , height , color){
        this.width = width
        this.height = height
        this.color = color
    }

    draw(){
        console.log(`drawing ${this.color} !`)
    }

    getArea(){
        return this.width * this.width
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    // 부모의 함수를 가져와서 필요한 내용을 오버라이딩
    draw(){
        super.draw()
        console.log("This is Triangle")
    }
    getArea(){
        return this.width * this.height / 2
    }
    toString(){
        return "Triangle / color : black"
    }
}

const newRec = new Rectangle(10 , 10 , "blue")
console.log(newRec.width)
newRec.draw()

const newTri = new Triangle(15, 15 , "black")
newTri.draw()
console.log(newTri.getArea())
// instanceof : object instanceof Class 오브젝트가 이 클래스를 통해 만들어 졌는지를 판단
console.log(newTri instanceof Triangle)
console.log(newRec instanceof Triangle) 
console.log(newRec instanceof Shape)
console.log(newRec instanceof Object) 
console.log(newRec.toString())
console.log(newTri.toString())

// TODO : this  , 바인딩 , 클로저 , 프로미스 
 
