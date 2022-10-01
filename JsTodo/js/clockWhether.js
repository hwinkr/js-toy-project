const clock = document.querySelector('.clock');
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}`;
}
getClock();
//1000ms : getClock function Execute per 1s
setInterval(getClock,1000);

//Weather
//City , Temperature
const API_KEY = "cab6cd9aab9fffae60ee0ddbffa14ba3";
//geolocation
//in browser, getLocation where i am
navigator.geolocation.getCurrentPosition(geoOk,geoError);

function geoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then((data) =>{
        const weatherContainer = document.querySelector(".weather span:first-child");
        const cityContainer = document.querySelector(".weather span:last-child");
        const name = data.name;
        const weather =data.weather[0].main;
        const temp = data.main.temp;
        weatherContainer.innerText = `${weather} / ${temp}°C`;
        cityContainer.innerText = name;
    })
}

function geoError(){
    console.log("Can't get your location, Can't give Weather Information");
}
//API = Communicate with other server