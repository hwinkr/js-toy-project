const toggleBtn = document.querySelector(".dropdown-toggle")
const menu = document.querySelector('.dropdown-menu')
const locationList = document.querySelectorAll('.dropdown-item')
const nextBtn = document.querySelector('.next-button')

toggleBtn.addEventListener('click' , () => {
    menu.classList.toggle('show')
})

function optionHandler(event){
    console.log(event.target)
    console.log(event.currentTarget)
    let value = event.target.innerText
    toggleBtn.innerText = value
    toggleBtn.classList.add('selected')
    menu.classList.remove('show')
    nextBtn.removeAttribute('disabled')
}

menu.addEventListener('click' , optionHandler)

