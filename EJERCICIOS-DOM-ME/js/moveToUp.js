const d = document,
  w = window;

export default function scrollTopBtn(btnMove) {
  w.addEventListener("scroll", () => {
    //Conocer posicion del Top cuando se hace scroll
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
    if (scrollTop > 600) {
      d.querySelector(btnMove).classList.add("is-active");
      return;
    }
    d.querySelector(btnMove).classList.remove("is-active");
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnMove) || e.target.matches(`${btnMove} *`)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
