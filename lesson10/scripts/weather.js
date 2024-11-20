// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Replace [your API key] with your actual OpenWeatherMap API key.
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=b2d5351e09ff60abf13231b2624c0633'; 

async function apiFetch() {
  try {
    const response = await fetch(url); // Fetch data from the API
    if (response.ok) {
      const data = await response.json(); // Parse the JSON response
      console.log(data); // For testing purposes
      displayResults(data); // Call function to display results on the page
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch(); // Call the function to execute

// Function to display the weather results on the page
function displayResults(data) {
  // Display temperature with zero decimal places
  currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`; 

  // Get the weather icon and description
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
  const description = data.weather[0].description;

  // Set the image and description in the HTML
  weatherIcon.setAttribute('src', iconUrl);
  weatherIcon.setAttribute('alt', description);
  captionDesc.textContent = capitalize(description); // Capitalize each word
}

// Helper function to capitalize each word in a description
function capitalize(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

