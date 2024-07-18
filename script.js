document
  .getElementById("theme-switcher-grid")
  .addEventListener("click", function () {
    this.classList.toggle("night-theme");
    document.body.style.backgroundColor = this.classList.contains("night-theme")
      ? "var(--bg-color-dark)"
      : "var(--bg-color-light)";
  });
