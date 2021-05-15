export function shorcuts(e) {
  // altKey / ctrlKey / shiftKey => Para combinar con letras (shorcuts). Si estan en true se presiono esa tecla
  if (e.altKey && e.code === "KeyA") {
    alert("Presionaste Alt + A");
  }
  if (e.altKey && e.code === "KeyP") {
    prompt("Presionaste Alt + P");
  }
  if (e.altKey && e.code === "KeyC") {
    confirm("Presionaste Alt + C");
  }
}

let [x, y] = [0, 0];
export function moveBall(e, ball, containerBall) {
  const d = document;
  const $ball = d.querySelector(ball),
    $containerBall = d.querySelector(containerBall),
    //Usamos el getBoundi... , porque nos permite saber en que posicion nos encontramos de acuerdo al navegador.
    //Top nos indica que nuestro elemento se encuentra a "cantidad px" de la parte superior del body, asi con todos los demas.
    limitsBall = $ball.getBoundingClientRect(),
    limitsContainerBall = $containerBall.getBoundingClientRect();

  //En el caso de "y" en la web la direccion del plano cartesiano es al revés
  switch (e.key) {
    case "ArrowUp":
      if (`${limitsBall.top - 10}` > limitsContainerBall.top) {
        y--;
        e.preventDefault();
      }
      break;
    case "ArrowDown":
      if (`${limitsBall.bottom + 10}` < limitsContainerBall.bottom) {
        y++;
        e.preventDefault();
      }
      break;
    case "ArrowLeft":
      if (`${limitsBall.left - 10}` > limitsContainerBall.left) {
        x--;
        e.preventDefault();
      }
      break;
    case "ArrowRight":
      if (`${limitsBall.right + 10}` < limitsContainerBall.right) {
        x++;
        e.preventDefault();
      }
      break;
    default:
      break;
  }

  $ball.style.transform = `translate(${x * 10}px , ${y * 10}px)`;
}
