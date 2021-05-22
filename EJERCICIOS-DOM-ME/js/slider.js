const d = document;

export default function sliderResponsive(slider, slide, btnLeft, btnRight) {
  const $slider = d.querySelector(slider),
    $slide = d.querySelectorAll(slide),
    $left = d.querySelector(btnLeft),
    $right = d.querySelector(btnRight);

  let i = 0,
    slideCount = $slide.length;

  d.addEventListener("click", (e) => {
    if (e.target === $left) {
      if (i <= 0) {
        i = slideCount - 1;
        $slider.style.transform = `translate(-${i * 100}%)`;
      } else {
        i--;
        $slider.style.transform = `translate(-${i * 100}%)`;
      }
    }

    if (e.target === $right) {
      if (i < slideCount - 1) {
        i++;
        $slider.style.transform = `translate(-${i * 100}%)`;
      } else {
        i = 0;
        $slider.style.transform = `translate(-${i * 100}%)`;
      }
    }
  });
}
