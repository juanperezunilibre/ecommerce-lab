import productos from "/productos.json" with { type: "json" };
import Carrito from "./localstorage.js"
import {formatoMoneda} from "./utils.js"

document.addEventListener("DOMContentLoaded", function() {
    for (let producto of productos) {
        dibujarTarjeta(producto)
    }
})

function valoracionProducto(numero) {
    let ratingWrapper = document.createElement("div")
    ratingWrapper.classList.add("star-content")

    for (let i = 0; i < 5; i++) {
        let star = document.createElement("i")

        if (i < numero) {
            star.classList.add("fa-solid")
        } else {
            star.classList.add("fa-regular")
        }

        star.classList.add("fa-star")
        ratingWrapper.appendChild(star)
    }

    return ratingWrapper
}

function dibujarTarjeta(producto) {
    // Se referencia al section que contiene los productos
    let grillaProductos = document.querySelector("#products-grid");

    // Lógica de la card
    // creamos el contenedor la card
    let card = document.createElement("div")
    card.classList.add("card");

    // creamos la imagen
    let imagen = document.createElement("img")
    imagen.src = producto.imagen
    imagen.classList.add("card-img-top")
    card.appendChild(imagen)

    // cuerpo de la card
    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    card.appendChild(cardBody)

    // titulo de la card
    let cardTitle = document.createElement("h5")
    cardTitle.classList.add("card-title")
    cardTitle.innerText = producto.nombre
    cardBody.appendChild(cardTitle)

    // descripcion de la card
    let description = document.createElement("p")
    description.classList.add("card-text")
    description.innerText = producto.descripcion
    cardBody.appendChild(description)

    // contenedor de precios
    let priceWrapper = document.createElement("div")
    priceWrapper.classList.add("price-content")
    cardBody.appendChild(priceWrapper)

    // precios
    let price1 = document.createElement("span")
    let price2 = document.createElement("span")

    if (producto.descuento > 0) {
        price1.innerText = formatoMoneda(producto.precio)
        price2.innerText = formatoMoneda(producto.precio - (producto.precio * producto.descuento / 100))
    } else {
        price1.innerText = " "
        price2.innerText = formatoMoneda(producto.precio)
    }
    priceWrapper.append(price1, price2)

    // valoracion
    let rating = valoracionProducto(producto.valoracion)
    cardBody.appendChild(rating)

    // boton
    let buttonWrapper = document.createElement("div")
    buttonWrapper.classList.add("d-grid")

    let button = document.createElement("button")
    button.classList.add("btn")
    button.classList.add("btn-primary")
    button.innerText = "Agregar al carrito"
    button.addEventListener("click", function () {
        onProductClick(producto)
    })
    buttonWrapper.appendChild(button)

    cardBody.appendChild(buttonWrapper)


    // añadimos la card a la grilla de productos
    grillaProductos.appendChild(card)
}


function onProductClick(producto) {
   Carrito.agregarItem(producto)
}


