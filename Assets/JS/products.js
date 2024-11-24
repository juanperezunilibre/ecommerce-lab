import productos from "/productos.json" with {type: "json"};
import {carrito} from "./localstorage.js";
import {actualizarCantidadProductos, formatoMoneda, obtenerVariablesURL} from "./utils.js";

//Se referencia al section que contiene los productos

let productGrid = document.querySelector("#products-grid");

document.addEventListener("DOMContentLoaded", function () {
    pintarCategorias()
    actualizarCantidadProductos()

    let params = obtenerVariablesURL()
    let categoria = params.get("categoria")
    filtrarProductos(categoria)

    //buscar desde la barra

    let searchInput = document.querySelector("#search")
    searchInput.addEventListener("input", (event) => {
        let value = event.target.value
        filtrarProductos(categoria, value)
    })


})

const filtrarProductos = (categoria, nombre = "") => {
    let filtrados
    if (categoria && categoria !== "Todas") {
        filtrados = productos.filter(item => item.categoria === categoria)
    } else if (nombre) {
        filtrados = productos.filter(item => item.nombre.toLowerCase().includes(nombre.toLowerCase()))

    } else {
        filtrados = productos
    }

    productGrid.innerHTML = ""
    for (let producto of filtrados) {
        paintCard(producto)
    }
}

function pintarCategorias() {
    let listaCategorias = document.querySelector("#lista-categorias")
    let categorias = productos.map(item => item.categoria)
    categorias.unshift("Todas")
    console.log(categorias)

    //Limpiamos los duplicados
    categorias = [...new Set(categorias)]
    console.log(categorias)


    //limpiamos los Li con los a internos
    for (let categoria of categorias) {
        let html = `<li><a href="products.html?categoria=${categoria}">${categoria}</a></li>`
        listaCategorias.innerHTML += html
    }
}

//creamos la valoración de estrellas

function valoracionProducto(numero) {
    let rate = document.createElement("div")
    rate.classList.add("star-content")

    //bucle para no repetir cada estrella

    for (let i = 0; i < 5; i++) {
        let star = document.createElement("i")
        if (i < numero) {
            star.classList.add("fa-solid")
        } else {
            star.classList.add("fa-regular")
        }
        star.classList.add("fa-star")
        rate.appendChild(star)
    }


    return rate
}

function paintCard(producto) {


    //creamos la card (contenedor)

    let card = document.createElement("div")
    card.classList.add("card");
    card.style.width = "18rem";

    //creamos la imagen
    let imagen = document.createElement("img")
    imagen.src = producto.imagen
    imagen.classList.add("card-img-top")
    card.appendChild(imagen)

    //creamos el cuerpo de la card
    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    card.appendChild(cardBody)

    //creamos el título de la card
    let cardTitle = document.createElement("h5")
    cardTitle.classList.add("card-title")
    cardTitle.innerText = producto.nombre
    cardBody.appendChild(cardTitle)

    //creamos la descripción de la card
    let cardDescription = document.createElement("p")
    cardDescription.classList.add("card-text")
    cardDescription.innerText = producto.descripcion
    cardBody.appendChild(cardDescription)

    //creamos el contenedor de precios de la card
    let priceWrapper = document.createElement("div")
    priceWrapper.classList.add("price-content")
    cardBody.appendChild(priceWrapper)

    //creamos los precios
    let precio = document.createElement("span")
    let precioOriginal = document.createElement("span")

    precio.innerText = formatoMoneda(producto.precio)
    precioOriginal.innerText = formatoMoneda(producto.precio_original)
    priceWrapper.appendChild(precio)
    priceWrapper.appendChild(precioOriginal)

    // valoración
    let rating = valoracionProducto(producto.valoracion)
    cardBody.appendChild(rating)

    // creamos botón más info
    let buttonInfo = document.createElement("button")
    buttonInfo.classList.add("btn", "btn-primary", "btn-info-color")
    buttonInfo.innerText = "Más información"
    cardBody.appendChild(buttonInfo)


    //creamos el botón de agregar al carrito

    let buttonWrapper = document.createElement("div")
    buttonWrapper.classList.add("d-grid")

    let button = document.createElement("button")
    button.classList.add("btn", "btn-primary", "btn-carrito-color")
    button.innerText = "Agregar al carrito"
    button.addEventListener("click", function () {
        onProductClick(producto)
    })

    buttonWrapper.appendChild(button)
    cardBody.appendChild(buttonWrapper)


    // añadimos la card a la grilla de productos
    productGrid.appendChild(card)

}


function onProductClick(producto) {
    carrito.agregarItem(producto)
    actualizarCantidadProductos()
}
