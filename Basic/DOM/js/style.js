

const green = document.querySelector('.green')

green.addEventListener(('click') , ()=>{
    green.classList.toggle('green')
})

const btn = document.querySelector('.event')
const num = document.querySelector('.number')

let increase = function(){
    let number = 0;
    return function(){
        return ++number
    }
}
const myIncreaser = increase()
btn.onclick = function(){
    num.innerText = myIncreaser()
}
// event
// dblclick
const backBtn = document.querySelector('.colorEvent')
backBtn.addEventListener(('dblclick') , () =>
    document.body.style.backgroundColor = "tomato"
)
// keyup
const inputText = document.querySelector('.newText')
inputText.addEventListener(('keyup') ,(e) =>{
    console.log('hi key')
    console.log(e)
})
// focus , blur
const inputText2 = document.querySelector('.newText2')
inputText2.addEventListener(('focus') , () => {
    inputText2.style.backgroundColor = "red"
})
inputText2.addEventListener(('blur') , () =>{
    inputText2.style.backgroundColor = null
})
// mouseEvent
const boxHandler = document.querySelector('.myBox')
const moveCircle = document.querySelector('.circle')

boxHandler.addEventListener(('mousemove') , (event) => {
    moveCircle.style.top = `${event.clientY}px`
    moveCircle.style.left = `${event.clientX}px`
})

window.addEventListener('resize' , (e) => {
    document.body.innerText = `현재 창 크기는 ${window.innerHeight} x ${window.innerWidth} `
})


