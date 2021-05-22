const d = document,
  w = window,
  n = navigator;

export default function networkStatus() {
  //FUNCION PARA AGREGAR Y ELIMINAR LA CLASE ONLINE O OFFLINE
  const isOnLine = () => {
    const $div = document.createElement("div");

    if (n.onLine) {
      $div.textContent = "Conexion Reestablecida";
      $div.classList.add("online");
      $div.classList.remove("offline");
    } else {
      $div.textContent = "Conexion Perdida";
      $div.classList.add("offline");
      $div.classList.remove("online");
    }
    //INSERTAR EL DIV COMO PRIMER HIJO DEL BODY
    d.body.insertAdjacentElement("afterbegin", $div);
    //SETTIMEOUT PARA ELIMINAR EL DIV QUE SE VA AGREGANDO
    setTimeout(() => d.body.removeChild($div), 2500);
  };
  //ONLINE O OFFLINE QUE DETERMINA SI ESTAMOS CONECTADOS O DESCONECTADOS.
  w.addEventListener("online", isOnLine);
  w.addEventListener("offline", isOnLine);
}
