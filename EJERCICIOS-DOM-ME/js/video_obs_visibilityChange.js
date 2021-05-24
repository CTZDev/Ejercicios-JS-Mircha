const d = document;

export default function playVideoScroll() {
  const $videos = d.querySelectorAll("video[data-video]"); //Aplicable para mas videos, no solo para 1

  const callback = (entries) => {
    entries.forEach((entry) => {
      let vid = entry.target;
      entry.isIntersecting ? vid.play() : vid.pause();

      window.addEventListener("visibilitychange", (e) => {
        // Validar ambos, que se encuentre en la interseccion y que se encuentre tambien en el documento, cuando es true se reproduce
        d.visibilityState === "visible" && entry.isIntersecting ? vid.play() : vid.pause();
      });
    });
  };

  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: [0.5, 0.75],
  });
  $videos.forEach((video) => observer.observe(video));
}
