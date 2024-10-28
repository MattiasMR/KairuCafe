function loadBr() {
  // Load the 'about.html' page content (assuming AJAX or similar for dynamic loading)
  window.location.href = 'br.html'; // Replace with actual page loading mechanism

  // Change the URL to a masked version
  history.pushState(null, null, "/sobre-nos"); // Change '/sobre-nos' to your preferred path
}

function loadEn() {
  // Load the 'about.html' page content (assuming AJAX or similar for dynamic loading)
  window.location.href = 'en.html'; // Replace with actual page loading mechanism

  // Change the URL to a masked version
  history.pushState(null, null, "/about-us"); // Change '/sobre-nos' to your preferred path
}

function loadEs() {
  // Load the 'about.html' page content (assuming AJAX or similar for dynamic loading)
  window.location.href = 'es.html'; // Replace with actual page loading mechanism

  // Change the URL to a masked version
  history.pushState(null, null, "/sobre-nosotros"); // Change '/sobre-nos' to your preferred path
}

function setLanguage(flag) {
  // Change the displayed flag to the selected language's flag
  document.getElementById('current-language-icon').src = 'assets/' + flag;
}
