// Extract the temperature and wind speed values from the DOM
let temperatureElement = document.querySelector('#current-temperature');
let windSpeedElement = document.querySelector('#wind-speed');

// Function to calculate Wind Chill
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3) {
        let windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        document.querySelector('#wind-chill-value').textContent = windChill.toFixed(1);
    } else {
        document.querySelector('#wind-chill-value').textContent = 'N/A';
    }
}

// Callback function runs after the page has finished loading
window.onload = () => {
    // Extract the temperature and wind speed to guarantee that the latest values are used
    let temperature = parseFloat(temperatureElement.textContent);
    let windSpeed = parseFloat(windSpeedElement.textContent);

    // Call the function with actual values
    calculateWindChill(temperature, windSpeed);
};


   
    