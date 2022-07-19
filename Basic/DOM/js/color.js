const h3 = document.querySelector('h1')
h3.style.color = 'purple'

const pList1 = document.querySelectorAll("p")
console.log(pList1)
// pList1 : nodeList , iterable 만족하는 collection
// push , pop , join 과 같은 배열의 요소를 변경시키는 API들은 사용 불가능
pList1.forEach((tag) => {
    tag.style.color = "tomato"
    tag.style.opacity = Math.random()
})

const pList2 = document.getElementsByTagName("p")
console.log(pList2)
// paragraph : HTMLcollection (HTML 요소들의 모음)

const secondLink = document.querySelector("a:nth-of-type(1)")
secondLink.style.color = "orange"

const evenLink = document.querySelectorAll('a:nth-of-type(2n)')
evenLink.forEach((link) => link.style.color = "black")

// 부모 노드 접근하기

const red = document.querySelector('.red')
console.log(red.parentNode)
console.log(red.parentElement)

// parentNode : 부모 노드를 반환
console.log(document.documentElement.parentNode)
// parentNode : 부모의 요소 노드를 반환
// 요소 노드 : html 태그로 이루어진 요소
// document 는 html의 요소 노드가 아님 (h1 , a , ul , li..)
console.log(document.documentElement.parentElement)

// 자식 노드 접근하기
const color = document.querySelector('.color')
// childNodes : text(space , 공백 문자 포함) , comment 포함한 모든 노드 반환
console.log(color.childNodes)
// children : 자식 노드중 html 요소만 반환
console.log(color.children)

console.log(color.firstChild)
console.log(color.firstElementChild)
color.firstElementChild.style.color = "red"

const blue = document.querySelector(".blue")
console.log(blue.previousElementSibling)
console.log(blue.nextElementSibling)

// 노드 생성 , 추가 , 복제

const orange = document.querySelector('.orange')
console.log(orange.nodeType)
console.log(orange.nodeValue) 
console.log(orange.nodeName)

const orangeChild = orange.firstChild
console.log(orangeChild.nodeType) // 3
console.log(orangeChild.nodeValue) // orange
console.log(orangeChild.nodeName) // #text

const ul = document.querySelector('.color')
console.log(ul.nodeName)
console.log(ul.nodeValue)
console.log(ul.nodeType)
// html 요소인 li 생성
const newLi = document.createElement('li')
console.log(newLi)
// li 내부를 HTML로 채우고
newLi.innerHTML = "hi"
console.log(newLi)
// ul의 자식요소로 추가
ul.appendChild(newLi)

const newLi2 = document.createElement('li');
// element가 아닌 TextNode를 생성
const newText = document.createTextNode('pink')
// li에 자식요소로 추가
newLi2.appendChild(newText)
// ul에 자식요소로 추가
// appendChild : 항상 마지막 자식 요소로 추가
ul.appendChild(newLi2)

const newLi3 = document.createElement('li')
const li3Text = document.createTextNode('tomato')
newLi3.appendChild(li3Text)
ul.insertBefore(newLi3, red)
ul.appendChild(red)
ul.insertBefore(red , newLi3)
// 노드 복제
const newTomato = newLi3.cloneNode(true)
console.log(newLi3.innerText)
console.log(newTomato.innerText)
ul.appendChild(newTomato)
// 삭제
ul.removeChild(red)
ul.removeChild(ul.firstElementChild)
ul.removeChild(ul.lastElementChild)