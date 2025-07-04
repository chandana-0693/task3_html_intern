document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");
  const body = document.body;
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");

  // Dark mode memory
  if (localStorage.getItem("mode") === "dark") {
    body.classList.add("dark");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    localStorage.setItem("mode", body.classList.contains("dark") ? "dark" : "light");
  });

  // Navigation logic
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const id = link.getAttribute("href").substring(1);
      sections.forEach(section => {
        section.classList.remove("show");
      });
      const target = document.getElementById(id);
      if (target) target.classList.add("show");
    });
  });

  // Default view: show nothing except landing
  sections.forEach(section => section.classList.remove("show"));
});
// Dark mode toggle logic (if not already present)
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', toggle.checked);
});
