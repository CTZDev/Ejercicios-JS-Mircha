const $itemsCard = document.getElementById("items-card");
const $products = document.getElementById("products");
const $footer = document.getElementById("footer");
const $templateCard = document.getElementById("template-card").content;
const $templateCart = document.getElementById("template-cart").content;
const $templateCartFooter = document.getElementById("template-cart-footer").content;
const $fragment = document.createDocumentFragment();
let shoppingCart = {}; //COLECCION DE PRODUCTOS

//Conexion a Fetch con api de JSON
const fetchData = async () => {
  try {
    const response = await fetch("api.json");
    const data = await response.json();
    drawCard(data);
  } catch (error) {
    alert(`Error: ${error}`);
  }
};

// Funcion donde se capturan los datos del JSON y se dibuja el contenido
const drawCard = (data) => {
  data.forEach((el) => {
    $templateCard.querySelector(".card-title").textContent = el.title;
    $templateCard.querySelector(".card-text").textContent = el.precio;
    $templateCard.querySelector("img").setAttribute("src", el.thumbnailUrl);
    $templateCard.querySelector("img").setAttribute("alt", el.title);
    $templateCard.querySelector(".btn-dark").dataset.id = el.id;

    const $clone = $templateCard.cloneNode(true);
    $fragment.appendChild($clone);
  });
  $itemsCard.appendChild($fragment);
};

//Funcion donde asignamos el padre del elemento en cuestion
const addItemCart = (e) => {
  setItemCart(e.target.parentElement);
};
//Funcion donde se obtiene el contenido a modo de objeto de cada producto (parentElement) - asignacion de propiedades
const setItemCart = (objectCart) => {
  const product = {
    id: objectCart.querySelector(".btn-dark").dataset.id,
    title: objectCart.querySelector(".card-title").textContent,
    price: objectCart.querySelector(".card-text").textContent,
    quantity: 1,
  };
  //Si ya hay la propiedad id, significa que aumentaremos el valor.
  if (shoppingCart.hasOwnProperty(product.id)) {
    product.quantity = shoppingCart[product.id].quantity + 1;
  }
  //asignacion del id a cada producto. y le pasamos todo el objeto creado en forma de copia
  shoppingCart[product.id] = { ...product };
  drawTableCart();
};
//Para dibujar el carrito
const drawTableCart = () => {
  $products.innerHTML = "";
  Object.values(shoppingCart).forEach((product) => {
    $templateCart.querySelector("th").textContent = product.id;
    $templateCart.querySelectorAll("td")[0].textContent = product.title;
    $templateCart.querySelectorAll("td")[1].textContent = product.quantity;
    $templateCart.querySelector(".btn-success").dataset.id = product.id;
    $templateCart.querySelector(".btn-danger").dataset.id = product.id;
    $templateCart.querySelector("span").textContent = product.quantity * product.price;
    const $clone = $templateCart.cloneNode(true);
    $fragment.appendChild($clone);
  });
  $products.appendChild($fragment);
  drawFooter();
  //Almacenar en el localStorage, lo que hay dentro de nuestro carrito general
  localStorage.setItem("cart", JSON.stringify(shoppingCart));
};
//Dibujar el footer , empieza vacio. Si no hay ningun producto, como es solo 1 linea usamos innerHTML <th>....
const drawFooter = () => {
  $footer.innerHTML = "";
  if (Object.keys(shoppingCart).length === 0) {
    $footer.innerHTML = `
    <th scope="row" colspan="5">Carrito vacio, puede empezar a comprar!</th>
    `;
    return;
  }
  //Acumular la cantidad y precio
  const quantityProducts = Object.values(shoppingCart).reduce((acc, { quantity }) => acc + quantity, 0);
  const mountTotalProducts = Object.values(shoppingCart).reduce((acc, { price, quantity }) => acc + price * quantity, 0);

  $templateCartFooter.querySelectorAll("td")[0].textContent = quantityProducts;
  $templateCartFooter.querySelector("span").textContent = mountTotalProducts;
  const $clone = $templateCartFooter.cloneNode(true);
  $fragment.appendChild($clone);
  $footer.appendChild($fragment);

  //Cauando se activa el boton del vacio, limpiamos el contenido del arreglo
  const $btnEmptyCart = document.getElementById("empty-cart");
  $btnEmptyCart.addEventListener("click", () => {
    shoppingCart = {};
    drawTableCart();
  });
};

//Llamamos a la cantidad y sumamos 1. Luego, al indice de nuestro carrito, le pasamos una copia del producto con la cantidad aumentada
//Boton de interaccion con el de sumar cantidad del producto
const btnActionSum = (e) => {
  const product = shoppingCart[e.target.dataset.id];
  product.quantity++;
  shoppingCart[e.target.dataset.id] = { ...product };
  drawTableCart();
};

//Boton de interaccion con el de restar cantidad del producto
const btnsubtraction = (e) => {
  const product = shoppingCart[e.target.dataset.id];
  product.quantity--;
  if (product.quantity === 0) {
    delete shoppingCart[e.target.dataset.id];
  }
  drawTableCart();
};

//Cuando se carga el contenido del DOM
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
  if (localStorage.getItem("cart")) {
    shoppingCart = JSON.parse(localStorage.getItem("cart"));
    drawTableCart();
  }
});

$itemsCard.addEventListener("click", (e) => {
  if (e.target.matches(".btn-dark")) {
    addItemCart(e);
  }
  e.stopPropagation();
});

$products.addEventListener("click", (e) => {
  if (e.target.matches(".btn-success")) {
    btnActionSum(e);
  }
  if (e.target.matches(".btn-danger")) {
    btnsubtraction(e);
  }
  e.stopPropagation();
});
