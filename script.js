const myForm = document.querySelector("#myForm");
myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Get the email input and error element
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    // reseting previous error messages
    emailError.textContent = "";
    emailInput.classList.remove('error');

    // getting the trimmed email value
    const email = emailInput.value.trim();

    // validating email
    if (!email) {
        // empty field
        emailError.textContent = 'Email address is required';
        emailInput.classList.add('error');
        return;
    }

    if (!isValidEmail(email)) {
        // invalid format
        emailError.textContent = 'Please enter a valid email address';
        emailInput.classList.add('error');
        return;
    }


    localStorage.setItem('userEmail', email);
    alert(`Email saved: ${email}`);
    emailInput.value = '';

    // if validation passes, submit the form list (or do something with the email)

    console.log('Valid email submitted:', email);
    
});

// Helper function to validate email format
function isValidEmail(email) {
    // A simple regex for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

window.addEventListener('DOMContentLoaded', () => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
        console.log('Previously stored email:', storedEmail);
    }
});