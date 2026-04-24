const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const icon = toggleBtn.querySelector("i");

// Apply saved theme on load
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

// Update icon
function updateIcon() {
  if (body.classList.contains("dark")) {
    icon.setAttribute("data-lucide", "sun");
  } else {
    icon.setAttribute("data-lucide", "moon");
  }
  lucide.createIcons();
}

// Run once on load
updateIcon();

// Handle toggle (ONLY ONE LISTENER)
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    body.classList.contains("dark") ? "dark" : "light",
  );

  updateIcon();
});
