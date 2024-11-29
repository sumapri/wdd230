// directory.js
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;


document.addEventListener("DOMContentLoaded", function() {
    // Load members data
    fetch('data/members.json')
        .then(response => response.json())
        .then(members => {
            displayMembers(members);
        })
        .catch(error => console.error('Error loading members data:', error));
  
    // Function to display members in grid or list view
    function displayMembers(members) {
        const container = document.getElementById('membersContainer');
        container.innerHTML = ''; // Clear any existing members
  
        members.forEach(member => {
            // Create member card
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            
            // Add image
            const img = document.createElement('img');
            img.src = `images/${member.image}`;
            img.alt = `${member.name} logo`;
  
            // Add member information
            const name = document.createElement('h3');
            name.textContent = member.name;
  
            const address = document.createElement('p');
            address.textContent = member.address;
  
            const phone = document.createElement('p');
            phone.textContent = `Phone: ${member.phone}`;
  
            const website = document.createElement('a');
            website.href = member.website;
            website.target = "_blank";
            website.textContent = "Visit Website";
  
            // Append elements to the card
            memberCard.appendChild(img);
            memberCard.appendChild(name);
            memberCard.appendChild(address);
            memberCard.appendChild(phone);
            memberCard.appendChild(website);
  
            // Append the card to the container
            container.appendChild(memberCard);
        });
    }
  
    // Toggle between grid and list views
    const gridViewBtn = document.getElementById('gridViewBtn');
    const listViewBtn = document.getElementById('listViewBtn');
    
    gridViewBtn.addEventListener('click', () => {
        document.getElementById('membersContainer').classList.add('grid-view');
        document.getElementById('membersContainer').classList.remove('list-view');
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
    });
  
    listViewBtn.addEventListener('click', () => {
        document.getElementById('membersContainer').classList.add('list-view');
        document.getElementById('membersContainer').classList.remove('grid-view');
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
    });
  });
  
