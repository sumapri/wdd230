// Select the DOM elements for output
const yearCopyright = document.querySelector("#currentYear");
const pageLastModified = document.querySelector("#lastModified");
const navbar = document.getElementById('navigation');
const hamburger = document.getElementById('menu'); // Ensure hamburger is defined



// Set the current year and last modified date dynamically
yearCopyright.textContent = new Date().getFullYear();
pageLastModified.textContent = document.lastModified; // Consider formatting if necessary

document.getElementById("menu").addEventListener("click", function() {
    this.classList.toggle("open");
    document.querySelector("#navigation .header-main-nav").classList.toggle("open");
  });

// On page load, check if dark mode is enabled
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});   

 {
    const membersContainer = document.getElementById('members-container');
    let membersData = [];

    // Fetch the JSON data
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            membersData = data;
            displayMembers('grid'); // Default view
        })
        .catch(error => {
            console.error('Error loading JSON data:', error);
            membersContainer.innerHTML = '<p>Error loading member data. Please try again later.</p>';
        });
        

    // Function to generate HTML for each member card
    function generateMemberHTML(member, viewType) {
        const imageSrc = member.image ? `images/${member.image}` : 'images/default.jpg'; // Use default image if missing
        return `
            <div class="member-card">
                <img src="${imageSrc}" alt="${member.name} logo">
                <h3>${member.name || 'Unknown'}</h3>
                <p>${member.address || 'Address not available'}</p>
                <p>Phone: ${member.phone || 'N/A'}</p>
                <p>Website: <a href="${member.website || '#'}" target="_blank">${member.website || 'No website'}</a></p>
                <p>Membership Level: ${member.membership_level || 'N/A'}</p>
            </div>
        `;
    }
    

    // Function to display members in the selected view (grid or list)
function displayMembers(viewType) {
    // Clear current content in the container
    membersContainer.innerHTML = '';
    
    // Loop through members data and generate HTML for each member
    membersData.forEach(member => {
        membersContainer.innerHTML += generateMemberHTML(member, viewType);
    });

    // Apply the appropriate class based on the viewType passed
    if (viewType === 'grid') {
        membersContainer.className = 'grid-view'; // Apply grid layout
    } else {
        membersContainer.className = 'list-view'; // Apply list layout
    }
}


    // Toggle view between grid and list
    window.toggleView = function(viewType) {
        displayMembers(viewType);
    };
};
if (yearCopyright) {
    yearCopyright.textContent = new Date().getFullYear();
}

if (pageLastModified) {
    pageLastModified.textContent = document.lastModified;
}



