import productos from "./productos.json" with {type: "json"};
import {agregarProducto, carrito} from "../assets/js/localstorage.js";

document.addEventListener("DOMContentLoaded", function () {
  for (let producto of productos) {
    dibujarTarjeta(producto);
  }
});

function dibujarTarjeta(producto) {
  // Se referencia al section que contiene los productos
  let grillaProductos = document.querySelector("#products-grid");

  // Lógica de la card
  // creamos el contenedor de la card
  let card = document.createElement("div");
  card.classList.add("card");

  //creamos la imagen
  let img = document.createElement("img");
  img.src = producto.imagen;
  img.classList.add("card-img-top");
  card.appendChild(img);

  //cuerpo de la card
  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  //titulo
  let cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = producto.nombre;
  cardBody.appendChild(cardTitle);

  // descripción del producto
  let cardDescription = document.createElement("p");
  cardDescription.classList.add("card-text");
  cardDescription.textContent = producto.descripcion;
  cardBody.appendChild(cardDescription);

  // contenedor precio
  let priceWrapper = document.createElement("div");
  priceWrapper.classList.add("price-content");
  cardBody.appendChild(priceWrapper);

  // precios
  let price = document.createElement("span");
  let discount = document.createElement("span");

  price.innerText = formatoMoneda(producto.precio);
  discount.innerText = formatoMoneda(producto.precio - (producto.precio * producto.descuento) / 100);

  priceWrapper.append(price, discount);

  // valoración
  let rating = valoracionProducto(producto.valoracion);
  cardBody.appendChild(rating);

  // Botón de compra
  let buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add("d-grid");

  let button = document.createElement("button");
  button.classList.add("btn", "btn-primary");
  button.innerHTML = "Agregar al carrito";

  button.addEventListener("click", function () {
    onProductClick(producto);
  });

  buttonWrapper.appendChild(button);
  cardBody.appendChild(buttonWrapper);

  //añadimos la card a la grilla de productos
  grillaProductos.appendChild(card);
};

function formatoMoneda(numero) {
  const formatter = Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      currencyDisplay: 'code',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
  });
  return formatter.format(numero);
};

function valoracionProducto(numero) {
  let ratingWrapper = document.createElement("div");
  ratingWrapper.classList.add("star-content");

  for (let i = 0; i < 5; i++) {
    let star = document.createElement("i");

    if (i < numero) {
      star.classList.add("fa-solid");
    } else {
      star.classList.add("fa-regular");
    };

    star.classList.add("fa-star");

    ratingWrapper.appendChild(star);
  };

  return ratingWrapper;
};

function onProductClick(producto) {
  agregarProducto(producto);
};