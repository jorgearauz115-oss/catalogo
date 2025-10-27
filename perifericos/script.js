fetch('productos.json')
  .then(response => response.json())
  .then(productos => {
    const contenedor = document.querySelector(".contenedor-productos");

    productos.forEach(producto => {
      const card = document.createElement("div");
      card.className = "producto-card";

      card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <span class="precio">Bs. ${producto.precio}</span>
        <span class="stock ${producto.stock > 0 ? 'disponible' : 'agotado'}">
          ${producto.stock > 0 ? 'Disponible' : 'Agotado'}
        </span>
        <a class="btn-whatsapp" href="${producto.whatsapp}" target="_blank">Comprar por WhatsApp</a>
      `;

      contenedor.appendChild(card);
    });
  });
