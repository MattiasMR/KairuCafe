function loadBr() {
  // Load the 'about.html' page content (assuming AJAX or similar for dynamic loading)
  window.location.href = 'br.html'; // Replace with actual page loading mechanism
}

function loadEn() {
  // Load the 'about.html' page content (assuming AJAX or similar for dynamic loading)
  window.location.href = 'en.html'; // Replace with actual page loading mechanism
}

function loadEs() {
  // Load the 'about.html' page content (assuming AJAX or similar for dynamic loading)
  window.location.href = 'es.html'; // Replace with actual page loading mechanism
}

function setLanguage(flag) {
  // Change the displayed flag to the selected language's flag
  document.getElementById('current-language-icon').src = 'assets/' + flag;
}
