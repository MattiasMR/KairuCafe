document.addEventListener('DOMContentLoaded', function() {
  const aboutLink = document.getElementById('aboutLink');
  aboutLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    // Change the URL without reloading the page
    window.history.pushState({}, '', '#about_us');
    // Redirect to the PDF file
    window.location.href = 'assets/ingles.pdf';
  });
});

function setLanguage(flag) {
  // Change the displayed flag to the selected language's flag
  document.getElementById('current-language-icon').src = 'assets/' + flag;
}
