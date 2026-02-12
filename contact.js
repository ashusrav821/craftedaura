// Contact Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const submitBtn = contactForm.querySelector('.submit-btn');
    
    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Validate form
        if (!validateForm(formData)) {
            return;
        }
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        formMessage.style.display = 'none';
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Success response
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            
            showMessage('success', 'Thank you for your message! We\'ll get back to you within 24 hours.');
            
            // Reset form
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
            
            // For actual implementation, use:
            /*
            fetch('your-api-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                showMessage('success', 'Thank you for your message! We\'ll get back to you soon.');
                contactForm.reset();
            })
            .catch(error => {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                showMessage('error', 'Oops! Something went wrong. Please try again or call us directly.');
            });
            */
        }, 1500);
    });
    
    // Form validation
    function validateForm(data) {
        // Name validation
        if (data.name.trim().length < 2) {
            showMessage('error', 'Please enter a valid name.');
            return false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showMessage('error', 'Please enter a valid email address.');
            return false;
        }
        
        // Subject validation
        if (!data.subject) {
            showMessage('error', 'Please select a subject.');
            return false;
        }
        
        // Message validation
        if (data.message.trim().length < 10) {
            showMessage('error', 'Please enter a message (at least 10 characters).');
            return false;
        }
        
        return true;
    }
    
    // Show message function
    function showMessage(type, message) {
        formMessage.textContent = message;
        formMessage.className = 'form-message ' + type;
        formMessage.style.display = 'block';
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    // Real-time validation feedback
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#f44336';
            } else {
                this.style.borderColor = '';
            }
        });
        
        input.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(244, 67, 54)') {
                this.style.borderColor = '';
            }
        });
    });
    
    // Email input validation
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('blur', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailRegex.test(this.value)) {
            this.style.borderColor = '#f44336';
        }
    });
    
    // Phone number formatting (optional)
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.length <= 3) {
                value = '(' + value;
            } else if (value.length <= 6) {
                value = '(' + value.slice(0, 3) + ') ' + value.slice(3);
            } else {
                value = '(' + value.slice(0, 3) + ') ' + value.slice(3, 6) + '-' + value.slice(6, 10);
            }
        }
        e.target.value = value;
    });
    
    // Animate form elements on focus
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.01)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// FAQ Accordion Effect (if you want to add expandable FAQs in the future)
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', function() {
        // Add subtle animation on click
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
});

// Add smooth scroll to contact methods
document.querySelectorAll('.contact-method a[href^="tel"], .contact-method a[href^="mailto"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Add a visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});
