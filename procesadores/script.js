document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("productos");

    fetch("productos.json")
        .then(res => res.json())
        .then(data => {
            data.forEach(producto => {
                const div = document.createElement("div");
                div.classList.add("producto");

                div.innerHTML = `
                    <img src="../CSS/imagen/${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <span>Precio: $${producto.precio}</span>
                `;

                contenedor.appendChild(div);
            });
        })
        .catch(err => console.error("Error al cargar productos:", err));
});

