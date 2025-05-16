export function graficoSeguridad(contenedor) {
    // Crear columna y tarjeta
    const div = document.createElement("div");
    div.className = "col-md-4 col-sm-6 mb-4";
  
    div.innerHTML = `
      <div class="card h-100 text-center p-3 shadow-sm">
        <h6 class="fw-bold text-primary mb-2" style="font-size: 0.95rem;">
          ¿Te preocupa la seguridad de tus documentos?
        </h6>
        <canvas id="graficoQuesitoSeguridad" width="160" height="160"></canvas>
        <button class="btn btn-sm btn-outline-primary mt-3" data-bs-toggle="modal" data-bs-target="#modalGraficoSeguridad">
          Ver más
        </button>
      </div>
  
      <!-- Modal -->
      <div class="modal fade" id="modalGraficoSeguridad" tabindex="-1" aria-labelledby="modalGraficoLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Detalles del estudio</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body text-start">
              <p><strong>Pregunta:</strong> ¿Te preocupa la seguridad de tus documentos cuando los llevas a imprimir?</p>
              <ul>
                <li><strong>41,2%</strong> dijeron “Sí, siempre”</li>
                <li><strong>35,3%</strong> dijeron “A veces”</li>
                <li><strong>23,5%</strong> dijeron “No, nunca”</li>
              </ul>
              <p>La mayoría de los usuarios tienen algún nivel de preocupación sobre el manejo de sus documentos impresos, especialmente en relación a su almacenamiento y eliminación.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  
    contenedor.appendChild(div);
  
    // Iniciar gráfico después de insertar el canvas
    const ctx = div.querySelector("#graficoQuesitoSeguridad").getContext("2d");
  
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Sí, siempre", "A veces", "No, nunca"],
        datasets: [{
          data: [41.2, 35.3, 23.5],
          backgroundColor: ["#0d6efd", "#dc3545", "#fd7e14"]
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
  