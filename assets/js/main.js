document.getElementById('year').textContent = new Date().getFullYear();

// The LinkedIn link is a placeholder (href="#") until a real profile URL is
// filled in -- see README "Before you publish this" section. This warns in
// the console rather than failing silently, so it isn't missed.
const linkedin = document.getElementById('linkedinLink');
if (linkedin && linkedin.getAttribute('href') === '#') {
  linkedin.addEventListener('click', (e) => {
    e.preventDefault();
    console.warn('LinkedIn URL not set yet -- update href="#" in index.html (#linkedinLink) with your real profile URL.');
  });
}
