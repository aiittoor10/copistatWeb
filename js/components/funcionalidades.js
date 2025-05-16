export function funcionalidadesCopistat() {
    const contenedor = document.getElementById("funcionalidadesCopistat");

    if (contenedor) {
        contenedor.innerHTML = `
        <section class="container my-5">
          <div class="text-center mb-4">
            <h2 class="fw-bold">Funcionalidades de Copistat</h2>
          </div>
  
          <div class="row mb-5">
            <div class="col-md-4">
              <h5 class="text-primary fw-semibold">Para usuarios</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Subida rápida de archivos PDF y DOC</li>
                <li class="list-group-item">Tu tienes el control total del documeto hasta que se imprima</li>
                <li class="list-group-item">El documento desaparece nada más ser imprimido</li>
                <li class="list-group-item">Tu das el persmiso si el documento puede ser desacargado en el equipo local</li>
                <li class="list-group-item">Evitas mandarlo por correo electrónico evitando errores en el envio como por ejemplo poner mal las direcciones del correo</li>
                <li class="list-group-item">Grantiza que ese documento no queda almacenado en el equipo local garantizando la privacidad y la protección de los datos</li>
              </ul>
            </div>
            <div class="col-md-4">
              <h5 class="text-primary fw-semibold">Para negocios</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Recepción inmediata de los documentos</li>
                <li class="list-group-item">Panel de gestión de los documentos</li>
                <li class="list-group-item">Evitar la saturación del correo electronico ahorrandose el mayor tiempo en no estar borrando correos</li>
                <li class="list-group-item">Evitar la saturación de archivos descargados en el equipo</li>
                <li class="list-group-item">Garantizar la seguridad y la confianza del cliente</li>
              </ul>
            </div>
            <div class="col-md-4">
              <h5 class="text-primary fw-semibold">Funcionalidades técnicas</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Los docuemntos no se almacenan en ningun lado</li>
                <li class="list-group-item">Los documentos desaparecen nada más ser impresos</li>
                <li class="list-group-item">En el caso de que no sean impresos en 3 minutos desaparecen automaticamente</li>
                <li class="list-group-item">Seguridad a la hora del envio de los documentos</li>
                <li class="list-group-item">Para la seguridad del cliente evita capturas de pantalla</li>
              </ul>
            </div>
          </div>
  

          </div>
        </section>
      `;
    }
}
