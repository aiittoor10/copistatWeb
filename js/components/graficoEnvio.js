export function graficoEnvio(contenedor) {
    const div = document.createElement("div");
    div.className = "col-md-4 col-sm-6 mb-4";
  
    div.innerHTML = `
      <div class="card h-100 text-center p-3 shadow-sm">
        <h6 class="fw-bold text-primary mb-2" style="font-size: 0.95rem;">
          ¿Cómo sueles llevar un documento a imprimir?
        </h6>
        <canvas id="graficoQuesitoEnvio" width="160" height="160"></canvas>
        <button class="btn btn-sm btn-outline-primary mt-3" data-bs-toggle="modal" data-bs-target="#modalGraficoEnvio">
          Ver más
        </button>
      </div>
  
      <!-- Modal -->
      <div class="modal fade" id="modalGraficoEnvio" tabindex="-1" aria-labelledby="modalGraficoEnvioLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Detalles del estudio</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body text-start">
              <p><strong>Pregunta:</strong> ¿Cómo sueles llevar un documento a imprimir?</p>
              <ul>
                <li><strong>47,1%</strong> lo hace por correo electrónico</li>
                <li><strong>35,3%</strong> usa USB</li>
                <li><strong>11,8%</strong> usa servicios en la nube</li>
                <li><strong>5,9%</strong> lo envía por teléfono (WhatsApp)</li>
              </ul>
              <p>El correo electrónico sigue siendo el medio más común para enviar documentos a imprimir, aunque el uso de USB y plataformas en la nube también tienen presencia destacada. Estos datos pueden ayudar a definir qué servicios priorizar en las copisterías.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  
    contenedor.appendChild(div);
  
    const ctx = div.querySelector("#graficoQuesitoEnvio").getContext("2d");
  
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: [
          "Correo electrónico",
          "Servicios en la nube (Google Drive, Dropbox...)",
          "USB",
          "Teléfono (WhatsApp)"
        ],
        datasets: [{
          data: [47.1, 11.8, 35.3, 5.9],
          backgroundColor: ["#0d6efd", "#20c997", "#6610f2", "#ffc107"]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          datalabels: {
            color: "#fff",
            font: { weight: "bold", size: 12 },
            formatter: value => `${value}%`
          }
        }
      },
      plugins: [ChartDataLabels]
    });
  }
  