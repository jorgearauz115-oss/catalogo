fetch('productos.json')
  .then(response => response.json())
  .then(productos => {
    mostrarProductos(productos);

    const buscador = document.getElementById('buscador');
    buscador.addEventListener('input', () => {
      const filtro = buscador.value.toLowerCase();
      const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(filtro));
      mostrarProductos(filtrados);
    });
  });

function mostrarProductos(productos) {
  const catalogo = document.getElementById('catalogo');
  catalogo.innerHTML = '';
  productos.forEach(p => {
    catalogo.innerHTML += `
      <div class="producto">
        <img src="${p.imagen}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>Bs. ${p.precio}</p>
        <a class="whatsapp-btn" href="https://wa.me/59174937538?text=Hola,%20quiero%20comprar%20${encodeURIComponent(p.nombre)}" target="_blank">Pedir por WhatsApp</a>
      </div>
    `;
  });
}