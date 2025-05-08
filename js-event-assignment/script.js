// Event Handling: Click event for button
document.getElementById('clickButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// Hover effect for button
document.getElementById('hoverButton').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#28a745';
});

document.getElementById('hoverButton').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';  // Reset color on mouseout
});

// Keypress event detection
document.getElementById('keypressInput').addEventListener('input', function(event) {
    document.getElementById('keypressOutput').textContent = `You pressed: ${event.target.value}`;
});

// Interactive Button to change text and color
document.getElementById('colorChangeButton').addEventListener('click', function() {
    this.textContent = 'You clicked me!';
    this.style.backgroundColor = '#007bff';
});

// Image Gallery with Next Slide functionality
let slideIndex = 0;
const images = [
    'https://source.unsplash.com/600x400/?nature',
    'https://source.unsplash.com/600x400/?mountain',
    'https://source.unsplash.com/600x400/?ocean'
];

document.getElementById('nextSlideButton').addEventListener('click', function() {
    slideIndex = (slideIndex + 1) % images.length;
    document.getElementById('galleryImage').src = images[slideIndex];
});

// Tabs switching logic
document.querySelectorAll('.tabButton').forEach(button => {
    button.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        // Hide all tabs first
        document.querySelectorAll('.tabContent').forEach(content => {
            content.style.display = 'none';
        });
        // Show the clicked tab
        document.getElementById(tabId).style.display = 'block';
    });
});

// Form Validation
document.getElementById('myForm').addEventListener('submit', function(event) {
    // Validate email format using regex
    const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById('emailFeedback').textContent = 'Please enter a valid email address.';
        event.preventDefault();  // Prevent form submission if invalid
    } else {
        document.getElementById('emailFeedback').textContent = '';
    }

    // Password validation - minimum 8 characters
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        event.preventDefault();  // Prevent form submission if invalid
    }
});
