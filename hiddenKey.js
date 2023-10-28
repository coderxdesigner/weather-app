// https://api.openweathermap.org/data/2.5/weather?q=Hudson&units=imperial&appid=key

const apiKey = 'xxxxxxxxxxxxxxxxxxxxx';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=imperial`
const city = document.querySelector('.search input');
const btn = document.querySelector('.search button');

async function getWeather (city) {
    const response = await fetch(apiUrl + `&appid=${apiKey}&q=${city}`)
    let data = await response.json();
    console.log(data)
    if (data.cod === 200){
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)} &deg; f`;
        document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
        document.querySelector('.wind').innerHTML = `${data.wind.speed}km/h`;
    } else {
        const div = document.querySelector('.weather')
        div.innerHTML = `<div class="notFound">Hmmm, the city you entered was not found. Please try another city name.</div>`
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
