// Usuarios almacenados en un objeto
var users = {
    usuario1: 'password1',
    usuario2: 'password2',
    usuario3: 'password3'
  };
  
  // Obtener referencias a los elementos del formulario
  var form = document.querySelector('form');
  var usernameInput = document.getElementById('username');
  var passwordInput = document.getElementById('password');
  
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
  