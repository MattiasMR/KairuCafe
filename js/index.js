
  document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.getElementById('aboutLink');
    aboutLink.addEventListener('click', function(event) {
      event.preventDefault(); // Evita que el enlace navegue directamente
      window.location.href = 'assets/ingles.pdf'; // Redirige al PDF
    });
  });