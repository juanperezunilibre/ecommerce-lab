const productos = [
    {
        id: 1,
        imagen: "",
        nombre: "Curaçao",
        descripcion: "Come join us to explore the island and experience its vibrant marine life and crystal clear waters, and be ready to live a memorable underwater adventure!",
        precio: 1400,
        precio_original: 1560,
        valoracion: 4,
    }
]

document.addEventListener("DOMContentLoaded", function () {

    //Se referencia al section que contiene los productos
    let productGrid = document.querySelector("#products-grid");

    //creamos la card (contenedor)

    let card = document.createElement("div")
    card.classList.add("card");
    card.style.width = "18rem";

    //creamos la imagen
    let imagen = document.createElement("img")
    imagen.src = "Assets/img/Curacao.jpg"
    imagen.classList.add("card-img-top")
    card.appendChild(imagen)

    //creamos el cuerpo de la card
    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    card.appendChild(cardBody)

    //creamos el título de la card
    let cardTitle = document.createElement("h5")
    cardTitle.classList.add("card-title")
    cardTitle.innerText = "Curaçao"
    cardBody.appendChild(cardTitle)

    //creamos la descripción de la card
    let cardDescription = document.createElement("p")
    cardDescription.classList.add("card-text")
    cardDescription.innerText = "Come join us to explore the island and experience its vibrant marine life and crystal clear waters, and be ready to live a memorable underwater adventure!"
    cardBody.appendChild(cardDescription)

    //creamos el contenedor de precios de la card
    let priceWrapper = document.createElement("div")
    priceWrapper.classList.add("price-content")
    cardBody.appendChild(priceWrapper)

    //creamos los precios
    let precio = document.createElement("span")
    let precioOriginal = document.createElement("span")

    precio.innerText = "1400 USD"
    precioOriginal.innerText = "1560 USD"
    priceWrapper.appendChild(precio)
    priceWrapper.appendChild(precioOriginal)

    //creamos la calificación de estrellas
    let rate = document.createElement("div")
    rate.classList.add("star-content")
    cardBody.appendChild(rate)

    //bucle para no repetir cada estrella
    for (let i = 0; i < 5; i++) {
         let star = document.createElement("i")
    star.classList.add("fa")
    star.classList.add("fa-star")
    rate.appendChild(star)

}
    //creamos el botón de agregar al carrito
    let button = document.createElement("button")
    button.classList.add("btn")
    button.classList.add("btn-primary")
    button.innerText = "Agregar al carrito"
    cardBody.appendChild(button)


    // añadimos la card a la grilla de productos
    productGrid.appendChild(card)
})

