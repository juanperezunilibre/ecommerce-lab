const productos = [
    {
        id: 1,
        nombre: "Camisa a rayas",
        descripcion: "Camisa tropial playera hombre",
        imagen: "",
        precio: 80000,
        descuento: 50,
        valoracion: 4,
    }
]

document.addEventListener("DOMContentLoaded", function() {

    // Se referencia al section que contiene los productos
    let grillaProductos = document.querySelector("#products-grid");

    // Lógica de la card
    // creamos el contenedor la card
    let card = document.createElement("div")
    card.classList.add("card");

    // creamos la imagen
    let imagen = document.createElement("img")
    imagen.src = "https://www.patprimo.com/dw/image/v2/BHFM_PRD/on/demandware.static/-/Sites-storefront_catalog_pat/default/dw221a6097/images/hi-res/2022-2023/camisas-para-hombre-44012927-3559_1.jpg?sw=800&sh=960"
    imagen.classList.add("card-img-top")
    card.appendChild(imagen)

    // cuerpo de la card
    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    card.appendChild(cardBody)

    // titulo de la card
    let cardTitle = document.createElement("h5")
    cardTitle.classList.add("card-title")
    cardTitle.innerText = "Camisa a rayas"
    cardBody.appendChild(cardTitle)

    // descripcion de la card
    let description = document.createElement("p")
    description.classList.add("card-text")
    description.innerText = "Camisa tropial playera hombre"
    cardBody.appendChild(description)

    // contenedor de precios
    let priceWrapper = document.createElement("div")
    priceWrapper.classList.add("price-content")
    cardBody.appendChild(priceWrapper)

    // precios
    let price1 = document.createElement("span")
    let price2 = document.createElement("span")

    price1.innerText = "$ 75.000"
    price2.innerText = "$ 80.000"
    priceWrapper.append(price1, price2)

    // valoracion
    let rating = valoracionProducto(3)
    cardBody.appendChild(rating)

    // boton
    let buttonWrapper = document.createElement("div")
    buttonWrapper.classList.add("d-grid")

    let button = document.createElement("button")
    button.classList.add("btn")
    button.classList.add("btn-primary")
    button.innerText = "Agregar al carrito"
    buttonWrapper.appendChild(button)

    cardBody.appendChild(buttonWrapper)


    // añadimos la card a la grilla de productos
    grillaProductos.appendChild(card)
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


