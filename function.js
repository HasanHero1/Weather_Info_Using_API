const API_KEY = `dda51eb80c54df5715b40ea4434d23e5`;
const loadWeather = (city) => {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data))
}

const displayWeather = (data) => {
    console.log(data);
    const temperature = document.getElementById('metric');
    temperature.innerText = data.main.temp;
    const clouds = document.getElementById('clouds');
    clouds.innerText = data.weather[0].main
    document.getElementById('cityName').innerText = data.name;
}

const searchBtn = () => {
    // console.log('working');
    const searchValue = document.getElementById('inputValue');
    const city = searchValue.value;
    loadWeather(city);
}

loadWeather('dhaka');















// dda51eb80c54df5715b40ea4434d23e5
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
