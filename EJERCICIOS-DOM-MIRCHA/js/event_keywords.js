export function shorCuts(e) {
  if (e.keyCode === 65 && e.altKey) {
    alert("PRESIONASTE LA TECLA ALT + A");
  }
  if (e.keyCode === 67 && e.altKey) {
    confirm("PRESIONASTE LA TECLA ALT + C");
  }
  if (e.keyCode === 80 && e.altKey) {
    prompt("PRESIONASTE LA TECLA ALT + P");
  }
}

const d = document;
let [x, y] = [0, 0];

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    $limitsBall = $ball.getBoundingClientRect(),
    $limitsStage = $stage.getBoundingClientRect();

  switch (e.keyCode) {
    case 37:
      if (`${$limitsBall.left - 10}` > $limitsStage.left) {
        x--;
        e.preventDefault();
      }
      break;
    case 38:
      if (`${$limitsBall.top - 10}` > $limitsStage.top) {
        y--;
        e.preventDefault();
      }

      break;
    case 39:
      if (`${$limitsBall.right + 10}` < $limitsStage.right) {
        x++;
        e.preventDefault();
      }
      break;
    case 40:
      if (`${$limitsBall.bottom + 10}` < $limitsStage.bottom) {
        y++;
        e.preventDefault();
      }
      break;
    default:
      break;
  }

  $ball.style.transform = `translate(${x * 10}px , ${y * 10}px)`;
}
