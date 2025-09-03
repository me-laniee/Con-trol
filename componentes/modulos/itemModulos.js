import { guardarProducto } from "../footer/control/miLocalStorage.js";
import { listaDeCompras } from "../../main.js";

export function item(title, image, description, price) {
    let contenedor = document.createElement("div");
    contenedor.className = "item";

    // título
    let titulo = document.createElement("h3");
    titulo.className="title";
    titulo.textContent = title;

    // imagen
    let img = document.createElement("img");
    img.className="img1";
    img.src = image;
    img.alt = title;

    // descripción
    let desc = document.createElement("p");
    desc.textContent = description;
    desc.className="desc";

    // precio
    let precio = document.createElement("p");
    precio.textContent = `Precio: $${price}`;
    precio.className="price";


    contenedor.addEventListener("click", ()=>{
    listaDeCompras.push("Nuevo elemento");
    guardarProducto(listaDeCompras);
    console.log("Producto en local Storage");
    location.reload();

    });

    item.addEventListener('click', ()=>{
        let carritoLocalStorange = obtenerProductos();
        console.log("Producto en LocalStorag");
        location.reload();
    })

    contenedor.appendChild(titulo);
    contenedor.appendChild(img);
    contenedor.appendChild(desc);
    contenedor.appendChild(precio);

    return contenedor;
    return item;
}