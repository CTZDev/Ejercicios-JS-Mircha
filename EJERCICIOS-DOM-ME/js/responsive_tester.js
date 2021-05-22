const d = document,
  w = window;

export function responsiveTester(btnFormOpen, btnFormClose) {
  const $url = d.getElementById("txtUrl"),
    $form = d.getElementById(btnFormOpen),
    $width = d.getElementById("txtwidth"),
    $height = d.getElementById("txtheight");

  const validityUrl = (url) => {
    if (!url) return alert("La URL se ingreso vacia");
    let urlRegExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/gi;
    return urlRegExp.test(url) ? true : alert("Debes ingresar correctamente una URL");
  };
  const validityMeasure = (w, h) => {
    w = Number(w);
    h = Number(h);
    if (!w || !h) return alert("Los campos de medida estan vacios");
    return w < 50 || w > 1920 || h < 50 || h > 1080 ? alert("La anchura debe estar entre [50 - 1920] // La altura debe estar entre [50-1080]") : true;
  };

  let responsiveWindow;

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      if (validityUrl($url.value) && validityMeasure($width.value, $height.value)) {
        responsiveWindow = w.open(`${$url.value}`, "Windows Tester", `width=${$width.value},height=${$height.value}`);
      }
      e.preventDefault();
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(`#${btnFormClose}`)) {
      if (responsiveWindow !== undefined) responsiveWindow.close();
    }
  });
}
