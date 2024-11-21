import {Carrito} from "./localstorage.js";

function formatoMoneda(numero) {
    const formatter = Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        currencyDisplay: 'code',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
    return formatter.format(numero)
}

function actualizarCantidadProductos() {
    // mostrar la cantidad de elementos del carrito
    let contador = document.querySelector("#contador-carrito")
    contador.innerText = Carrito.totalProductos()
}


export {
    formatoMoneda,
    actualizarCantidadProductos
}