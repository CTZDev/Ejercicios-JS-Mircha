const d = document,
  n = navigator;

export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    success = (position) => {
      console.log("GEOLOCALIZACION", position);
      let coords = position.coords;
      let latitude = coords.latitude,
        longitude = coords.longitude,
        accuracy = coords.accuracy;

      $id.innerHTML = `
      <p>Tu posicion actual es:</p>
      <ul>
      <li>Latitud: <b>${latitude}</b></li>
      <li>Longitud: <b>${longitude}</b></li>
      <li>Precision: <b>${accuracy} metros</b></li>
      </ul>
      <a href="https://www.google.com/maps/@${latitude},${longitude},19z" target="_blank" rel="noopener">Ver en Google Maps</a>
      `;
    },
    error = (err) => {
      $id.innerHTML = `
      <p><mark>Error: ${err.code}: ${err.message}</mark></p>
      `;
      console.log(`Error: ${err.code}: ${err.message}`);
    },
    options = {
      enableHighAccuracy: true, //Por default esta en false, al hacerle true, le decimos al disp. que tenga la mejor lectura(depende de GPS, red,etc)
      maximumAge: 0, // Para que no se guarde en caché las lecturas (cd vez que se tenga una lectura no tenga como referencia la anterior)
      timeout: 6000, //Tiempo que demorara en la lectura
    };

  n.geolocation.getCurrentPosition(success, error, options);
}
