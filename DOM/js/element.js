// 1. 노드에 접근하기
const h1 = document.querySelector('h1')
console.log(h1)

// NodeList => iterable 유사 배열
// push , pop , splice 와 같은 현재배열을 영구적으로 변경시키는 API는 사용하지 못함
const colorsNode = document.querySelectorAll('.color')
console.log(colorsNode)

for(color of colorsNode){
    color.style.color = "tomato"
}
colorsNode.forEach((color) => color.style.color = "pink")
// HTMLcollection => not iterable 배열이 아님 , HTML 요소들만의 모임
// HTML 요소 : div , span , ul , li , img,, html을 구성하는 tag
// forEach , map 사용 불가능
const colorsHtml = document.getElementsByClassName('color')
console.log(colorsHtml)

// 1-1. 노드접근에 조건 걸기
const secondLink = document.querySelector('a:nth-of-type(2)')
console.log(secondLink)
secondLink.style.color = "black"

const oddLink = document.querySelectorAll('a:nth-of-type(2n+1)')
console.log(oddLink)
oddLink.forEach((link) => link.style.color = "tomato")

// 1-2. 부모요소에 접근하기
const busan = document.querySelector('.busan')
console.log(busan.parentNode)
console.log(busan.parentElement)

// parentNode : 부모 노드를 반환
console.log(document.documentElement.parentNode)
// parentElement : 부모의 요소 노드를 반환
console.log(document.documentElement.parentElement)

// 1-3. 자식요소에 접근하기
const addr = document.querySelector('.address')
// chidNodes : text(띄어쓰기 포함) + 요소 노드
console.log(addr.childNodes)
// children : 자식의 HTML 요소만 반환
console.log(addr.children)
console.log(addr.firstChild) // #text (\n)
console.log(addr.firstElementChild) // li busan

// 1-4. 형제 요소에 접근하기
const seoul = document.querySelector('.seoul')
console.log(seoul.previousSibling) // #text
console.log(seoul.previousElementSibling) // li busan
console.log(seoul.nextElementSibling) // li daegu

// 2. 노드
// 2-1. 생성 , 추가
const ulsan = document.createElement('li')
const text = document.createTextNode('ulsan')
ulsan.appendChild(text)
addr.append(ulsan)

const gimhae = document.createElement('li')
const text2 = document.createTextNode('gimhae')
gimhae.appendChild(text2)
addr.insertBefore(gimhae , busan)
// 2-2. 삭제
const changwon = document.querySelector('.changwon')
addr.removeChild(changwon)
// 2-3. 복제
console.clear()
const newBusan = busan.cloneNode(true)
console.log(newBusan)
console.log(newBusan.innerText)

// 2-4. name , type , value
const chicken = document.querySelector('.chicken')
console.log(chicken.nodeName) // LI
console.log(chicken.nodeType) // 1
console.log(chicken.nodeValue) // html 요소는 nodeValue = null

const textChicken = chicken.firstChild
console.log(textChicken.nodeName) // #text
console.log(textChicken.nodeType) // 3
console.log(textChicken.nodeValue) // chicken

// DOM
// js 입장에서 html 파일은 그냥 하나의 문자열만 저장된 파일에 불과
// 하지만 DOM 을 통해서 js가 이해할수 있는 형태로 변경 
// Document(Html) -> object fo js

// parsing : 문자열을 의미있는 형태로 분석

// NODE
// NODE vs ELEMENT
const parent = document.querySelector('.parent')
console.log(parent)
console.log(parent.parentNode)
console.log(parent.parentElement)
console.log(parent.childNodes)
console.log(parent.firstChild)
console.log(parent.firstChild.nextSibling)

// Dodument node obj
console.log(document.title)
console.log(document.doctype)

// Element Nodes
// Create Elements , tagName , children , Attributes , classList , innerText,Html , value
console.log(parent.getAttribute('class'))
parent.innerText = 'hello'
// event handling
const errorWrap = document.querySelector('.errorWrap')
const errorBox = document.createElement('span')
const errorMsg = document.createTextNode('wrong input')
errorBox.appendChild(errorMsg);

const input = document.querySelector('input')
input.addEventListener('change' , (e) => {
    const value = e.target.value
    if(value.indexOf('naver.com') == -1){
        input.classList.add('error')
        errorWrap.appendChild(errorBox)
        errorWrap.classList.add('errorMsg')
    }
        
    else{
        input.classList.remove('error')
    }
})

// event.target 속성 값들 -> 원하는 정보에 접근하기위한 과정
// html element에 따라 유용하게 사용되는 event
