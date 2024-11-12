const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

// Fetch the prophet data
async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  
  // Test the response data by logging it to the console
  console.table(data.prophets);

  // Pass the prophets array to displayProphets function
  displayProphets(data.prophets);
}

getProphetData();

// Function to display the prophets dynamically
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create the card section
    let card = document.createElement('section');

    // Create the h2 element for the full name
    let fullName = document.createElement('h2');
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    // Create the image element for the portrait
    let portrait = document.createElement('img');
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the full name and portrait to the card
    card.appendChild(fullName);
    card.appendChild(portrait);

    // Append the card to the main cards div
    cards.appendChild(card);
  });
}




