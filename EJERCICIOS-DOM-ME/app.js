import { countDown } from "./js/countdown.js";
import themeDarkBtn from "./js/dark_white_mood.js";
import { moveBall, shorcuts } from "./js/events_keyword.js";
import hamburguerMenu from "./js/menu_hamburguer.js";
import scrollTopBtn from "./js/moveToUp.js";
import { Alarm, digitalClock } from "./js/watch_digital.js";
import responsiveMatchMedia from "./js/responsive_design.js";
import { responsiveTester } from "./js/responsive_tester.js";
import deviceUserInfo from "./js/device_detection_userAgent.js";
import detectedConnection from "./js/detected_connection.js";
import cameraWeb from "./js/camera_web.js";
import getGeolocation from "./js/geolocation.js";
import searchFilter from "./js/search_filter.js";
import digitalWinner from "./js/digital_giveaway.js";
import sliderResponsive from "./js/slider.js";
import scrollSpy from "./js/scrollSpy_intersection_observer.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  //1°param : Boton de Hamburguesa , 2°param: Panel o aside del menu , 3°param: Enlace de cada menu
  hamburguerMenu(".hamburguer", ".panel-menu", ".menu__link");
  digitalClock(".clock", ".btn-start-watch", ".btn-stop-watch");
  Alarm("./assets/perforar_1.mp3", ".btn-start-sound", ".btn-stop-sound");
  countDown(".countdown", new Date("02/02/2022 16:40:00"), "FELICIDADES TIEMPO FINALIZADO!!!!");
  scrollTopBtn(".moveToUp");
  responsiveMatchMedia(
    "r-youtube",
    "(min-width:968px)",
    `<a href="https://youtu.be/rw_h82BJJ4w" target="_blank">Ver video en Youtube - WildVibes & Martin Miller ft. Arild Aas - Far From You (Lyrics) Jamers Remix</a>`,
    `
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/rw_h82BJJ4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `
  );
  responsiveMatchMedia(
    "r-gmaps",
    "(min-width:968px)",
    `<a href="https://goo.gl/maps/vsFY1aoJKw4oxGKK6" target="_blank">Ver el lugar MegaPlaza - Chimbote</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.7583504812383!2d-78.55735330080157!3d-9.104166269955154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab840382eb656d%3A0x756cb259716ea2e3!2sMega%20Plaza!5e0!3m2!1ses-419!2spe!4v1621203260993!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );
  responsiveTester("form-responsive", "btnClose");
  deviceUserInfo("device-info");
  cameraWeb("camera-web");
  getGeolocation("geolocation");
  searchFilter("txtsearch", ".card");
  digitalWinner("btnWinner");
  sliderResponsive(".slider", ".slide", ".slider-container .left", ".slider-container .right");
  scrollSpy();
});

d.addEventListener("keydown", (e) => {
  shorcuts(e);
  moveBall(e, ".ball", ".container-ball");
});

detectedConnection("message-connection");
themeDarkBtn(".dark-theme", "dark-mode");
