export let carrito = getProducts();

export function getProducts() {
     return JSON.parse(localStorage.getItem("carrito")) ?? [];
}

export function addProduct(producto) {
    localStorage.setItem("carrito", JSON.stringify(producto));
}