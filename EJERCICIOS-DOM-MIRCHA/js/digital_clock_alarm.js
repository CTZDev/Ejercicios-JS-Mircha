export function digitalClock(clock, startClock, stopClock) {
  let timer;
  const d = document;
  d.addEventListener("click", (e) => {
    if (e.target.matches(startClock)) {
      timer = setInterval(() => {
        let dateHour = new Date().toLocaleTimeString();
        d.querySelector(clock).textContent = dateHour;
        e.target.disabled = true;
      }, 1000);
    }
    if (e.target.matches(stopClock)) {
      clearInterval(timer);
      d.querySelector(startClock).disabled = false;
    }
  });
}

export function Alarm(sound, startAlarm, stopAlarm) {
  let alarm;
  const d = document;
  const $sound = d.createElement("audio");
  $sound.setAttribute("src", sound);

  d.addEventListener("click", (e) => {
    if (e.target.matches(startAlarm)) {
      alarm = setTimeout(() => {
        $sound.play();
        e.target.disabled = true;
      }, 1000);
    }

    if (e.target.matches(stopAlarm)) {
      $sound.pause();
      $sound.currentTime = 0;
      clearTimeout(alarm);
      d.querySelector(startAlarm).disabled = false;
    }
  });
}
