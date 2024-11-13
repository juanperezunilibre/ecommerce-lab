let carrito = obtenerProductos()

function obtenerProductos() {
    return JSON.parse(localStorage.getItem("carrito")) ?? [];
}

function agregarProducto(producto) {
    localStorage.setItem("carrito", JSON.stringify(producto));
}

export {
    carrito,
    agregarProducto,
}