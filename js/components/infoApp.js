export function infoApp() {
  const contenedor = document.getElementById("infoApp");

  if (contenedor) {
    contenedor.classList.add("bloque-custom", "fondo-info");

    contenedor.innerHTML = `
      <div class="overlay-content">
        <h2>COPISTAT</h2>
      </div>
    `;
  }
}
