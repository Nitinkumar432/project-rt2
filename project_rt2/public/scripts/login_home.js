document.addEventListener('DOMContentLoaded', () => {
    fetch('/check_login', { method: 'GET', credentials: 'include' })
        .then(response => response.json())
        .then(data => {
            if (data.loggedIn) {
                window.location.href = '/home'; // Redirect to home if already logged in
            }
        })
        .catch(error => console.error('Error checking login status:', error));
});
