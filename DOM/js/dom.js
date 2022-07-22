// js 입장에서 html 파일은 그냥 하나의 문자열만 저장된 파일에 불과
// 하지만 DOM 을 통해서 js가 이해할수 있는 형태로 변경 
// Document(Html) -> object fo js

// parsing : 문자열을 의미있는 형태로 분석

// NODE
// NODE vs ELEMENT
const parent = document.querySelector('.parent')
console.log(parent)
console.log(parent.childNodes)
console.log(parent.firstChild)
console.log(parent.firstChild.nextSibling)
console.log(parent.parentElement)
console.log(parent.parentNode)

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

// event.target 속성 값들
// html element에 따라 유용하게 사용되는 event
// 원하는 정보에 접근하기위한 과정
