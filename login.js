// add new comment 


// Select the login form and output elements
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', async (e) => {
    // 1. Prevent the form from submitting the traditional (page-reloading) way
    e.preventDefault();

    // 2. Extract data from the form inputs
    const formData = new FormData(loginForm);
    const data = Object.fromEntries(formData.entries());

    try {
        // 3. Send a POST request to your backend API
        const response = await fetch('https://maira-api.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Oops!!! Login failed.');
        }

        // 4. Store the authentication token securely
        // 4. Store the authentication token securely
        // 4. Store the authentication token securely
        // 4. Store the authentication token securely
        // 4. Store the authentication token securely
        localStorage.setItem('authToken', result.token);

        // 5. Redirect the user to the dashboard
        window.location.href = '/dashboard.html';

    } catch (error) {
        // Display error message to the user
        errorMessage.textContent = error.message;
        errorMessage.style.display = 'block';
    }
});
