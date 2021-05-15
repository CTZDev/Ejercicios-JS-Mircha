const d = document;
export default function moodDarkWhite(btn, body) {
  const $btnSons = d.querySelectorAll("i"),
    $wrapper = d.querySelector(body);

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn) || `${e.target.matches(btn)} *`) {
      $btnSons.forEach((el) => {
        el.classList.toggle("hidden");
        $wrapper.classList.toggle("is-active");
      });
    }
  });
}
