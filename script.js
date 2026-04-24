const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const icon = toggleBtn.querySelector("i");

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

function updateIcon() {
  if (body.classList.contains("dark")) {
    icon.setAttribute("data-lucide", "sun");
  } else {
    icon.setAttribute("data-lucide", "moon");
  }
  lucide.createIcons();
}

updateIcon();

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    body.classList.contains("dark") ? "dark" : "light",
  );

  updateIcon();
});

const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
    sidebar.classList.remove("active");
  }
});
