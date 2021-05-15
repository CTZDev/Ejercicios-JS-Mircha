export default function hamburguerMenu(hamburguerBtn, menuPanel, menuLink) {
  const d = document;
  d.addEventListener("click", (e) => {
    if (e.target.matches(hamburguerBtn) || e.target.matches(`${hamburguerBtn} *`)) {
      d.querySelector(hamburguerBtn).classList.toggle("is-active");
      d.querySelector(menuPanel).classList.toggle("is-active");
    }
    if (e.target.matches(menuLink)) {
      d.querySelector(hamburguerBtn).classList.remove("is-active");
      d.querySelector(menuPanel).classList.remove("is-active");
    }
  });
}
