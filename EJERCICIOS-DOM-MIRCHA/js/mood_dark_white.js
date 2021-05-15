const d = document;
export default function darkTheme(btnDark, classDark) {
  const $btn = d.querySelector(btnDark),
    $selectorsDataDark = d.querySelectorAll("[data-dark]");

  let moon = "🌙",
    sun = "☀️";

  const darkMode = () => {
    $selectorsDataDark.forEach((el) => el.classList.add(classDark));
    $btn.textContent = sun;
    localStorage.setItem("theme", "dark");
  };
  const lightMode = () => {
    $selectorsDataDark.forEach((el) => el.classList.remove(classDark));
    $btn.textContent = moon;
    localStorage.setItem("theme", "light");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnDark)) {
      if ($btn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === null) localStorage.setItem("theme", "light");
    if (localStorage.getItem("theme") === "dark") darkMode();
    if (localStorage.getItem("theme") === "light") lightMode();
  });
}
