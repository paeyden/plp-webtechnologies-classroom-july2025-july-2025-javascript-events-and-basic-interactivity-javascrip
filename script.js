// Part 1: Event Handling
const greetingElement = document.getElementById('greeting');
const changeTextBtn = document.getElementById('changeTextBtn');

changeTextBtn.addEventListener('click', () => {
  greetingElement.textContent = 'Hi Mercy! 🎉';
});

// Part 2: Interactive Elements
// Counter
let count = 0;
const counterValue = document.getElementById('counterValue');
document.getElementById('increaseBtn').addEventListener('click', () => {
  count++;
  counterValue.textContent = count;
});
document.getElementById('decreaseBtn').addEventListener('click', () => {
  count--;
  counterValue.textContent = count;
});

// Dark/Light Mode Toggle
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Part 3: Form Validation
const signupForm = document.getElementById('signupForm');
const formMessage = document.getElementById('formMessage');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // stop page reload

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  // Simple validation
  if (name.length < 2) {
    formMessage.textContent = '❌ Name must be at least 2 characters.';
    formMessage.style.color = 'red';
    return;
  }

  // Email regex (basic)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = '❌ Please enter a valid email.';
    formMessage.style.color = 'red';
    return;
  }

  if (password.length < 6) {
    formMessage.textContent = '❌ Password must be at least 6 characters.';
    formMessage.style.color = 'red';
    return;
  }

  // Success
  formMessage.textContent = '✅ Form submitted successfully!';
  formMessage.style.color = 'green';
  signupForm.reset();
});
