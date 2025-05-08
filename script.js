document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('carOrderForm');
    const notification = document.getElementById('notification');
    const modal = document.getElementById('orderModal');
    const modalOverlay = document.getElementById('modalOverlay');

    const showNotification = (message, isError = false) => {
        notification.textContent = message;
        notification.style.display = 'block';
        notification.style.backgroundColor = isError ? '#e74c3c' : '#2ecc71';
        notification.style.color = 'white';

        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    };

    const validateField = (input) => {
        const errorElement = input.nextElementSibling;
        let isValid = true;

        if (input.required && !input.value) {
            errorElement.textContent = 'This field is required';
            isValid = false;
        } else if (input.type === 'email' && !input.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            errorElement.textContent = 'Please enter a valid email address';
            isValid = false;
        } else if (input.id === 'name' && !input.value.match(/^[A-Za-z\s]+$/)) {
            errorElement.textContent = 'Name should contain only letters and spaces';
            isValid = false;
        }

        errorElement.style.display = isValid ? 'none' : 'block';
        input.style.borderColor = isValid ? '#ddd' : '#e74c3c';
        return isValid;
    };

    const sanitizeInput = (input) => {
        return input.replace(/[<>]/g, '');
    };

    const showModal = () => {
        modalOverlay.style.display = 'block';
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Force reflow
        modal.offsetHeight;
        
        // Add visible class
        modal.classList.add('visible');
    };

    window.closeModal = () => {
        modal.classList.remove('visible');
        setTimeout(() => {
            modalOverlay.style.display = 'none';
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    };

    form.addEventListener('submit', async (e) => {
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

        // Zbieranie wybranych dodatków
        const selectedExtras = Array.from(form.querySelectorAll('input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.value);

        const formData = {
            name: sanitizeInput(form.name.value),
            email: sanitizeInput(form.email.value),
            carModel: form.carModel.value,
            brand: form.brand.value,
            color: form.color.value,
            extras: selectedExtras
        };

        try {
            const submitButton = form.querySelector('.submit-btn');
            submitButton.disabled = true;
            submitButton.textContent = 'Processing...';

            // Krótsze opóźnienie
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Pokaż modal
            showModal();
            console.log('Modal should be visible now');
            
            // Reset form i przycisk
            submitButton.disabled = false;
            submitButton.textContent = 'Place Order';
            
            console.log('Order details:', formData); // Dla debugowania
        } catch (error) {
            showNotification('Error placing order. Please try again.', true);
        }
    });

    // Real-time validation
    form.querySelectorAll('input, select').forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => validateField(input));
    });

    // Close modal when clicking outside
    modalOverlay.addEventListener('click', closeModal);
});
