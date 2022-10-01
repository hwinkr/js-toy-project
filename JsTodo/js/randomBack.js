const images =[
    "back1.jpg",
    "back2.jpg",
    "back3.jpg",
    "back4.jpg",
    "back5.jpg",
]
const choosenImage = images[Math.floor(Math.random()*images.length)];
//this background Image in body
const bgImage = document.createElement('img');
bgImage.src = `images/${choosenImage}`;
bgImage.classList.add('bg-img');
document.body.style.backgroundImage = 'url('+bgImage.src+')';

const quotes = [
    {
        quote :"강한자가 살아남는 것이 아니라 살아남는 자가강한 것이다",
        author :"김유신 장군"
    },
    {
        quote : "내가 남을 알지 못하는 것이 죄일 뿐 남이 나를 알아주지 않는게 무슨 죄란 말인가",
        author: "장영실",        
    },
    {
        quote : "가볍게 움직이지 말라 침착하게 태산같이 무거이 행동하라",
        author: "충무공 이순신",        
    },
    {
        quote : "배우는 사람은 모름지기 심신을 수련해야 한다",
        author: "퇴계 이황",        
    },
    {
        quote : "뜻이 서지 않으면 만사가 성공하지 못한다 먼저 반드시 뜻을 세워라",
        author: "율곡 이이",        
    },
    {
        quote : "세월을 헛되이 보내지 마라 청춘은 다시 돌아오지 않는다",
        author: "안중근 의사",        
    },
    {
        quote : "진실은 반드시 따르는 자가 있고 정의는 반드시 이루는 날이 있다",
        author: "도산 안창호",        
    },
    {
        quote : "어린이는 어른보다 한 시대 더 새로운 사람입니다 어린이의 뜻을 가볍게 보지 마십시오",
        author: "소파 방정환",        
    },
    {
        quote : "못해서 안하는 게 아니라 안하니까 못한다",
        author: "심형래",        
    },
    {
        quote : "열정이 있으면 꼭 만난다 열망이 운명과 만남을 주도한다",
        author: "김영세",        
    },

];

const quote = document.querySelector(".quotes span:first-child");
const author = document.querySelector(".quotes span:last-child");
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;