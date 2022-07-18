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