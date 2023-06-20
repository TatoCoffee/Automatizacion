// Seleccionamos todos los botones de descarga
const downloadButtons = document.querySelectorAll('.download-button');

// Iteramos sobre cada botón
downloadButtons.forEach(button => {
  // Agregamos un evento de clic a cada botón
  button.addEventListener('click', event => {
    event.preventDefault(); // Evitamos la acción predeterminada del botón
    // Seleccionamos el menú desplegable correspondiente al botón que se hizo clic
    const dropdownMenu = button.nextElementSibling;
    // Alternamos la clase "show" en el menú desplegable para mostrarlo o ocultarlo
    dropdownMenu.classList.toggle('show');
  });
});

// Cerramos el menú desplegable si el usuario hace clic fuera del mismo
window.addEventListener('click', event => {
  if (!event.target.matches('.download-button')) {
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    dropdownMenus.forEach(menu => {
      if (menu.classList.contains('show')) {
        menu.classList.remove('show');
      }
    });
  }
});