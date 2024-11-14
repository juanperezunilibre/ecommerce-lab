const carrito = {}

carrito.items = JSON.parse(localStorage.getItem("carrito")) ?? [];

carrito.agregarItem = function (producto) {

    // si el producto ya existe lo recuperamos de la selección del carrito
    const item = carrito.items.find((item) => item.id === producto.id);

    if (item) {
        item.cantidad++
        item.subtotal = item.cantidad * item.precio;
    } else {
        carrito.items.push({
            id: producto.id,

            nombre: producto.nombre,
            precio: producto.precio,
            precioOriginal: producto.precioOriginal,
            imagen: producto.imagen,
            cantidad: 1,
            subtotal: producto.precio

        });
    }
    localStorage.setItem("carrito", JSON.stringify(carrito.items));
}

carrito.eliminarItem = function (id) {
    carrito.items = carrito.items.filter((item) => item.id !== id);
    localStorage.setItem("carrito", JSON.stringify(carrito.items));
}

export default carrito;