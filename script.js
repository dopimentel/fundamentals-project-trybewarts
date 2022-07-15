const btnSend = document.getElementById('btn-send');
const email = document.getElementById('email');
const password = document.getElementById('password');

function validation(event) {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
