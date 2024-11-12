const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

// Fetch data from the JSON URL
async function getProphetData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.table(data.prophets);  // Temporarily log the data to check the structure
        displayProphets(data.prophets);
    } catch (error) {
        console.error('Error fetching the data:', error);
    }
}

getProphetData();

// Function to display the prophets
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Debugging the image URL
        console.log('Image URL:', prophet.imageUrl);

        // Create the elements for each prophet card
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');

        // Set the content for the full name
        fullName.textContent = prophet.fullName;

        // Set attributes for the portrait image
        portrait.setAttribute('src', prophet.imageUrl);  // Use imageUrl for the image source
        portrait.setAttribute('alt', `Portrait of ${prophet.fullName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append elements to the card section
        card.appendChild(fullName);
        card.appendChild(portrait);

        // Append the card to the cards div
        cards.appendChild(card);
    });
}



