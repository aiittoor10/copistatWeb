export function graficoEleccion(contenedor) {
    const div = document.createElement("div");
    div.className = "col-md-4 col-sm-6 mb-4";
  
    div.innerHTML = `
      <div class="card h-100 text-center p-3 shadow-sm">
        <h6 class="fw-bold text-primary mb-2" style="font-size: 0.95rem;">
          ¿Qué papelería elegirías?
        </h6>
        <canvas id="graficoQuesitoEleccion"></canvas>
        <button class="btn btn-sm btn-outline-primary mt-3" data-bs-toggle="modal" data-bs-target="#modalGraficoEleccion">
          Ver más
        </button>
      </div>
  
      <!-- Modal -->
      <div class="modal fade" id="modalGraficoEleccion" tabindex="-1" aria-labelledby="modalGraficoEleccionLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Detalles del estudio</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body text-start">
              <p><strong>Pregunta:</strong> Si tuvieras la opción de elegir entre una papelería que garantiza mayor seguridad en el manejo de archivos y otra que no lo hace, ¿cuál elegirías?</p>
              <ul>
                <li><strong>82,4%</strong> elegiría la opción más segura</li>
                <li><strong>17,6%</strong> dependería de otros factores</li>
                <li><strong>0%</strong> elegiría la más barata</li>
              </ul>
              <p>Los datos muestran que una abrumadora mayoría de usuarios priorizaría la seguridad frente al precio al seleccionar una copistería. Esta tendencia refuerza la importancia de comunicar claramente las garantías de privacidad para destacar frente a la competencia.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  
    contenedor.appendChild(div);
  
    const ctx = div.querySelector("#graficoQuesitoEleccion").getContext("2d");
  
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: [
          "Siempre elegiría la opción más segura",
          "No me importa, elegiría la más barata",
          "Dependería de otros factores"
        ],
        datasets: [{
          data: [82.4, 0, 17.6],
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
  