const d = document,
  n = navigator;

export default function getGeolocation(idlocation) {
  const $id = d.getElementById(idlocation),
    $linkMaps = d.createElement("a");

  n.geolocation.getCurrentPosition((position) => {
    console.log("GEOLOCATION", position);
    let latitude = position.coords.latitude,
      longitude = position.coords.longitude,
      accuracy = position.coords.accuracy;

    $id.innerHTML = `
    <p>Tu posicion actual es:</p>
    <ul>
    <li>Latitud: <b>${latitude}</b></li>
    <li>Longitud: <b>${longitude}</b></li>
    <li>Precision: <b>${accuracy} mts. </b></li>
    </ul>
    `;

    $linkMaps.setAttribute("target", "_blank");
    $linkMaps.setAttribute("rel", "noopener");
    // $linkMaps.setAttribute("href", `https://www.google.com/maps/@${latitude},${longitude},18z`);
    //z es el nivel de zoom (1-20) // t es el tipo de mapa ("m" mapa, "k" satélite, "h" híbrido, "p" terreno, "e" GoogleEarth)
    //q es la consulta de búsqueda, si tiene el prefijo loc:, entonces Google asume que es una lat lon separada por un +
    $linkMaps.setAttribute("href", `http://maps.google.com/maps?z=18&t=m&q=loc:${latitude}+${longitude}`);
    $linkMaps.textContent = "Ver en Google Maps";
    $id.insertAdjacentElement("beforeend", $linkMaps);
  });
}
