export function buscadorNegocios() {
  const contenedor = document.getElementById("buscadorNegocios");

  if (!contenedor) return;

  contenedor.innerHTML = `
    <section class="container my-5">
      <div class="text-center mb-4">
        <h2 class="fw-bold">Negocios que usan Copistat</h2>
        <p class="text-muted">Busca por ciudad o barrio para ver los negocios que ya confían en nosotros.</p>
      </div>

      <div class="mb-4">
        <input type="text" id="inputBusquedaNegocios" class="form-control" placeholder="Escribe una ciudad o barrio...">
      </div>

      <div class="list-group mb-4" id="resultadosNegocios"></div>

      <div class="text-center">
        <a href="#bloquePlanes" class="btn btn-outline-primary">Hacer aparecer mi negocio aquí</a>
      </div>
    </section>
  `;

  const input = document.getElementById("inputBusquedaNegocios");
  const resultados = document.getElementById("resultadosNegocios");

  let negocios = [];

  function renderNegocios(filtrados) {
    if (filtrados.length === 0) {
      resultados.innerHTML = `<p class="text-center text-muted">No se encontraron negocios.</p>`;
      return;
    }

    resultados.innerHTML = filtrados.map(n => `
      <div class="list-group-item">
        <h6 class="fw-bold mb-1">${n.nombre}</h6>
        <p class="mb-0">${n.barrio}, ${n.ciudad}</p>
        <p class="text-muted small">CP ${n.cp}</p>
        <a href="${n.enlace || '#'}" target="_blank" class="small text-primary">Ir al negocio</a>
      </div>
    `).join("");
  }

  function filtrar(texto) {
    const buscado = texto.toLowerCase().trim();
    if (buscado === "") {
      resultados.innerHTML = "";
      return;
    }

    const filtrados = negocios.filter(n =>
      n.ciudad.toLowerCase().includes(buscado) ||
      n.barrio.toLowerCase().includes(buscado)
    );

    renderNegocios(filtrados);
  }

  // Cargar datos desde el archivo JSON
  fetch("json/locales.json")
    .then(res => res.json())
    .then(data => {
      negocios = data;
      input.addEventListener("input", () => {
        filtrar(input.value);
      });
    })
    .catch(err => {
      resultados.innerHTML = `<p class="text-center text-danger">Error al cargar los datos.</p>`;
      console.error("Error cargando JSON de negocios:", err);
    });
}
