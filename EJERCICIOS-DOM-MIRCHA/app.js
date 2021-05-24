import scrollTopButton from "./js/btn_scroll.js";
import { countDown } from "./js/countdown.js";
import { Alarm, digitalClock } from "./js/digital_clock_alarm.js";
import { moveBall, shorCuts } from "./js/event_keywords.js";
import hamburguerMenu from "./js/hamburguer.js"; //Agregar siempre el "".js"
import darkTheme from "./js/mood_dark_white.js";
import responsiveDesign from "./js/responsive_media.js";
import responsiveTester from "./js/responsive_tester.js";
import deviceUserAgentInfo from "./js/detected_devices_userAgent.js";
import networkStatus from "./js/detected_network.js";
import webcam from "./js/detected_webcam.js";
import getGeolocation from "./js/geolocation.js";
import searchFilters from "./js/filter_default.js";
import draw from "./js/digital_draw.js";
import slider from "./js/carrousel.js";
import scrollSpy from "./js/scrollSpy.js";
import smartVideo from "./js/video_intelligent.js";
import contactFormValidation from "./js/form_validity.js";
import speechReader from "./js/narrator.js";

document.addEventListener("DOMContentLoaded", (e) => {
  //1°param : Boton de Hamburguesa , 2°param: Panel o aside del menu , 3°param: Enlace de cada menu
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock(".clock", ".btn-start-watch", ".btn-stop-watch");
  Alarm("./assets/perforar_1.mp3", ".btn-start-sound", ".btn-stop-sound");
  countDown(".countdown", new Date("05/24/2021 16:40:00"), "FELICIDADES = TIEMPO FINALIZADO");
  scrollTopButton(".scroll-top-btn");
  responsiveDesign(
    "responsive-youtube",
    "(min-width: 968px)",
    `<a href="https://youtu.be/UCCyoocDxBA"
    target = "_blank">
    Introduccion al curso de JavaScript - Mircha</a>`,
    `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
  );
  responsiveDesign(
    "responsive-maps",
    "(min-width: 968px)",
    `<a href="https://goo.gl/maps/8xY9QKQaQqZFv1Tc8"
    target = "_blank">
    Ver Vivero Forestal - Chimbote</a>`,
    `
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2276.0832889114813!2d-78.5917604379387!3d-9.057699375644328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab811f039a99db%3A0xee1ef5ee83152a7f!2sVivero%20Forestal!5e0!3m2!1ses-419!2spe!4v1621187059339!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    `
  );
  responsiveTester("form-responsive");
  deviceUserAgentInfo("user-device");
  webcam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidation();
});

document.addEventListener("keydown", (e) => {
  shorCuts(e);
  moveBall(e, ".ball", ".container-ball");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();
