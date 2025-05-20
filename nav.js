// nav.js
// Dynamically injects the navigation menu into the element with id="main-nav"
document.addEventListener("DOMContentLoaded", function () {
  const navMenu = `
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="dynamic-content.html">Dynamic Content</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="registration.html">Registration</a></li>
      <li><a href="web-actions.html">Web Actions</a></li>
      <li><a href="aria-testing.html">ARIA Testing</a></li>
    </ul>
  `;
  const nav = document.getElementById("main-nav");
  if (nav) {
    nav.innerHTML = navMenu;
  }
});
