import {actualizarCantidadProductos, formatoMoneda} from "./utils.js"

document.addEventListener("DOMContentLoaded", function () {
    actualizarCantidadProductos()

    // transformar las variables de la URL a objeto
    let url = new URL(location.href)

    //recuperamos la lista desde el html
    let lista = document.querySelector("#transaction-list-info")
    let icono = document.querySelector("#icono-transaccion")


    //recorremos una a una cada item y recuperamos su llave y valor

    for (let [llave, valor] of url.searchParams) {
        let li = document.createElement("li")

// si el ciclo esta en el elemento amount transformamos el valor a formato moneda
        if (llave === "amount") {
            valor = formatoMoneda(valor)
        }
        if (llave === "created_at" || llave === "updated_at") {
            valor = new Date(valor).toLocaleString()
        }

        if (llave === "status") {
            if (valor === "completed") {
                icono.classList.add("fa-solid", "fa-circle-check")
                icono.style = "color: green; font-size: 100px;"
            } else {
                icono.classList.add("fa-solid", "fa-circle-xmark")
                icono.style = "color: red; font-size: 100px;"

            }

        }
        li.innerText = `${llave}: ${valor}`
        lista.appendChild(li)
    }

})

