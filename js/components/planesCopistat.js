export function planesCopistat() {
  const contenedor = document.getElementById("planesCopistat");

  if (contenedor) {
    contenedor.innerHTML = `
      <section class="container my-5" id="bloquePlanPrueba">
        <div class="alert alert-info text-center shadow-sm py-4">
          <h4 class="fw-bold mb-2">🎁 Plan de prueba exclusivo</h4>
          <p class="mb-1">Los primeros <strong>100 negocios</strong> en registrarse disfrutarán del</p>
          <p class="fw-bold text-primary mb-2">Plan Certificado + Mapa totalmente GRATIS de por vida</p>
          <p class="small text-muted">Una oportunidad única para formar parte de la red Copistat desde el inicio. Sin pagos, para siempre.</p>
          <button class="btn btn-primary btn-sm mt-2">¡Quiero el plan de prueba!</button>
        </div>
      </section>

      <section class="container my-5" id="bloquePlanes">
        <div class="text-center mb-4">
          <h2 class="fw-bold">Planes y beneficios para tu negocio</h2>
          <p class="text-muted">La app es 100% gratuita. Pero si quieres destacar, te damos opciones certificadas que inspiran confianza y visibilidad.</p>
        </div>
        <div class="row justify-content-center">

          <!-- PLAN GRATUITO -->
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm border-success">
              <div class="card-body text-center">
                <h5 class="card-title fw-bold text-success">GRATUITO</h5>
                <p class="card-text">Accede a todas las funciones sin coste alguno.</p>
                <ul class="list-unstyled small mb-4">
                  <li>Acceso completo a la app</li>
                </ul>
                <span class="fw-bold fs-4 text-success">0€</span>
              </div>
            </div>
          </div>

          <!-- PLAN CERTIFICADO -->
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm border-primary">
              <div class="card-body text-center">
                <h5 class="card-title fw-bold text-primary">CERTIFICADO</h5>
                <p class="card-text">Por solo 20€/año, recibirás un certificado físico y digital que acredita que tu negocio usa Copistat.</p>
                <ul class="list-unstyled small mb-4">
                  <li>Certificado profesional</li>
                  <li>Más confianza para tus clientes</li>
                  <li> Identidad visual Copistat</li>
                </ul>
                <span class="fw-bold fs-4 text-primary">20€/año</span>
                <div class="mt-3">
                  <button class="btn btn-outline-primary">Solicitar certificado</button>
                </div>
              </div>
            </div>
          </div>

          <!-- PLAN CERTIFICADO + MAPA -->
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm border-warning">
              <div class="card-body text-center">
                <h5 class="card-title fw-bold text-warning">CERTIFICADO + MAPA</h5>
                <p class="card-text">Además del certificado, colocamos tu negocio en nuestra web y en el mapa de copisterías activas.</p>
                <ul class="list-unstyled small mb-4">
                  <li>Certificado incluido</li>
                  <li>Visibilidad en nuestra web</li>
                  <li>Aparece en el mapa de Copistat</li>
                </ul>
                <span class="fw-bold fs-4 text-warning">35€/año</span>
                <div class="mt-3">
                  <button class="btn btn-outline-warning">Solicitar visibilidad</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    `;
  }
}
