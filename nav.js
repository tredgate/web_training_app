// nav.js
// Dynamically injects the navigation menu into the element with id="main-nav"
document.addEventListener("DOMContentLoaded", function () {
  const navMenu = `
    <ul>
      <li><a href="index.html" id="home">Home</a></li>
      <li><a href="dynamic-content.html" id="dynamic-content">Dynamic Content</a></li>
      <li><a href="contact.html" id="contact">Contact</a></li>
      <li><a href="registration.html" id="registration">Registration</a></li>
      <li><a href="web-actions.html" id="web-actions">Web Actions</a></li>
      <li><a href="aria-testing.html" id="aria-testing">ARIA Testing</a></li>
    </ul>
  `;
  const nav = document.getElementById("main-nav");
  if (nav) {
    nav.innerHTML = navMenu;
  }
});
