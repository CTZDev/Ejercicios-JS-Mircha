const d = document,
  w = window,
  nav = navigator,
  ua = nav.userAgent;

export default function deviceUserAgentInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipod|ipad/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDekstop = {
      mac: () => ua.match(/mac os/i),
      linux: () => ua.match(/linux/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.mac() || this.linux() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      opera: () => ua.match(/opera|opera mini/i),
      firefox: () => ua.match(/firefox/i),
      safari: () => ua.match(/safari/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return this.chrome() || this.opera() || this.firefox() || this.safari() || this.ie() || this.edge();
      },
    };

  /*Contenido Exclusivo */
  if (isMobile.android()) {
    console.log("Estas en dispositivo movil - android");
  }
  if (isMobile.ios()) {
  }
  console.log("Estas en dispositivo movil - ios");

  if (isDekstop.windows()) {
    console.log("Estas en un dispositivo de Escritorio - En Windows");
  }

  if (isBrowser.edge()) {
    console.log("ABRISTE ESTA APP EN EL NAVEGADOR EDGE");
  }

  if (isBrowser.chrome()) {
    console.log("ABRISTE ESTA APP EN EL NAVEGADOR CHROME");
  }

  if (isBrowser.firefox()) {
    console.log("ABRISTE ESTA APP EN EL NAVEGADOR FIREFOX");
  }

  if (isBrowser.opera()) {
    console.log("ABRISTE ESTA APP EN EL NAVEGADOR OPERA");
  }

  /*CPONTENIDO EXCLUSIVO MAS DETALLADO */
  $id.innerHTML = `
    <ul>
    <li>${ua}</li>
    <li>${isMobile.any() ? isMobile.any() : isDekstop.any()}</li>
    <li>${isBrowser.any()}</li>
    </ul>
  `;

  if (isBrowser.chrome()) {
    $id.innerHTML += `<p><mark>Este contenido solo se visualiza en Chrome</mark></p>`;
  }

  if (isBrowser.firefox()) {
    $id.innerHTML += `<p><mark>Este contenido solo se visualiza en FIREFOX</mark></p>`;
  }

  /*RESPECTO A S.O (LINUX/WINDOWS/MAC OS) */
  if (isDekstop.mac()) {
    $id.innerHTML += `<p>Descarga nuestro software para Sistemas Operativos <mark>Mac OS</mark></p>`;
  }
  if (isDekstop.windows()) {
    $id.innerHTML += `<p>Descarga nuestro software para Sistemas Operativos <mark>Windows</mark></p>`;
  }
  if (isDekstop.linux()) {
    $id.innerHTML += `<p>Descarga nuestro software para Sistemas Operativos <mark>Linux</mark></p>`;
  }

  /*REDIRECCIOONES */
  if (isMobile.android()) {
    w.location.href = "https://www.asus.com/supportonly/GL752VW/HelpDesk_Download/";
  }
}
