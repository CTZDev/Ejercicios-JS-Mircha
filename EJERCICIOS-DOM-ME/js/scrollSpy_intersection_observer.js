const d = document;
//   $header = d.querySelector(".header").clientHeight;
// let heightPixels = window.innerHeight;

export default function scrollSpy() {
  const options = {
    root: null, // toma el viewport del window x defecto , Depende del padre que queremos asignarle
    //rootMargin: `0px`, // margen con el cual cambiará teniendo en cuenta el margwen que se da arriba (top) o abajo (bottom)
    threshold: [0.5, 0.75], // Se contará una vez que el limite se encuentre del 50 al 75% de la pagina (USAR ESTA OPCION NO LA DEL MARGEN)
  };

  const $menuLink = d.querySelectorAll(".menu .menu__link");
  const callback = (entries) => {
    //Evalua cd elemento del que tenemos
    entries.forEach((entry) => {
      //Realizamos todo el proceso teniendo en cuenta el contenido del section y cambiando solo en el menuLink
      let i = parseInt(entry.target.id.replace("section-", "")) - 1;
      if (entry.isIntersecting) {
        $menuLink[`${i}`].style.color = "#222";
        $menuLink[`${i}`].style.backgroundColor = "#f7df1e";
      } else {
        $menuLink[`${i}`].style.color = "#f7df1e";
        $menuLink[`${i}`].style.backgroundColor = "#222";
      }
      // console.log(`${entry.target.id} is in view ${entry.isIntersecting}`);
    });
  };

  const observer = new IntersectionObserver(callback, options); // Clase que permite hacer un scrollSpy , en el callback se ejecuta todo
  d.querySelectorAll(".section").forEach((section) => observer.observe(section)); // Para observar todos los section que hay.
}
