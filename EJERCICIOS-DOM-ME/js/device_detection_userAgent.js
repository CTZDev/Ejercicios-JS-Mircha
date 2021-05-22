const d = document,
  w = window,
  n = navigator,
  ua = n.userAgent;

export default function deviceUserInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/ipad|ipod|iphone/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      mac: () => ua.match(/mac os/i),
      linux: () => ua.match(/linux/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.mac() || this.linux() || this.windows();
      },
    },
    isBrowser = {
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      chrome: () => ua.match(/chrome/i),
      opera: () => ua.match(/opera|opera mini/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      any: function () {
        return this.ie() || this.edge() || this.chrome() || this.opera() || this.firefox() || this.safari();
      },
    };

  // console.log(isMobile.android()); // Detecta disp. android samsung , etc.
  // console.log(isMobile.ios()); // Detecta en mobil los iphone o ipad
  // console.log(isDesktop.windows()); // Detecta al SO, en este caso es windows
  // console.log(isBrowser.chrome()); // Detecta si el navegador chrome , de los demas - safari, opera,etc
  // console.log(isMobile.any()); // Disp. moviles (cualquiera tipo de movil)
  // console.log(isDesktop.any()); // Disp. moviles (cualquiera tipo de computadora de escritorio)
  // console.log(isBrowser.any()); // Disp. moviles (cualquiera tipo de navegador web)

  $id.innerHTML = `
    <ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
    <li>Navegador Web: <b>${isBrowser.any()}</b></li>
    </ul>
    `;

  //Contenido Exclusivo
  if (isBrowser.chrome()) {
    $id.innerHTML += `
      <p>El navegador WEB en el que te encuentres es <mark>CHROME</mark><br/>EL CONTENIDO MOSTRADO SOLO SE VE EN CHROME</p>
      `;
  }
  if (isBrowser.firefox()) {
    $id.innerHTML += `
      <p>El navegador WEB en el que te encuentres es <mark>FIREFOX</mark>EL CONTENIDO MOSTRADO SOLO SE VE EN FIREFOX</p>
      `;
  }

  //VALIDACION DE ACUERDO A UN S.O
  if (isDesktop.linux()) {
    $id.innerHTML += `
      <p>El instalador esta disponible solo para <mark>LINUX</mark></p>
    `;
  }
  if (isDesktop.mac()) {
    $id.innerHTML += `
      <p>El instalador esta disponible solo para <mark>MAC OS</mark></p>
    `;
  }

  //REDIRECCIONES - SOLO PARA DISP. MOVILES - A API
  if (isMobile.any()) {
    w.location.href = "https://pokeapi.co/";
  }
}
