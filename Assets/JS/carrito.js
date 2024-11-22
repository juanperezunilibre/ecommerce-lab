import {carrito} from "./localstorage.js";
import {actualizarCantidadProductos, formatoMoneda} from "./utils.js";

document.addEventListener("DOMContentLoaded", function () {
    actualizarCantidadProductos()
    for (let producto of carrito.items) {
        pintarTarjeta(producto)

    }

    actualizarPrecioTotal()


})

function actualizarPrecioTotal() {


    let precioTotal = carrito.calcularPrecioTotal()
    let total = document.querySelector("#total-cart")
    total.innerText = "Total: " + formatoMoneda(precioTotal)

}

function pintarTarjeta(producto) {
    let productContainer = document.querySelector("#productos-carrito")

    //creamos la card
    let card = document.createElement("div")
    card.classList.add("card")

    //creamos el body de la card
    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")

    //creamos la imagen
    let imagen = document.createElement("img")
    imagen.src = producto.imagen
    cardBody.appendChild(imagen)

    //creamos el contenedor de la info
    let productInfo = document.createElement("div")
    productInfo.classList.add("product-info")

    //creamos el nombre, precio, cantidad y subtotal
    let nombre = document.createElement("h5")
    nombre.textContent = producto.nombre
    productInfo.appendChild(nombre)

    let precio = document.createElement("p")
    precio.textContent = formatoMoneda(producto.precio)
    productInfo.appendChild(precio)

    let cantidad = document.createElement("p")
    cantidad.textContent = producto.cantidad
    productInfo.appendChild(cantidad)

    let subtotal = document.createElement("p")
    subtotal.textContent = formatoMoneda(producto.subtotal)
    productInfo.appendChild(subtotal)

    //creamos el boton

    let boton = document.createElement("button")
    boton.classList.add("btn", "btn-danger")

    // al hacer click en el boton eliminamos el item del carrito y de la vista

    boton.addEventListener("click", function (event) {
        carrito.eliminarItem(producto.id)
        productContainer.removeChild(card)
        actualizarPrecioTotal()
        actualizarCantidadProductos()
    })

    let iconoEliminar = document.createElement("i")
    iconoEliminar.classList.add("fa", "fa-trash-alt")

    boton.appendChild(iconoEliminar)


    cardBody.appendChild(productInfo)
    cardBody.appendChild(boton)

    card.appendChild(cardBody)

    //añadimos la card al section de productos

    productContainer.appendChild(card)
}

//Pagar

let form = document.querySelector("#payment-form")
form.addEventListener("submit", function (event) {
    event.preventDefault() //para evitar que se recargue la página


    //desestructurar los elementos del formulario (recogemos datos para capturarlos)

    let {card_number, expire_date, cvv} = form.elements

    let precioTotal = carrito.calcularPrecioTotal()

    //envío de datos --->http

    fetch("https://payment-processor-production.up.railway.app/api/v1/transaction?api_key=9b4fd34d-4295-4e65-a357-08608b9e6038", {
        method: "POST",  //pasarlos por debajo. GET los pone en el URL
        body: JSON.stringify({
            payment: {
                credit_card: card_number.value,
                expiration_date: expire_date.value,
                cvv: cvv.value,

            },
            transaction: {
                amount: precioTotal,
                currency: "USD"
            }
        })
    }).then(res => res.json()).then(({status_code, trx}) => {
        if (status_code !== undefined) {
            let params = new URLSearchParams(trx).toString()
            location.href = "transaction-result.html?" + params
            if (trx.status === "completed") {
                carrito.limpiar()
            }
        }
    })

})


