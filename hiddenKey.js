// https://api.openweathermap.org/data/2.5/weather?q=Hudson&units=imperial&appid=idhere

const apiKey = 'xxxxxx';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=imperial`
const city = document.querySelector('.search input');
const btn = document.querySelector('.search button');

async function getWeather (city) {
    const response = await fetch(apiUrl + `&appid=${apiKey}&q=${city}`)
    let data = await response.json();
    drawDisplay(data);
}
function drawDisplay (data){
    console.log(data)
    let city = document.querySelector('.city');
    let temp = document.querySelector('.temp');
    let humidity = document.querySelector('.humidity');
    let wind = document.querySelector('.wind');
    let error = document.getElementById('message');
    if (data.cod === 200){
        error.classList.remove('active');
        iconSelector(data.weather[0].main);
        city.innerHTML = data.name;
        temp.innerHTML = `${Math.round(data.main.temp)} &deg; f`;
        humidity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${data.wind.speed}km/h`;
    } else {
        error.classList.add('active');
        city.innerHTML = "Pluto";
        temp.innerHTML = `-400 &deg; f`;
        humidity.innerHTML = `0%`;
        wind.innerHTML = `100 km/h`;

    }
}
function iconSelector(img) {
    let ico = document.querySelector('.weather-icon');
    switch(img) {
        case 'Rain':
            ico.src="images/rain.png";
            break;
        case 'Clear':
            ico.src="images/clear.png";
            break;
        case 'Clouds':
            ico.src="images/clouds.png";
            break;
        case 'Drizzle':
            ico.src="images/drizzle.png";
            break;
        case 'Mist':
            ico.src="images/mist.png";
            break;
        case 'Snow':
            ico.src="images/snow.png";
            break;
        case 'Clear':
            ico.src="images/clear.png";
            break;
        default:
            ico.src="images/clear.png";
            break;
    }

}
btn.addEventListener('click', ()=> {
    getWeather(city.value.trim());
})
document.querySelector('#search').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getWeather(city.value.trim());
    } 
  });
