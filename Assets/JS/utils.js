import {carrito} from "./localstorage.js";

function formatoMoneda(numero) {
    const formatter = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        currencyDisplay: 'code',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
    return formatter.format(numero)
}

function actualizarCantidadProductos() {


// mostrar la cantidad de elementos en el carrito

    let contador = document.querySelector("#contador-carrito");
    contador.innerText = carrito.totalProductos()

}

function obtenerVariablesURL() {
    let url = new URL(location.href)
    return url.searchParams
}

export {
    formatoMoneda,
    actualizarCantidadProductos,
    obtenerVariablesURL

}