// Get references to the necessary elements
const nav = document.getElementById("nav");
const menuIcon = document.querySelector(".menu-icon");

// Add an event listener to the menu icon for toggling the menu
menuIcon.addEventListener("click", function () {
  // Toggle the "open" class on the nav element
  nav.classList.toggle("open");
});
