import { countDown } from "./js/countdown.js";
import moodDarkWhite from "./js/dark_white_mood.js";
import { moveBall, shorcuts } from "./js/events_keyword.js";
import hamburguerMenu from "./js/menu_hamburguer.js";
import scrollTopBtn from "./js/moveToUp.js";
import { Alarm, digitalClock } from "./js/watch_digital.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  //1°param : Boton de Hamburguesa , 2°param: Panel o aside del menu , 3°param: Enlace de cada menu
  hamburguerMenu(".hamburguer", ".panel-menu", ".menu__link");
  digitalClock(".clock", ".btn-start-watch", ".btn-stop-watch");
  Alarm("./assets/perforar_1.mp3", ".btn-start-sound", ".btn-stop-sound");
  countDown(".countdown", new Date("05/15/2021 16:40:00"), "FELICIDADES TIEMPO FINALIZADO!!!!");
  scrollTopBtn(".moveToUp");
  moodDarkWhite(".mood-dark-white", ".wrapper");
});

d.addEventListener("keydown", (e) => {
  shorcuts(e);
  moveBall(e, ".ball", ".container-ball");
});
