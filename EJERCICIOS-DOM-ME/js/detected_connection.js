const d = document;
//PARA QUE FUNCIONE ETENEMOS QUE DESCATIVAR EL VIRTUAL BOX EN TODO CASO SE TENGA ESTA APP
export default function detectedConnection(idMessage) {
  const $id = d.getElementById(idMessage);
  //FUNCIONES A EJECUTAR CON EL SETTIMEOUT, SE BORRARAN DSPS DE 3 SEG.
  const online = () => $id.classList.remove("online");
  const offline = () => $id.classList.remove("offline");

  //EVENTOS DE WINDOWS, (ONLINE CUANDO ESTA CONEXCTADO Y OFFLINE , CASO CONTRARIO)
  //SE AGREGAN LAS CLASES INTEGRADAS DENTRO DEL CSS, PARA LAS CONEXIONES
  window.addEventListener("online", (e) => {
    $id.classList.remove("offline");
    $id.classList.add("online");
    setTimeout(online, 3000);
    $id.textContent = "Conexion Restablecida";
  });

  window.addEventListener("offline", (e) => {
    $id.classList.remove("online");
    $id.classList.add("offline");
    setTimeout(offline, 3000);
    $id.textContent = "Conexion perdida";
  });
}
