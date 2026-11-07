const form = document.getElementById('login-form');
const message = document.getElementById('message');
const password = document.getElementById('password');
const toggle = document.getElementById('toggle-password');

toggle.addEventListener('click', () => {
  const showing = password.type === 'text';
  password.type = showing ? 'password' : 'text';
  toggle.textContent = showing ? 'Show' : 'Hide';
  toggle.setAttribute('aria-label', showing ? 'Afficher le mot de passe' : 'Masquer le mot de passe');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value.trim();
  const secret = password.value;

  if (!username || !secret) {
    message.textContent = 'Please enter your username and password.';
    return;
  }

  // Démonstration uniquement : aucune donnée n'est envoyée ni enregistrée.
  message.textContent = 'Demo only: authentication is not connected.';
});

document.getElementById('forgot-link').addEventListener('click', (event) => {
  event.preventDefault();
  message.textContent = 'Password recovery is not available in this demo.';
});
