// https://api.openweathermap.org/data/2.5/weather?q=Hudson&units=imperial&appid=2c9964b6fc0c21e44ec210361f0e26aa

const apiKey = '2c9964b6fc0c21e44ec210361f0e26aa';
const searchCity = document.getElementById('search');
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Hudson&units=imperial`

async function getWeather () {
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    console.logI(response)
}