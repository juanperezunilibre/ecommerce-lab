document.addEventListener("DOMContentLoaded", () => {
    const baseDeDatos = [
        {
            id: 1,
            nombre: "Ohia Black",
            precio: 100,
            imagen: "https://paradisefoundshirts.com/cdn/shop/products/pfms-ohia-black.jpg?v=1653527035&width=540",
            descripcion: "Feel like you're on a night stroll through lush tropical garden in this Ohia Hawaiian shirt in black."
        },
        {
            id: 2,
            nombre: "Cabana Palms Navy",
            precio: 100,
            imagen: "https://paradisefoundshirts.com/cdn/shop/products/pfms-cabana-palms-navy.jpg?v=1681949593&width=540",
            descripcion: "Lounge around in cool island style in this Cabana Palms Navy Hawaiian Shirt that is sure to showcase your chillin' vibe."
        },
        {
            id: 3,
            nombre: "Cabana Palms Navy",
            precio: 100,
            imagen: "https://paradisefoundshirts.com/cdn/shop/products/pfms-cabana-palms-navy.jpg?v=1681949593&width=540",
            descripcion: "Lounge around in cool island style in this Cabana Palms Navy Hawaiian Shirt that is sure to showcase your chillin' vibe."
        }
    ];

    let carrito = [];
    const DOMItem = document.querySelector("#items");

    const DOMContenedorProductos = document.querySelector(".products-container");
    DOMContenedorProductos.classList.add("main-products-container");

    const DOMCarrito = document.querySelector("#carrito");
    const DOMTotal = document.querySelector("#total");
    const DOMbotonVaciar = document.querySelector("#boton-vaciar");

    const RenderizarProductos = () => {
        baseDeDatos.forEach((item) => {
            const contenedorPadre = document.createElement("div");
            contenedorPadre.classList.add("card");

            const contenedorCard = document.createElement("div");
            contenedorCard.classList.add("card-body");

            const titulo = document.createElement("h6");
            titulo.classList.add("card-title");
            titulo.textContent = item.nombre;

            const imagen = document.createElement("img");
            imagen.classList.add("img-fluid");
            imagen.setAttribute("src", item.imagen);

            const textoPrecio = document.createElement("p");
            textoPrecio.classList.add("card-text");
            textoPrecio.textContent = `${item.precio}€`;

            const descripcion = document.createElement("p");
            descripcion.classList.add("card-text");
            descripcion.textContent = item.descripcion;

            const botonAgregarCarrito = document.createElement("button");
            botonAgregarCarrito.classList.add("btn", "btn-primary");
            botonAgregarCarrito.textContent = "Agregar al carrito";
            botonAgregarCarrito.setAttribute("Marcador", item.id);


            contenedorCard.appendChild(titulo);
            contenedorCard.appendChild(imagen);
            contenedorCard.appendChild(textoPrecio);
            contenedorCard.appendChild(descripcion);
            contenedorCard.appendChild(botonAgregarCarrito);

            contenedorPadre.appendChild(contenedorCard);
            DOMContenedorProductos.appendChild(contenedorPadre);
        })
    }
    RenderizarProductos();
});