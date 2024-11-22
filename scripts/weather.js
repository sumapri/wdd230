
const apiKey = 'ca1520dfe40aa5f66f93ba299db4f35d';
const city = 'Kansas City, Missouri';
const units = 'imperial';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

// Function to fetch weather data
function fetchWeather() {
    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            // Extract relevant data from API response
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;

            // Update the DOM with the fetched data
            document.getElementById('temperature').innerText = `Temperature: ${temperature}°F`;


            document.getElementById('weather-description').innerText = `Condition: ${description}`;
            
            // Set weather icon based on the fetched icon code
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
            document.getElementById('weather-icon').src = iconUrl;
            document.getElementById('weather-icon').alt = description; // For accessibility
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data. Please try again later.');
        });
}

// Call the fetchWeather function when the page loads
window.onload = fetchWeather;
