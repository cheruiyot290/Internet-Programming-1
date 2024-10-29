 // JavaScript code for form validation
 document.querySelector('form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
        alert('Username must contain only alphanumeric characters');
        event.preventDefault();
    }
    
    if (password.length < 8) {
        alert('Password must have at least 8 characters');
        event.preventDefault();
    }

    if (name.trim() === "") {
        alert('Name cannot be empty');
        event.preventDefault();
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address');
        event.preventDefault();
    }
});

// Function to toggle password visibility
function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var toggleButton = document.getElementById('togglePassword');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.value = 'Hide Password';
    } else {
        passwordInput.type = 'password';
        toggleButton.value = 'Show Password';
    }
}