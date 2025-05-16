export function porQueCopistat() {
    const contenedor = document.getElementById("porQueCopistat");
  
    if (contenedor) {
      contenedor.innerHTML = `
        <section class="container my-5">
          <div class="text-center mb-4">
            <h2 class="fw-bold">¿Por qué usar Copistat?</h2>
          </div>
          <div class="row justify-content-center text-center">
            <div class="col-md-6 col-lg-3 mb-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <div class="display-5 mb-2">📎</div>
                  <h5 class="card-title fw-semibold">Ahorra tiempo</h5>
                  <p class="card-text">No volveras a enviar tus documentos por correo solo escaneando un QR</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <div class="display-5 mb-2">🖨️</div>
                  <h5 class="card-title fw-semibold">Compatible con todas</h5>
                  <p class="card-text">Funciona con cualquier copistería registrada en la plataforma.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <div class="display-5 mb-2">📱</div>
                  <h5 class="card-title fw-semibold">Desde cualquier dispositivo</h5>
                  <p class="card-text">Funciona desde móvil, tablet o PC sin instalar nada.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <div class="display-5 mb-2">🔐</div>
                  <h5 class="card-title fw-semibold">Seguro y privado</h5>
                  <p class="card-text">Tus archivos están protegidos y solo accesibles por la copistería.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }
  }
  