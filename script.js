document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('carOrderForm');
    const notification = document.getElementById('notification');

    if (!form) {
        console.error('Form not found!');
        return;
    }

    const showNotification = (message, isError = false) => {
        if (!notification) return;
        
        notification.textContent = message;
        notification.style.display = 'block';
        notification.style.backgroundColor = isError ? '#e74c3c' : '#2ecc71';
        notification.style.color = 'white';

        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    };

    const validateField = (input) => {
        if (!input) return false;

        const errorElement = input.parentElement.querySelector('.error-message');
        if (!errorElement) return true;

        let isValid = true;
        let errorMessage = '';

        if (input.required && !input.value) {
            errorMessage = 'This field is required';
            isValid = false;
        } else if (input.type === 'email' && !input.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            errorMessage = 'Please enter a valid email address';
            isValid = false;
        } else if (input.id === 'name' && !input.value.match(/^[A-Za-z\s]+$/)) {
            errorMessage = 'Name should contain only letters and spaces';
            isValid = false;
        }

        errorElement.textContent = errorMessage;
        errorElement.style.display = isValid ? 'none' : 'block';
        input.style.borderColor = isValid ? '#ddd' : '#e74c3c';
        return isValid;
    };

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formInputs = form.querySelectorAll('input:not([type="checkbox"]), select');
        let isFormValid = true;

        formInputs.forEach(input => {
            if (!validateField(input)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            showNotification('Please check the form for errors', true);
            return;
        }

        const submitButton = form.querySelector('.submit-btn');
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Processing...';
        }

        // Get form data
        const formData = new FormData(form);
        const params = new URLSearchParams();

        // Add all form fields to URL parameters
        for (let [key, value] of formData.entries()) {
            params.append(key, value);
        }

        // Redirect to summary page
        window.location.href = `order-summary.html?${params.toString()}`;
    });

    // Real-time validation
    form.querySelectorAll('input, select').forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => validateField(input));
    });
});
