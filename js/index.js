function loadBr() {
  // Open 'br.html' in a new tab
  window.open('br.html', '_blank'); // Opens in a new tab
}

function loadEn() {
  // Open 'en.html' in a new tab
  window.open('en.html', '_blank'); // Opens in a new tab
}

function loadEs() {
  // Open 'es.html' in a new tab
  window.open('es.html', '_blank'); // Opens in a new tab
}

function setLanguage(flag) {
  // Change the displayed flag to the selected language's flag
  document.getElementById('current-language-icon').src = 'assets/' + flag;
}
