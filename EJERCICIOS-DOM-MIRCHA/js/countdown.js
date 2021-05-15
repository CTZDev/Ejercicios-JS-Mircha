export function countDown(countdown, dateFinish, message) {
  const d = document;

  let seconds = 1000,
    minutes = seconds * 60,
    hour = minutes * 60,
    day = hour * 24;

  const showCountDown = () => {
    let dateStart = new Date().getTime(),
      dateEnd = dateFinish.getTime();
    let marginDate = dateEnd - dateStart;

    if (marginDate < 0) {
      alert(message);
      d.querySelector(countdown).textContent = message;
      clearInterval(timer);
      return;
    }
    let dayFinally = Math.floor(marginDate / day), //Day
      hoursFinally = Math.floor((marginDate % day) / hour), // Hora
      minutesFinally = Math.floor((marginDate % hour) / minutes), // Minutos
      secondsFinally = Math.floor((marginDate % minutes) / seconds); // Segundos
    let dateComplete = `
    ${dayFinally < 10 ? "0" + dayFinally : dayFinally} dias
    ${hoursFinally < 10 ? "0" + hoursFinally : hoursFinally} horas
    ${minutesFinally < 10 ? "0" + minutesFinally : minutesFinally} minutos
    ${secondsFinally < 10 ? "0" + secondsFinally : secondsFinally} segundos
    `;

    d.querySelector(countdown).textContent = dateComplete;
  };

  let timer = setInterval(showCountDown, 1000);
}
