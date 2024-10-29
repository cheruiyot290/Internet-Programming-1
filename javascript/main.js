const items = ['Home', 'About', 'Contact', 'Services', 'Portfolio', 'Blog', 'FAQ','Logout'];
const ul = document.querySelector('nav ul');

// Dynamically populate the navigation menu
function populateNavMenu() {
    items.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + item.toLowerCase();
        a.textContent = item;
        li.appendChild(a);
        ul.appendChild(li);

        // Add event listener to each link for navigation
        a.addEventListener('click', function () {
            navigateToSection(item.toLowerCase());
        });
    });
}

// Function to navigate between sections
function navigateToSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

// Show only the home section on load
function showHomePage() {
    document.querySelectorAll('main section').forEach(section => section.style.display = 'none');
    document.getElementById('home').style.display = 'block';
}

// Search functionality to filter navigation items
function searchItems() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredItems = items.filter(item => item.toLowerCase().includes(searchTerm));
    ul.innerHTML = ''; // Clear previous items
    filteredItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + item.toLowerCase();
        a.textContent = item;
        li.appendChild(a);
        ul.appendChild(li);

        // Add event listener to each link for navigation
        a.addEventListener('click', function () {
            navigateToSection(item.toLowerCase());
        });
    });
}

// Handle form submission
document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from refreshing the page
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent to ${email}.`);
    // Optionally, clear the form after submission
    this.reset();
});


// Initialize the page
window.onload = function () {
    populateNavMenu();  // Populate the navigation
    showHomePage();     // Show the home page first
};
