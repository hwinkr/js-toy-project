// const tomatoBtn = document.querySelector('.tomatoBtn');
// const tomato = document.querySelector('.tomato');

// console.log(tomatoBtn)
// console.log(tomato)

// tomatoBtn.addEventListener('click' , () => 
//     tomato.classList.toggle('tomato')
// )
// // event using often
// // a. dblclick
// const black = document.querySelector('.black')
// black.addEventListener('dblclick', (event) =>{
//     console.log(event) 
//     alert('my name is black')
// })
// // focus , blur
// const text = document.querySelector('.text')
// text.addEventListener('focus' , () => {
//     text.style.backgroundColor = "black"
// })
// text.addEventListener('blur' , () => {
//     text.style.backgroundColor = "white"
// })
// // mouse
// const box = document.querySelector('.box')
// const circle = document.querySelector('.circle')
// box.addEventListener('mousemove' , (e) =>{
//     circle.style.top = `${e.clientY}px`
//     circle.style.left = `${e.clientX}px`
// })   

// // eventBubble
// // 자식에게 이벤트가 발생하면 더이상 부모요소가 없을때까지 부모요소에게 걸린 이벤트가 올라가면서 계속 발생.
// const myBox = document.querySelector('.myBox')
// const list = document.querySelector('.list')
// const blue = document.querySelector('.blue')

// document.body.addEventListener('click' , () => console.log('1. body'))
// myBox.addEventListener('click' , () => console.log('2. div'))
// list.addEventListener('click' , () => console.log('3. ul'))
// blue.addEventListener('click' , () => console.log('4. li'))

// // focus , blur : event bubbling X
// const textBox = document.querySelector('.textBox')
// const newText = document.querySelector('.newText')

// textBox.addEventListener('focus' , () => console.log('1. div'))
// newText.addEventListener('focus' , () => console.log('2. input'))

// textBox.addEventListener('blur' , () => console.log('1. div'))
// newText.addEventListener('blur' , () => console.log('2. input'))

// // focusin , focusout

// textBox.addEventListener('focusin' , () => console.log('1. div'))
// newText.addEventListener('focusin' , () => console.log('2. input'))

// textBox.addEventListener('focusout' , () => console.log('1. div'))
// newText.addEventListener('focusout' , () => console.log('2. input'))

// 이벤트 위임 : 자신에게 발생하는 이벤트의 처리를 다른 요소에게 위임한다.

const colorList = document.querySelector('.colorList')
const colors = colorList.children
console.log(colors)

const colorHandler = function(e){
    if(e.target.tagName == "UL") return;
    else{
        for(c of colors){
            c.classList.remove('on')
        }
        e.target.classList.add('on')
        console.log(e.target)
        console.log(e.currentTarget)
    }
}

for(color of colors){
    color.addEventListener('click' , colorHandler)
}

colorList.addEventListener('click' , colorHandler)