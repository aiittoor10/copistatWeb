export function negocio() {
    const contenedor = document.getElementById("negocio");

    if (contenedor) {
        contenedor.classList.add("bloque-custom","fondo-negocio");

      contenedor.innerHTML = `
      <div class="overlay-content">
        <h2>Mayor gestión para tu negocio</h2>
      </div>  
      `;
    }
  }
  
  