


const getWeather = async (e) => {
    e.preventDefault();
    
    const city = document.getElementById('city').value;
    const apiKey = '3fc2268476f0c8163dba9db16d7723d8'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const weatherData = await response.json();
        // console.log(weatherData);


        const { main, name, sys, weather } = weatherData;
        const temp = main.temp;
        const country = sys.country;
        const weatherType = weather[0].main;
        const weatherDescription = weather[0].description;

        
        document.getElementById('weatherInfo').innerHTML = `<h2>Weather in ${name}, ${country}</h2>
        <p>Temperature: ${temp}°C</p>
        <p>Weather: ${weatherType}</p>
        <p>Description: ${weatherDescription}</p>`;

        
    } catch (error) {
        // console.error(error);
        document.getElementById('weatherInfo').innerHTML = `<p>City not found</p>`;
    }
};

const weatherForm = document.getElementById('weatherForm');
weatherForm.addEventListener('submit', getWeather);

