import Carrito from "./localstorage.js";
import {formatoMoneda} from "./utils.js"


document.addEventListener("DOMContentLoaded", function() {
    for (let producto of Carrito.items) {
        pintarTarjeta(producto)
    }
})


function pintarTarjeta(producto) {
    let productContainer = document.querySelector("#productos-carrito")

    // creamos la card
    let card = document.createElement("div")
    card.classList.add("card")

    // creamos el body de la card
    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")

    // creamos la imagen
    let imagen = document.createElement("img")
    imagen.src = producto.imagen
    cardBody.appendChild(imagen)

    // creamos el contenedor de la info
    let productInfo = document.createElement("div")
    productInfo.classList.add("product-info")

    // creamos el nombre, precio, cantidad y subtotal
    let nombre = document.createElement("h5")
    nombre.textContent = producto.nombre
    productInfo.appendChild(nombre)

    let precio = document.createElement("p")
    precio.textContent = `Precio: ${formatoMoneda(producto.precio)}`
    productInfo.appendChild(precio)

    let cantidad = document.createElement("p")
    cantidad.textContent = `Cantidad: ${producto.cantidad}`
    productInfo.appendChild(cantidad)

    let subtotal = document.createElement("p")
    subtotal.textContent = `Subtotal: ${formatoMoneda(producto.subtotal)}`
    productInfo.appendChild(subtotal)

    // creamos el boton

    let boton = document.createElement("button")
    boton.classList.add("btn", "btn-danger")

    // al hacer click en el boton eliminamos el item del carrito y de la vista
    boton.addEventListener("click", function() {
        Carrito.eliminarItem(producto.id)
        productContainer.removeChild(card)
    })

    let iconoEliminar = document.createElement("i")
    iconoEliminar.classList.add("fa", "fa-trash-alt")

    boton.appendChild(iconoEliminar)

    cardBody.appendChild(productInfo)
    cardBody.appendChild(boton)

    card.appendChild(cardBody)
    // añadimos la card al section de productos
    productContainer.appendChild(card)
}