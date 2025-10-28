document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("productos");

    fetch("productos.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(producto => {
                const card = document.createElement("div");
                card.classList.add("producto");

                card.innerHTML = `
                    <img src="../imagen/${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <span>Precio: $${producto.precio}</span>
                `;

                contenedor.appendChild(card);
            });
        })
        .catch(error => console.error("Error cargando productos:", error));
});
