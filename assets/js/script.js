//import productos from "/productos.json" with { type: "json" };
import { addProduct, carrito } from "./localstorage.js";
document.addEventListener("DOMContentLoaded", function () {
  fetch("/productos.json")
    .then(response => response.json())
    .then(data => {
      for (let producto of data) {
        dibuarTarjeta(producto);
      }
    })
  //for (let producto of productos) {
    //dibuarTarjeta(producto);
  //}
})

function valoracionProducto(numero) {
  let starWrapper = document.createElement("div");
  starWrapper.classList.add("star-content");

  for (let i = 0; i < 5; i++) {
    let star = document.createElement("i");

    if (i < numero) {
      star.classList.add("fa-solid");
    } else {
      star.classList.add("fa-regular");
    }
    star.classList.add("fa-star");
    starWrapper.appendChild(star);

  }

  return starWrapper;
}

function dibuarTarjeta(producto) {
  //se referencia el section de la pagina de productos 
  let grillaProductos = document.querySelector("#productos-grid");
  console.log(grillaProductos)

  //logica de la card
  //creamos la card

  let card = document.createElement("div");
  card.classList.add("card");
  card.style.width = "18rem";
  //Imagen
  let img = document.createElement("img");
  img.src = producto.img
  img.classList.add("card-img-top");
  card.appendChild(img);
  //Contenido
  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);
  //Titulo
  let cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = producto.nombre;
  cardBody.appendChild(cardTitle);
  //Descripcion
  let descripcion = document.createElement("p");
  descripcion.classList.add("card-text");
  descripcion.innerText = producto.descripcion
  cardBody.appendChild(descripcion);
  //Precio
  let priceWrapper = document.createElement("div");
  priceWrapper.classList.add("price-content");
  cardBody.appendChild(priceWrapper);
  //Valoracion
  let price = document.createElement("span");
  let price2 = document.createElement("span");
  price.innerHTML = formatoMoneda(producto.precio)
  price2.innerHTML = formatoMoneda(producto.precio - (producto.precio * producto.descuento / 100))
  priceWrapper.appendChild(price);
  priceWrapper.appendChild(price2);

  let rating = valoracionProducto(producto);
  cardBody.appendChild(rating);
  //let star = document.createElement("i");
  //star.classList.add("fa-solid", "fa-star");
  //starWrapper.appendChild(star);
  //let star2 = document.createElement("i");
  //star2.classList.add("fa-solid", "fa-star");
  //starWrapper.appendChild(star2);
  //let star3 = document.createElement("i");
  //star3.classList.add("fa-solid", "fa-star");
  //starWrapper.appendChild(star3);
  //let star4 = document.createElement("i");
  //star4.classList.add("fa-regular", "fa-star");
  //starWrapper.appendChild(star4);
  //let star5 = document.createElement("i");
  //star5.classList.add("fa-regular", "fa-star");
  //starWrapper.appendChild(star5)
  let button = document.createElement("button");
  button.classList.add("btn", "btn-primary");
  button.textContent = "Agregar al carrito";
  button.addEventListener("click", function () {
    onProductClick(producto)
})
  cardBody.appendChild(button);


  grillaProductos.appendChild(card);

}

function formatoMoneda(numero) {
  const formatter = Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    currencyDisplay: 'code',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
  return formatter.format(numero);
}

function onProductClick(producto) {
  addProduct(producto);
}