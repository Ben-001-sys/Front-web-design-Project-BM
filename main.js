/**
 * Theme Toggle Handler
 * Manages dark/light mode across all pages
 * Persists user preference in localStorage
 */

function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  const html = document.documentElement;

  // Load saved preference from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    html.classList.add("dark");
  }

  // Handle toggle button click
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      html.classList.toggle("dark");

      // Save preference to localStorage
      const isDark = html.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }
}

// Initialize theme toggle when DOM is ready
document.addEventListener("DOMContentLoaded", initThemeToggle);
