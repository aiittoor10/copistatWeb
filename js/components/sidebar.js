export function sidebar() {
  const sidebar = document.getElementById("sidebar");

  if (sidebar) {
    sidebar.innerHTML = `
      <!-- Botón flotante para abrir el menú -->
      <button class="btn btn-primary position-fixed top-0 start-0 m-3 z-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
        <i class="fas fa-bars"></i>
      </button>

      <!-- Sidebar offcanvas -->
      <div class="offcanvas offcanvas-start bg-dark text-white" tabindex="-1" id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasSidebarLabel">Copistat</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Registrarse</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Planes de suscripción</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Funcionalidades</a>
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}
