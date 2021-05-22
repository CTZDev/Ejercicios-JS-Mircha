const d = document;
export default function themeDarkBtn(btn, classDark) {
  const $btnDark = d.querySelector(btn),
    $btnDataDark = d.querySelectorAll("[data-dark]");

  const lightMode = () => {
    $btnDark.children[0].classList.remove("hidden");
    $btnDark.children[1].classList.add("hidden");
    $btnDataDark.forEach((el) => el.classList.remove(classDark));
    localStorage.setItem("darkTheme", "light");
  };

  const darkMode = () => {
    $btnDark.children[0].classList.add("hidden");
    $btnDark.children[1].classList.remove("hidden");
    $btnDataDark.forEach((el) => el.classList.add(classDark));
    localStorage.setItem("darkTheme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      if ($btnDark.children[1].classList.contains("hidden")) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("darkTheme") === null) localStorage.setItem("darkTheme", "light");
    if (localStorage.getItem("darkTheme") === "light") lightMode();
    if (localStorage.getItem("darkTheme") === "dark") darkMode();
  });
}
