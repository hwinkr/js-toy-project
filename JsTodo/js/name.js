const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const getName = document.querySelector('.userName');

const HIDDEN_CLASSNAME = 'hidden';
const GET_USERNAME = 'username';

const savedName = localStorage.getItem(GET_USERNAME);
if (savedName == ""){
    getName.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',clickSubmit);
} else {
    paintName(savedName);
}
function paintName(username){
    getName.innerText = `hello ${username}`;
    getName.classList.remove(HIDDEN_CLASSNAME);
}

function clickSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;    
    paintName(userName);
    localStorage.setItem(GET_USERNAME,userName);
}
