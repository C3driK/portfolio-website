const backToTopBtn = document.getElementById("backToTop");
const modal = document.querySelector(".modal");
const seeMoreBtn = document.getElementById("seeMore");
const closeModalBtn = document.getElementById("close-modal");

seeMoreBtn.addEventListener("click", () => {
  modal.classList.toggle("hidden");
  return console.log(modal);
});
closeModalBtn.addEventListener("click", () => modal.classList.add("hidden"));

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

const forBtn = () => {
  document.body.scrollTop = 200;
  document.documentElement.scrollTop = 0;
};
backToTopBtn.addEventListener("click", forBtn);

// Responsive navigation menu
const createMobileMenu = () => {
  const header = document.querySelector("header div");
  const nav = document.querySelector("nav");
  const menuButton = document.createElement("button");

  menuButton.innerHTML = "☰";
  menuButton.id = "menu-toggle";
  menuButton.classList.add("mobile-only");

  menuButton.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  header.insertBefore(menuButton, nav);
};

function setupThemeToggle() {
  // Check for saved theme preference or default to 'dark'
  const currentTheme = localStorage.getItem("theme") || "dark";

  // Apply the saved theme or default on page load
  document.body.classList.add(currentTheme);

  // Create the toggle button
  const themeToggle = document.createElement("button");
  themeToggle.id = "theme-toggle";
  themeToggle.innerHTML = currentTheme === "dark" ? "☀️" : "🌙";
  themeToggle.title =
    currentTheme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  themeToggle.classList.add("theme-toggle");

  // Add the button to the header
  const headerDiv = document.querySelector("header div");
  headerDiv.appendChild(themeToggle);

  // Toggle between light and dark themes
  themeToggle.addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.replace("dark", "light");
      localStorage.setItem("theme", "light");
      themeToggle.innerHTML = "🌙";
      themeToggle.title = "Switch to dark mode";
    } else {
      document.body.classList.replace("light", "dark");
      localStorage.setItem("theme", "dark");
      themeToggle.innerHTML = "☀️";
      themeToggle.title = "Switch to light mode";
    }
  });
}

// Run when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", setupThemeToggle);

// Call this function when the page loads
window.addEventListener("load", createMobileMenu);
