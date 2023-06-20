// Usuarios almacenados en un objeto
var users = {
  usuario1: 'password1',
  usuario2: 'password2',
  usuario3: 'password3'
};

// Obtener referencias a los elementos del formulario
var form = document.querySelector('#loginForm');
var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');
var registerButton = document.getElementById('registerButton');

// Manejar el evento de envío del formulario
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  var username = usernameInput.value;
  var password = passwordInput.value;

  // Verificar las credenciales de inicio de sesión
  if (users.hasOwnProperty(username) && users[username] === password) {
    // Inicio de sesión exitoso
    alert('Inicio de sesión exitoso');
    // Redireccionar a otra página
    window.location.href = 'index.html';
  } else {
    // Credenciales incorrectas
    var errorElement = document.createElement('p');
    errorElement.textContent = 'Usuario o contraseña incorrectos';
    errorElement.className = 'error';
    form.appendChild(errorElement);
  }
});

// Evento del botón de registro
registerButton.addEventListener('click', function () {
  // Valores ingresados por el usuario en el formulario de registro
  var newUsername = document.getElementById('newUsername').value;
  var newPassword = document.getElementById('newPassword').value;

  // Verificar si el nombre de usuario ya existe
  if (users.hasOwnProperty(newUsername)) {
    alert('El nombre de usuario ya existe.');
  } else {
    // Agregar un nuevo usuario al objeto users
    users[newUsername] = newPassword;
    alert('Registro exitoso');
  }
});
