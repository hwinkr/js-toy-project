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
    console.log(target)
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
