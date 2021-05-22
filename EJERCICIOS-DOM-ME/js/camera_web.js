const d = document,
  n = navigator;

export default function cameraWeb(idCamera) {
  //1° parametro (constraints) = Se le solicita al usuario el permiso para usar su audio y/o micro
  //Se configura el tamaño de la camra en la web, aparte se configura el video, anchura, altura, cam frontal disp. moviles,etc.
  let constraints = {
    audio: false,
    video: {
      width: { min: 1280 },
      height: { min: 720 },
    },
  };
  //El 1° param.definido en una variable anteriormente, lo agregamos dentro del mediaDevices.getUserMedia(1,2,3), devuelve un objeto de tipo MEDIASTREAM, con la que se ejecuta el video y/o audio
  n.mediaDevices
    .getUserMedia(constraints)
    .then((mediaStream) => {
      //Llamamos al elemento HTML para colocar la camara dentro
      const $video = d.getElementById(idCamera);
      // Asignamos todo el objeto pasado como resultado al srcObject del video
      $video.srcObject = mediaStream;
      //Ocurre cuando se han cargado metadatos para el audio / video , X EJM : duracion,dimensiones,etc
      $video.onloadedmetadata = function (e) {
        $video.play();
      };
    })
    //SURGE CUANDO HAY ERROR
    .catch((err) => {
      console.log(err.name + ": " + err.message);
    });
}
