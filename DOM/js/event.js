// 이벤트 버블링 : 자식요소에서 이벤트가 발생하면 더이상 다음 부모요소가 없을때 까지 거슬러 올라감
const box = document.querySelector('.box')
const list = document.querySelector('.list')
const red = document.querySelector('.pink')

// document.body.addEventListener('click' , () => {
//     console.log('1. body')
// })

box.addEventListener('click' , () => {
    console.log('2. box')
})

list.addEventListener('click' , () => {
    console.log('3. list')
})

red.addEventListener('click' , () => {
    console.log('4. pink')
})
 
// focus , blur 버블링 x
// focusin , focusout 버블링 o
const txt = document.querySelector('.newText')
const textBox = document.querySelector('.textBox')

document.body.addEventListener('focusin' , () => {
    console.log('focusin - 1.body')
})

textBox.addEventListener('focusin' , () => {
    console.log('focusin - 2.div')
})

txt.addEventListener('focusin' , (e) => {
    // 버블링 막기
    e.stopPropagation()
    console.log('focusin - 3.input')
})

document.body.addEventListener('focusout' , () => {
    console.log('focusout - 1.body')
})

textBox.addEventListener('focusout' , () => {
    console.log('focusout - 2.div')
})

txt.addEventListener('focusout' , (e) => {
    e.stopPropagation()
    console.log('focusout - 3.input')
})

// 이벤트 위임 : 자신에게 발생하는 이벤트를 다른 요소에서 처리

const colorList = document.querySelector('.colorList')
// HTMLCollection is not iterable
const colors = colorList.children
console.log(colors)

const colorHandler = function(event){
    let target = event.target
    if(target.tagName === "A")
        target = target.parentElement
    else if(target.tagName === "UL"){
        return ;
    }
    // target : 이벤트를 발생시키는 요소 
    console.log('target' , event.target)
    // currentTarget : 이벤트 핸들러가 등록된 요소
    console.log('currentTarget' , event.currentTarget)
    for(color of colors){
        color.classList.remove('on')
    }
    target.classList.add('on');
}


// ul 의 자식요소인 li의 갯수가 많아지면 코드의 복잡도가 증가 , li에서 일어나는 이벤트를 ul에 위임 -> 이벤트 버블링을 이용 , 자식요소에서 일어나는 이벤트가 부모요소까지 전달되는 js의 이벤트 전달 특징
colorList.addEventListener('click' , colorHandler)

const pink = document.querySelector('.pink')
console.log(pink.childNodes)
console

//js event flow : 동일한 이벤트의 핸들러가 존재하는 경우 자식요소에서 이벤트가 발생하더라도 부모까지 이벤트 전달

// target : 이벤트의 시발점
// currentTarget : 이벤트 핸들러의 주인
const item = document.querySelector('.item1');

item.addEventListener('click' , (e) => {
    console.log('3. list item')
    console.log(e.target)
    console.log(e.currentTarget)
})


const newlist = document.querySelector('.newlist');

list.addEventListener('click' , (e) => {
    console.log('2. unordered list')
    console.log(e.target)
    console.log(e.currentTarget)
})

const newbox = document.querySelector('.newbox');

box.addEventListener('click' , (e) => {
    console.log('1. div')
    console.log(e.target)
    console.log(e.currentTarget)
})

// 똑같은 이벤트가 동시에 발생 한다면 어떤 이벤트 부터 실행 시켜야 하는가?
// flow : capture(propagate up) -> target -> bubble(propagate down)
// currentTarget != event.target 인 경우, capture or bubble 둘중 하나에서만 이벤트 발생 -> default : bubble 
// event control : e.stopPropogation() 다음 이벤트 발생을 막음

// eventHandler 를 사용하면 항상 js에서 그 이벤트에 해당하는 객체를 전달해줌
// target , currentTarget , preventDefault , stopPropagation()
// preventDefault : 상황에 따라서 브라우저가 기본으로 정해놓은 로직을 막음

const form = document.querySelector('.form')

form.addEventListener('submit' , (e) =>{
    e.preventDefault()
})

const input = document.querySelector('.emailInput')
input.addEventListener('input' , (e) =>{
    console.log(e.target.value)
})