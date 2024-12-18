// Get the current weather data from OpenWeatherMap API  
fetch('https://api.openweathermap.org/data/2.5/weather?q=Cozumel,MX&units=imperial&appid=ca1520dfe40aa5f66f93ba299db4f35d')  
   .then(response =>  {
      console.log(response);  // Debug log to check if the fetch is successful
   return response.json();  
})  
   .then(data => {  
      // Display the current weather data  
      document.getElementById('current-temperature').innerHTML = `Current Temperature: ${data.main.temp}°F`;  
      document.getElementById('current-humidity').innerHTML = `Current Humidity: ${data.main.humidity}%`;  
      document.getElementById('next-day-forecast').innerHTML = `Next Day's Forecast: ${data.weather[0].description}`;  
      document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
   })
   .catch(error => {  // Add the catch block to handle errors
      console.error("Error fetching weather data: ", error);  
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
        row.innerHTML = `  
           <td>${rental.type}</td>  
           <td>${rental.maxPersons}</td>  
           <td>$${rental.halfDayReservation}</td>  
           <td>$${rental.fullDayReservation}</td>  
           <td>$${rental.halfDayWalkIn}</td>  
           <td>$${rental.fullDayWalkIn}</td>  
        `;  
      });  
   }else {
      console.error("Rental table not found.");
   }
})
   .catch(error => {  // Add a catch block for this fetch as well
      console.error("Error fetching rental data: ", error);
   }); 
  
// Handle the reservation form submission  
document.getElementById('reservation-form').addEventListener('submit', event => {  
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
   window.location.href = 'reservations.html';  
  }) 
   .catch(error => {  
      // Display an error message  
      alert('Error making reservation!');  
   });  
 
  
// Handle the contact form submission  
document.getElementById('contact-form').addEventListener('submit', event => {  
   event.preventDefault();  
   // Get the form data  
   const formData = new FormData(event.target);  
   // Send the form data to the server  
   fetch('contact.html'), {  
      method: 'POST',  
      body: formData  
   }  
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
 document.querySelector('.weather').addEventListener('click', event => {  
   event.preventDefault();  
   event.stopPropagation();  
 });
