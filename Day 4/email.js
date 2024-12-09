document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
  
    // Basic feedback message
    if (email && password) {
      message.textContent = 'Login successful!';
    } else {
      message.textContent = 'Please fill in all fields.';
      message.style.color = '#e74c3c'; // Change color to red for errors
    }
  });