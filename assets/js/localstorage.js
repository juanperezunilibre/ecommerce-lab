const Carrito = {}

Carrito.items = JSON.parse(localStorage.getItem("carrito")) ?? [];

Carrito.agregarItem = function (producto) {
    // si el producto ya existe lo recuperamos de la seleccion del carrito
    const item = Carrito.items.find((item) => item.id === producto.id);
    let dto = producto.precio * (1 - producto.descuento / 100);
    if (item) {
        item.cantidad++;
        item.subtotal = dto > 0 ? dto * item.cantidad : item.precio * item.cantidad;
    } else {
        Carrito.items.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            descuento: producto.descuento,
            imagen: producto.imagen,
            cantidad: 1,
            subtotal: dto > 0 ? dto : producto.precio,
        });
    }

    localStorage.setItem("carrito", JSON.stringify(Carrito.items));
}

Carrito.eliminarItem = function (id) {
    Carrito.items = Carrito.items.filter((item) => item.id !== id);
    localStorage.setItem("carrito", JSON.stringify(Carrito.items));
}

export default Carrito;

