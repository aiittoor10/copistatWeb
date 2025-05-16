export function header() {
    const header = document.getElementById("header");
  
    if (header) {
      header.innerHTML = `
        <header class="hero-header d-flex flex-column justify-content-center align-items-center text-center text-light">
          <div class="container">
            <h1 class="display-3 fw-bold animate__animated animate__fadeInDown">Copistat</h1>
            <p class="lead mt-3 mb-4 animate__animated animate__fadeInUp"><b>Envía tus archivos fácilmente a tu copistería de confianza</b></p>
            <a href="#wrapper" class="btn btn-outline-light btn-lg animate__animated animate__fadeInUp animate__delay-1s">
              ↓ Empezar
            </a>
          </div>
        </header>
      `;
    }
  }
  