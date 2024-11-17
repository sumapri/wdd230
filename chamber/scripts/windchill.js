// windchill.js

// Function to calculate wind chill
function calculateWindChill() {
    // Get the temperature and wind speed from the HTML
    const temp = parseFloat(document.getElementById('tempValue').innerText);
    const windSpeed = parseFloat(document.getElementById('windSpeed').innerText);

    // Check if the values meet the wind chill calculation requirements
    if (temp <= 50 && windSpeed > 3) {
        // Wind Chill Formula (Fahrenheit)
        const windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
        
        // Update the wind chill in the HTML
        document.getElementById('windChill').innerText = `${windChill.toFixed(1)}°F`;
    } else {
        // If the conditions are not met, show "N/A"
        document.getElementById('windChill').innerText = "N/A";
    }
}

// Call the function when the page loads
window.onload = calculateWindChill;
