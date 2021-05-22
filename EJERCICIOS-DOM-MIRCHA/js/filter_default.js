const d = document;

export default function searchFilters(input, card) {
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      if (e.key === "Escape") e.target.value = "";

      d.querySelectorAll(card).forEach((el) =>
        el.textContent.toLowerCase().includes(e.target.value) ? el.classList.remove("filter") : el.classList.add("filter")
      );
    }
  });
}
