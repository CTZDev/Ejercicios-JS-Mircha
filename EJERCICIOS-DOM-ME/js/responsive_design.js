const d = document,
  w = window;
//Aplicable para elementos embebidos. Para no demorar en carga de pagina.
export default function responsiveMatchMedia(idElement, mediaQuerie, mobileContent, desktopContent) {
  const $id = d.getElementById(idElement);
  let breakPoint = w.matchMedia(mediaQuerie);

  const responsive = (e) => {
    e.matches ? ($id.innerHTML = desktopContent) : ($id.innerHTML = mobileContent);
  };

  //FORMA A USAR
  breakPoint.addEventListener("change", responsive);
  responsive(breakPoint);

  //OTRA FORMA
  //Este metodo esta en deshuso , dsps aplicaremos el evento change
  // breakpoint.addListener(responsive);
  // responsive(breakpoint);
}
