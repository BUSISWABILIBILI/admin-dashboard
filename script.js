/* Typing Animation */
const text = [
  "Frontend Developer",
  "JavaScript Builder",
  "Creating Daily",
  "Future Software Engineer",
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) {
    count = 0;
  }

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing-text").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1200);
  } else {
    setTimeout(type, 80);
  }
})();

/* Theme Toggle */
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  toggleBtn.textContent = document.body.classList.contains("light-mode")
    ? "☀️"
    : "🌙";
});
