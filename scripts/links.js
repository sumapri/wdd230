const baseURL = "https://sumapri.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

// Fetch the links data from the JSON file
async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.lessons);  // Pass the lessons array to displayLinks
}

// Create HTML for each lesson's links dynamically
function displayLinks(weeks) {
  const linksContainer = document.getElementById('links'); // Make sure this matches the element's id in your HTML

  weeks.forEach(week => {
    const weekSection = document.createElement('section');
    const weekTitle = document.createElement('h2');
    weekTitle.textContent = `Lesson ${week.lesson}`;
    weekSection.appendChild(weekTitle);

    const list = document.createElement('ul');

    week.links.forEach(link => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = baseURL + link.url;
      anchor.textContent = link.title;
      listItem.appendChild(anchor);
      list.appendChild(listItem);
    });

    weekSection.appendChild(list);
    linksContainer.appendChild(weekSection);
  });
}

// Call the function to load the links when the page loads
getLinks();
