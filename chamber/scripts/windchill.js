// scripts/windchill.js

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3.0) {
        const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2); // Round to two decimal places
    } else {
        return "N/A"; // Not applicable if conditions are not met
    }
}

function updateWindChill() {
    const temperature = parseFloat(document.getElementById('temperature').innerText);
    const windSpeed = parseFloat(document.getElementById('wind-speed').innerText);
    const windChillValue = calculateWindChill(temperature, windSpeed);
    
    document.getElementById('wind-chill').innerText = windChillValue;
}

// Run the wind chill calculation on page load
window.onload = updateWindChill;