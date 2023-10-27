// https://api.openweathermap.org/data/2.5/weather?q=Hudson&units=imperial&appid=apkeygoeshere

const apiKey = '';
const searchCity = document.getElementById('search');
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Hudson&units=imperial`

async function getWeather () {
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    let data = await response.json();
    console.log(data)
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)} &deg; f`;
    document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
    document.querySelector('.wind').innerHTML = `${data.wind.speed}km/h`;
}
getWeather();