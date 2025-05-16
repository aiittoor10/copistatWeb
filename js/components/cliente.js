export function cliente() {
  const contenedor = document.getElementById("cliente");

  if (contenedor) {
    contenedor.classList.add("bloque-custom" , "fondo-cliente");

    contenedor.innerHTML = `
      <div class="overlay-content">
        <h2>Seguridad para el cliente</h2>
      </div>  
        `;
  }
}
  
  