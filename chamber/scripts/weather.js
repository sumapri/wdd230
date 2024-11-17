// weather.js

const apiKey = 'YOUR_API_KEY';  // Replace with your actual OpenWeatherMap API key
const city = 'YOUR_CITY';        // Replace with the city you want the weather for
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

document.addEventListener('DOMContentLoaded', () => {
    // Fetch current weather data
    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            
            document.getElementById('current-weather').textContent = `Weather: ${weatherDescription}`;
            document.getElementById('current-temp').textContent = `Temperature: ${temperature}°F`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
    
    // Fetch 3-day forecast data
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            const forecastContainer = document.getElementById('forecast');
            forecastContainer.innerHTML = '';  // Clear any existing forecast data

            // Loop through the forecast data (3 days)
            let forecastHtml = '';
            for (let i = 0; i < 3; i++) {
                const day = data.list[i * 8];  // Every 8th entry represents a new day
                const dayTemp = day.main.temp;
                const dayWeather = day.weather[0].description;
                const date = new Date(day.dt * 1000).toLocaleDateString();

                forecastHtml += `
                    <div class="forecast-day">
                        <p><strong>${date}</strong></p>
                        <p>Temp: ${dayTemp}°F</p>
                        <p>${dayWeather}</p>
                    </div>
                `;
            }
            forecastContainer.innerHTML = forecastHtml;
        })
        .catch(error => console.error('Error fetching forecast data:', error));
});
