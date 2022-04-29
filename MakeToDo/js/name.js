//getElemtById 를 통해서 html 의 해당 id 요소를 가져옴
//가져온 요소를 js 언어로 제어 가능.
//Browser가 제공하는 document Object 의 함수를 이용
// const title = document.querySelector('.title h1');
// console.log(title.innerText);
// console.dir(title);
// title.innerText = "Hi Woong~!";

// const btn = document.querySelector('.dayAndNight');
// console.log(btn.innerText);

// btn.addEventListener('click',()=>{
//     if(document.body.style.backgroundColor === 'white'){
//         document.body.style.backgroundColor = 'tomato';
//         btn.innerText = 'white';
//     }
//     else{
//         document.body.style.backgroundColor = 'white';
//         btn.innerText = 'tomato'
//     }
// })

// title.addEventListener('mouseenter',()=>{
//         touch.willTouch();
//         title.innerText = "Can i touch you Woong?"
//      });
// title.addEventListener('click',()=>{
//          title.classList.toggle('clicked');
//          title.innerText = " i touch you Woong!!"
//          touch.touched();
//      });
// title.addEventListener('mouseleave',()=>{
//         title.innerText = "Grap me Again!"
//          touch.noTouch();
//      })

// const touch = {
//     willTouch : function(){
//         console.log("Are you Touch me?!");
//     },
//     touched : function(){
//         console.log("you Touched me!!!");
//     },
//     noTouch : function(){
//         console.log("really Leaving me?!!")
//     }
// }

// const numList = ["three","four","five","six","seven"];
// console.log(numList[0]);

// function modifyText(new_text){
//     const t2 = document.getElementById("t2");
//     t2.innerText = new_text;
//     console.log(t2.innerText);
// }

// const el = document.getElementById("outside");
// let  i =0;
// el.addEventListener('click',()=>{
//     modifyText(numList[i++]);    
// });

// const num = document.getElementById('upNumber');
// function printUpNumber(){
//     num.innerText ++;
// }
// num.addEventListener('click',printUpNumber);


// getElement ~ 를 사용 하지 않아도 js 에서 기본으로 제공되는 document 처럼
// window 객체에서 eventListner 를 사용 할 수 있게함.

// function resizeWindow(){
//     document.body.style.backgroundColor = "tomato";
// }
// function copyWindow(){
//      alert("you copier!");
// }
// function offLineWindow(){
//     alert("OMG!! NO WIFI");
// }
// function onLineWindow(){
//     alert("YOu Get WIFI");
// }
// window.addEventListener('resize',resizeWindow);
// window.addEventListener('copy',copyWindow);
// window.addEventListener('online',onLineWindow);
// window.addEventListener('offline',offLineWindow);

// const colorBtn = document.querySelector('.subTitle');
// colorBtn.addEventListener('click',()=>{
//     colorBtn.classList.toggle('touched');
// })

// const numPointer = document.getElementById('num');
// console.log(numPointer.innerText);

// function addNumber(){
//     numPointer.innerText ++;
// }
// numPointer.addEventListener('click',()=>{
//     addNumber();
// })

// const numList = ['three','four','five','six','seven'];
// const addString = document.querySelector('.stringNum');
// let i = 0;
// function modify(new_text){
//     const t2 = document.getElementById('t2');
//     t2.innerText = new_text;
//     console.log(t2.innerText);
// }
// addString.addEventListener('click',()=>{
//     modify(numList[i++]);
//     if(i>numList.length){
//         t2.innerText = "Max Value"
//     }
// })

const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const getName = document.querySelector('.userName');
//공통된 String을 많이쓰는 경우에는 변수로 지정.
const HIDDEN_CLASSNAME = 'hidden';
const GET_USERNAME = 'username';
//함수의 이름을 넘겨주면 js가 실행.
//js가 함수를 실행시킬때 동시에 첫번째 인자로 Object를 넣는다
//그 Object는 Event about just happened.

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
    //String + Variable Not Using +
    paintName(userName);
    //정보가 브라우저에 저장됨.
    localStorage.setItem(GET_USERNAME,userName);
}
//브라우저에서 제공하는 정보 저장 API local storage
