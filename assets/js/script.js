let productos = [
    {
        id: 1,
        imagen: "../img/productos/blusa.jpg",
        nombre: "T-shirt pintura interior bodegón",
        descripcion : "Camisetas con diseño de teñido anudado en tonos naranja y rojo. Perfectas para cualquier estilo.",
        precio: 85.000,
        descuento : 50,
        valoracion: 5
    }
]

document.addEventListener("DOMContentLoaded", function() {
    // Se referencia al section que contiene los productos
    let grillaProductos = document.querySelector("#products-grid");

    // Lógica de la card
    // creamos el contenedor de la card
    let card = document.createElement("div");
    card.classList.add("card");

    //creamos la imagen
    let img = document.createElement("img");
    img.src = productos[0].imagen;
    img.classList.add("card-img-top");
    card.appendChild(img);

    //cuerpo de la card
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    //titulo
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = productos[0].nombre;
    cardBody.appendChild(cardTitle);

    // descripción del producto
    let cardDescription = document.createElement("p");
    cardDescription.classList.add("card-text");
    cardDescription.textContent = productos[0].descripcion;
    cardBody.appendChild(cardDescription);

    // contenedor precio
    let priceWrapper = document.createElement("div");
    priceWrapper.classList.add("price-content");
    cardBody.appendChild(priceWrapper);

    // precios
    let price1 = document.createElement("span");
    let price2 = document.createElement("span");

    price1.textContent = `$${productos[0].precio}`;
    price2.textContent = `$${productos[0].precio - productos[0].descuento}`;

    priceWrapper.append(price1, price2);

    // valoración
    let ratingWrapper = document.createElement("div");
    ratingWrapper.classList.add("star-content");

    for (let i = 0; i < 5; i++) {
        let star = document.createElement("i");
        star.classList.add("fas", "fa-star");
        ratingWrapper.appendChild(star);
    }

    cardBody.appendChild(ratingWrapper);

    // Botón de compra

    let buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("d-grid");

    let button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.textContent = "Agregar al carrito";

    buttonWrapper.appendChild(button);

    cardBody.appendChild(buttonWrapper);



    //añadimos la card a la grilla de productos
    grillaProductos.appendChild(card);
});