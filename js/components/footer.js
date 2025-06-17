export function footer() {
    const footer = document.getElementById("footer");
  
    if (footer) {
      footer.innerHTML = `
        <footer class="bg-dark text-light pt-5 pb-3 mt-5">
          <div class="container">
            <div class="row gy-4 align-items-start">
              
              <!-- Branding / Logo -->
              <div class="col-md-4 text-center text-md-start">
                <img src="assets/logo.png" alt="Logo Copistat" class="mb-3" style="max-width: 150px;">
                <p class="small">
                  Copistat es una plataforma para enviar archivos fácilmente a tu copistería local.
                </p>
              </div>
  
              <!-- Enlaces rápidos -->
              <div class="col-md-4 text-center text-md-start">
                <h6 class="text-uppercase mb-3">Navegación</h6>
                <ul class="list-unstyled">
                  <li><a href="#" class="text-decoration-none text-light">Copistat</a></li>
                  <li><a href="#" class="text-decoration-none text-light">Registrate</a></li>
                  <li><a href="#" class="text-decoration-none text-light">Planes de suscripción</a></li>
                  <li><a href="#" class="text-decoration-none text-light">Donaciones</a></li>
                  <li><a href="#" class="text-decoration-none text-light">Política de Privacidad</a></li>
                </ul>
              </div>
  
              <!-- Contacto y redes -->
              <div class="col-md-4 text-center text-md-start">
                <h6 class="text-uppercase mb-3">Contacto</h6>
                <p class="small mb-1"><i class="fas fa-envelope me-2"></i> contacto@copistat.com</p>
                <p class="small mb-3"><i class="fas fa-map-marker-alt me-2"></i>Pintor Velazquez 33, Móstoles 28933</p>
                <div>
                  <a href="https://github.com/aiittoor10" class="text-light me-2"><i class="fab fa-github fa-lg"></i></a>
                  <a href="https://es.linkedin.com/in/aitor-cobo-fari%C3%B1as-320616297" class="text-light me-2"><i class="fab fa-linkedin fa-lg"></i></a>

                </div>
              </div>
  
            </div>
  
            <!-- Línea inferior -->
<div class="text-center mt-4">
  <hr class="border-light" />
  <p class="small mb-0">
    &copy; 2025 Copistat. Todos los derechos reservados. Desarrollado por
    <a href="https://github.com/aiittoor10" class="text-decoration-none text-primary" target="_blank" rel="noopener noreferrer">
      Aitor Cobo
    </a>
  </p>
  <a href="#wrapper" class="text-light small d-block mt-2" onclick="window.scrollTo({ top: 0, behavior: 'smooth' });">
    ↑ Volver arriba
  </a>
</div>

          </div>
        </footer>
      `;
    }
  }
  
