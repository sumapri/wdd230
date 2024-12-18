fetch('https://api.openweathermap.org/data/2.5/weather?q=Cozumel,MX&units=imperial&appid=ca1520dfe40aa5f66f93ba299db4f35d')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('current-temperature').innerHTML = `Current Temperature: ${data.main.temp}°F`;
        document.getElementById('current-humidity').innerHTML = `Current Humidity: ${data.main.humidity}%`;
        document.getElementById('next-day-forecast').innerHTML = `Next Day's Forecast: ${data.weather[0].description}`;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
    });
 
  
    document.addEventListener('DOMContentLoaded', function() {
      // Fetch the rental data
      fetch('data/rental-data.json')  
          .then(response => response.json())  
          .then(data => {  
              const rentalTable = document.getElementById('rental-table');
              if (rentalTable) {
                  const tbody = rentalTable.getElementsByTagName('tbody')[0];
                  if (tbody) {
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
                  } else {
                      console.error('No <tbody> found in rental table');
                  }
              } else {
                  console.error('Rental table not found');
              }
          })
          .catch(error => {
              console.error("Error fetching rental data: ", error);
          });
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
