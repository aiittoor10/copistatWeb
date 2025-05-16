export function implementaloNegocio() {
    const contenedor = document.getElementById("implementaloNegocio");
  
    if (contenedor) {
      contenedor.innerHTML = `
        <section class="container my-5" id="bloqueNegocio">
          <div class="text-center mb-4">
            <h2 class="fw-bold">¡Implémentalo en tu negocio!</h2>
            <p class="text-muted">Haz crecer tu copistería recibiendo pedidos online de forma automática y sin complicaciones.</p>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6">
              <form class="shadow p-4 rounded bg-light" id="formularioNegocio">
                <div class="mb-3">
                  <label for="emailNegocio" class="form-label">Correo electrónico</label>
                  <input type="email" class="form-control" id="emailNegocio" placeholder="tucorreo@ejemplo.com" required>
                </div>
                <div class="mb-3">
                  <label for="nombreEstablecimiento" class="form-label">Nombre del establecimiento</label>
                  <input type="text" class="form-control" id="nombreEstablecimiento" placeholder="Copistería Ejemplar" required>
                </div>
                <div class="d-grid">
                  <button type="submit" class="btn btn-primary fw-semibold">Obtener acceso</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      `;
    }
  }
  