const d = document,
  w = window;

//Aplicable para elementos embebidos. Para no demorar en carga de pagina.
export default function responsiveDesign(idElement, mediaQuerie, mobileContent, desktopContent) {
  let breakpoint = w.matchMedia(mediaQuerie),
    id = d.getElementById(idElement);

  const responsive = (e) => {
    return e.matches ? (id.innerHTML = desktopContent) : (id.innerHTML = mobileContent);
  };

  breakpoint.addEventListener("change", responsive);
  responsive(breakpoint);
}
