document.addEventListener('DOMContentLoaded', () => {  
   // Get the current weather data from OpenWeatherMap API  
   fetch('https://api.openweathermap.org/data/2.5/weather?q=Cozumel,MX&units=imperial&appid=ca1520dfe40aa5f66f93ba299db4f35d')  
   .then(response => response.json())  
   .then(data => {  
    // Display the current weather data  
    // Make sure these elements exist in your HTML  
    document.getElementById('current-temperature').innerHTML = `Current Temperature: ${data.main.temp}°F`;  
    document.getElementById('current-humidity').innerHTML = `Current Humidity: ${data.main.humidity}%`;  
    document.getElementById('next-day-forecast').innerHTML = `Next Day's Forecast: ${data.weather[0].description}`;  
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;  
   });  
   
   // Get the rental data from the JSON file  
   fetch('data/rental-data.json')  
   .then(response => response.json())  
   .then(data => {  
    // Display the rental data in the table  
    const rentalTable = document.getElementById('rental-table');  
    if (rentalTable) {  
     const tbody = rentalTable.getElementsByTagName('tbody')[0];  
     data.rentals.forEach(rental => {  
       const row = tbody.insertRow();  
       row.innerHTML =  
        `<td>${rental.type}</td>  
         <td>${rental.maxPersons}</td>  
         <td>$${rental.halfDayReservation}</td>  
         <td>$${rental.fullDayReservation}</td>  
         <td>$${rental.halfDayWalkIn}</td>  
         <td>$${rental.fullDayWalkIn}</td>`;  
     });  
    }  
   });  
   
   // Handle the reservation form submission  
   const reservationForm = document.getElementById('reservation-form');  
   if (reservationForm) {  
    reservationForm.addEventListener('submit', event => {  
     event.preventDefault();  
     // Get the form data  
     const formData = new FormData(event.target);  
     // Send the form data to the server  
     fetch('reservations.html', {  
       method: 'POST',  
       body: formData  
     })  
     .then(response => response.text())  
     .then(data => {  
       // Display a success message  
       alert('Reservation made successfully!');  
     })  
     .catch(error => {  
       // Display an error message  
       alert('Error making reservation!');  
     });  
     window.location.href = 'reservations.html';  
    });  
   }  
   
   // Handle the contact form submission  
   const contactForm = document.getElementById('contact-form');  
   if (contactForm) {  
    contactForm.addEventListener('submit', event => {  
     event.preventDefault();  
     // Get the form data  
     const formData = new FormData(event.target);  
     // Send the form data to the server  
     fetch('contact.html', {  
       method: 'POST',  
       body: formData  
     })  
     .then(response => response.json())  
     .then(data => {  
       // Display a success message  
       alert('Message sent successfully!');  
     })  
     .catch(error => {  
       // Display an error message  
       alert('Error sending message!');  
     })  
    });  
   }  
   
   const weatherElement = document.querySelector('.weather');  
   if (weatherElement) {  
    weatherElement.addEventListener('click', event => {  
     event.preventDefault();  
     event.stopPropagation();  
    });  
   }  
 });
   
