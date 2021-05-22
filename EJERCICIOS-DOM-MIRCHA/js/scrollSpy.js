const d = document;

export default function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");

  const callback = (entries) => {
    // console.log(entries);
    entries.forEach((entry) => {
      // console.log(entry);
      const id = entry.target.id;
      // console.log(id);
      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
      }
    });
  };

  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: [0.5, 0.75],
  });
  // console.log("observer", observer);
  $sections.forEach((section) => observer.observe(section));
}
