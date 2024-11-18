let carrito = obtenerProductos();

function obtenerProductos() {
  return JSON.parse(localStorage.getItem("carrito")) ?? [];
}

function agregarProducto(producto) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

export { carrito, agregarProducto };