import './componentes/footer/control/miLocalStorage.js';

export function obtenerNav() {
    let nav = document.createElement("div");
    nav.className = "nav";

    // --- INICIO
    let inicio = document.createElement("a");
    let imagen1 = document.createElement("img");
    imagen1.src = "https://em-content.zobj.net/source/apple/237/house-building_1f3e0.png";
    inicio.appendChild(imagen1);

    inicio.addEventListener("click", () => {
        let section = document.getElementById("contenido-principal");
        if (section) section.classList.add("ocultar");
    });

    // --- PAQUETES
    let paquetes = document.createElement("a");
    let imagen2 = document.createElement("img");
    imagen2.src = "https://em-content.zobj.net/source/apple/279/package_1f4e6.png";
    paquetes.appendChild(imagen2);

    paquetes.addEventListener("click", () => {
        let section = document.getElementById("contenido-principal");
        if (section) section.classList.add("ocultar");
    });

    // --- PREGUNTAS
    let preguntas = document.createElement("a");
    let imagen3 = document.createElement("img");
    imagen3.src = "https://icones.pro/wp-content/uploads/2021/05/icone-question-noir.png";
    preguntas.appendChild(imagen3);

    preguntas.addEventListener("click", () => {
        let section = document.getElementById("contenido-principal");
        if (section) section.classList.add("ocultar");
    });

    // --- CARRITO
    let carrito = document.createElement("a");
    carrito.className = "nav-carrito";
    let imagen4 = document.createElement("img");
    imagen4.src = "https://em-content.zobj.net/source/apple/81/shopping-trolley_1f6d2.png";
    carrito.appendChild(imagen4);

    let divItem = document.createElement("div");
    divItem.className = "div-item";

    let productos = obtenerProductos();
    if (productos && productos.length > 0) {
        divItem.textContent = productos.length;
        carrito.appendChild(divItem);
    }

    // --- ENSAMBLADO FINAL
    nav.appendChild(inicio);
    nav.appendChild(paquetes);
    nav.appendChild(preguntas);
    nav.appendChild(carrito);

    return nav;
}
