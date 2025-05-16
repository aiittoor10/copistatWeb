export function graficoConfianza(contenedor) {
    const div = document.createElement("div");
    div.className = "col-md-4 col-sm-6 mb-4";
  
    div.innerHTML = `
      <div class="card h-100 text-center p-3 shadow-sm">
        <h6 class="fw-bold text-primary mb-2" style="font-size: 0.95rem;">
          ¿Confías en que las papelerías eliminan los archivos tras imprimir?
        </h6>
        <canvas id="graficoQuesitoConfianza" width="160" height="160"></canvas>
        <button class="btn btn-sm btn-outline-primary mt-3" data-bs-toggle="modal" data-bs-target="#modalGraficoConfianza">
          Ver más
        </button>
      </div>
  
      <!-- Modal -->
      <div class="modal fade" id="modalGraficoConfianza" tabindex="-1" aria-labelledby="modalGraficoConfianzaLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Detalles del estudio</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body text-start">
              <p><strong>Pregunta:</strong> ¿Confías en que las papelerías eliminan los archivos después de la impresión?</p>
              <ul>
                <li><strong>17,6%</strong> dijeron “Sí, completamente”</li>
                <li><strong>52,9%</strong> dijeron “No, creo que algunos archivos pueden quedar almacenados”</li>
                <li><strong>29,4%</strong> dijeron “No lo sé”</li>
              </ul>
              <p>Estos datos reflejan una desconfianza significativa por parte de los usuarios hacia el proceso de eliminación de archivos en las copisterías, lo que pone de manifiesto la necesidad de prácticas más transparentes y seguras.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  
    contenedor.appendChild(div);
  
    const ctx = div.querySelector("#graficoQuesitoConfianza").getContext("2d");
  
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: [
          "Sí, completamente",
          "No, creo que algunos archivos pueden quedar almacenados",
          "No lo sé"
        ],
        datasets: [{
          data: [17.6, 52.9, 29.4],
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
  