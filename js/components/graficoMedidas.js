export function graficoMedidas(contenedor) {
    const div = document.createElement("div");
    div.className = "col-md-4 col-sm-6 mb-4";
  
    div.innerHTML = `
      <div class="card h-100 text-center p-3 shadow-sm">
        <h6 class="fw-bold text-primary mb-2" style="font-size: 0.95rem;">
          ¿Qué medidas te harían sentir más seguro al imprimir un documento?
        </h6>
        <canvas id="graficoQuesitoMedidas" width="160" height="160"></canvas>
        <button class="btn btn-sm btn-outline-primary mt-3" data-bs-toggle="modal" data-bs-target="#modalGraficoMedidas">
          Ver más
        </button>
      </div>
  
      <!-- Modal -->
      <div class="modal fade" id="modalGraficoMedidas" tabindex="-1" aria-labelledby="modalGraficoMedidasLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Detalles del estudio</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body text-start">
              <p><strong>Pregunta:</strong> ¿Qué medidas te harían sentir más seguro al imprimir un documento?</p>
              <ul>
                <li><strong>41,2%</strong> seleccionó “Confirmación de eliminación del archivo después de imprimir”</li>
                <li><strong>23,5%</strong> seleccionó “Garantía de que los archivos solo se almacenan por un tiempo limitado”</li>
                <li><strong>35,3%</strong> seleccionó “Protección contra accesos no autorizados”</li>
                <li><strong>0%</strong> seleccionó “No veo necesario ningún cambio”</li>
              </ul>
              <p>Este resultado destaca que los usuarios priorizan tener garantías de seguridad digital, especialmente respecto a la eliminación y almacenamiento de archivos. Implementar estas medidas refuerza la confianza del cliente y profesionaliza el servicio.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  
    contenedor.appendChild(div);
  
    const ctx = div.querySelector("#graficoQuesitoMedidas").getContext("2d");
  
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: [
          "Confirmación de eliminación del archivo después de imprimir",
          "Garantía de que los archivos solo se almacenan por un tiempo limitado",
          "Protección contra accesos no autorizados",
          "No veo necesario ningún cambio"
        ],
        datasets: [{
          data: [41.2, 23.5, 35.3, 0],
          backgroundColor: ["#0d6efd", "#dc3545", "#fd7e14", "#198754"]
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
  