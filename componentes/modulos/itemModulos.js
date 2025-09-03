import { guardarProducto, obtenerProductos } from "../footer/control/miLocalStorage.js";
import { listaDeCompras } from "../../database/carrito.js";

export function item(title, image, description, price) {
    let contenedor = document.createElement("div");
    contenedor.className = "item";

    // título
    let titulo = document.createElement("h3");
    titulo.className = "title";
    titulo.textContent = title;

    // imagen
    let img = document.createElement("img");
    img.className = "img1";
    img.src = image;
    img.alt = title;

    // descripción
    let desc = document.createElement("p");
    desc.className = "desc";
    desc.textContent = description;

    // precio
    let precio = document.createElement("p");
    precio.className = "price";
    precio.textContent = `Precio: $${price}`;

    // click en el contenedor
    contenedor.addEventListener("click", () => {
        // guardar producto en la lista
        listaDeCompras.push({ title, image, description, price });

        // persistir en localStorage
        guardarProducto(listaDeCompras);

        // ver productos guardados en consola
        let carritoLocalStorage = obtenerProductos();
        console.log("Productos en LocalStorage:", carritoLocalStorage);
    });

    contenedor.appendChild(titulo);
    contenedor.appendChild(img);
    contenedor.appendChild(desc);
    contenedor.appendChild(precio);

    return contenedor;
}
