const d = document,
  n = navigator;

export default function webcam(idwebcam) {
  const $video = d.getElementById(idwebcam);

  //No es tan necesario, pero en este caso aplicaremos validacion
  if (n.mediaDevices.getUserMedia) {
    //La funcion es una promesa
    n.mediaDevices
      .getUserMedia({ audio: false, video: true })
      .then((stream) => {
        //Esye es un objeto que devuelve la promesa del metodo geuUserMedia
        console.log(stream);
        //La etiqueta video espera un src etieuqta source del video, pero como stream eds un objeto debemos enviarle como srcObject
        $video.srcObject = stream;
        //Para que los movimientos que hagamos dentro de la webcam se vean, colocaremos el video.play
        $video.play();
      })
      .catch((err) => {
        //Crear un elemento con el error detectado
        console.log(err);
        $video.insertAdjacentHTML("beforebegin", `<p><mark>${err}</mark></p>`);
      });
  }
}
