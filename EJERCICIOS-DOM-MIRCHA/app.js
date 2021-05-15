import scrollTopButton from "./js/btn_scroll.js";
import { countDown } from "./js/countdown.js";
import { Alarm, digitalClock } from "./js/digital_clock_alarm.js";
import { moveBall, shorCuts } from "./js/event_keywords.js";
import hamburguerMenu from "./js/hamburguer.js"; //Agregar siempre el "".js"
import darkTheme from "./js/mood_dark_white.js";

document.addEventListener("DOMContentLoaded", (e) => {
  //1°param : Boton de Hamburguesa , 2°param: Panel o aside del menu , 3°param: Enlace de cada menu
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock(".clock", ".btn-start-watch", ".btn-stop-watch");
  Alarm("./assets/perforar_1.mp3", ".btn-start-sound", ".btn-stop-sound");
  countDown(".countdown", new Date("05/24/2021 16:40:00"), "FELICIDADES = TIEMPO FINALIZADO");
  scrollTopButton(".scroll-top-btn");
});

document.addEventListener("keydown", (e) => {
  shorCuts(e);
  moveBall(e, ".ball", ".container-ball");
});

darkTheme(".dark-theme-btn", "dark-mode");
