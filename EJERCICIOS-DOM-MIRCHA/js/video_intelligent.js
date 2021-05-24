const d = document;

export default function smartVideo() {
  const $videos = d.querySelectorAll("video[data-media-video]");

  const callback = (entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? entry.target.play() : entry.target.pause();

      d.addEventListener("visibilitychange", () => {
        if (d.visibilityState === "visible" && entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    });
  };

  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5,
  });

  $videos.forEach((video) => observer.observe(video));
}
