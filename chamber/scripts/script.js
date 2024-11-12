// Select the DOM elements for output
const yearCopyright = document.querySelector("#currentYear");
const pageLastModified = document.querySelector("#lastModified");
const navbar = document.getElementById('navigation');
const hamburger = document.getElementById('hamburger'); // Ensure hamburger is defined

// Set the current year and last modified date dynamically
yearCopyright.textContent = new Date().getFullYear();
pageLastModified.textContent = document.lastModified; // Consider formatting if necessary

document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});
document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.getElementById('members-container');
    let membersData = [];

    // Fetch the JSON data
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            membersData = data;
            displayMembers('grid'); // Default view
        })
        .catch(error => console.error('Error loading JSON data:', error));

    // Function to generate HTML for each member card
    function generateMemberHTML(member, viewType) {
        if (viewType === 'grid') {
            return `
                <div class="member-card">
                    <img src="images/${member.image}" alt="${member.name} logo">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>Phone: ${member.phone}</p>
                    <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p>Membership Level: ${member.membership_level}</p>
                </div>
            `;
        } else { // List view
            return `
                <div class="member-list-item">
                    <img src="images/${member.image}" alt="${member.name} logo">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>Phone: ${member.phone}</p>
                    <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p>Membership Level: ${member.membership_level}</p>
                </div>
            `;
        }
    }

    // Function to display members in the selected view
    function displayMembers(viewType) {
        membersContainer.innerHTML = '';
        membersData.forEach(member => {
            membersContainer.innerHTML += generateMemberHTML(member, viewType);
        });

        // Apply the correct CSS class based on the view type
        membersContainer.className = viewType + '-view';
    }

    // Toggle view between grid and list
    window.toggleView = function(viewType) {
        displayMembers(viewType);
    };
});

