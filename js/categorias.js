// Lista automática de categorías
const categorias = [
    { nombre: "Periféricos", link: "perifericos/index.html" },
    { nombre: "Procesadores", link: "procesadores/index.html" }
];

// Insertar automáticamente en el HTML
const container = document.querySelector(".categorias");

categorias.forEach(cat => {
    const div = document.createElement("div");
    div.classList.add("categoria-card");
    div.innerHTML = `<a href="${cat.link}">${cat.nombre}</a>`;
    container.appendChild(div);
});

