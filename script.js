// =======================
// Dark Mode Toggle
// =======================
const darkModeBtn = document.getElementById('darkModeToggle');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// =======================
// Counter Functionality
// =======================
let counter = 0;
const counterValue = document.getElementById('counterValue');
document.getElementById('increaseBtn').addEventListener('click', () => {
    counter++;
    counterValue.textContent = counter;
});
document.getElementById('decreaseBtn').addEventListener('click', () => {
    counter--;
    counterValue.textContent = counter;
});

// =======================
// Collapsible FAQ Section
// =======================
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// =======================
// Form Validation
// =======================
const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('formSuccess').textContent = '';

    let valid = true;

    // Name validation
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name cannot be empty.';
        valid = false;
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email.';
        valid = false;
    }

    // Password validation
    const password = document.getElementById('password').value.trim();
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        valid = false;
    }

    // Show success if all fields are valid
    if (valid) {
        document.getElementById('formSuccess').textContent = 'Form submitted successfully!';
        signupForm.reset();
    }
});
