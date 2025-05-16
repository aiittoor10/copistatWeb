export function estudioSeguridad() {
    const contenedor = document.getElementById("estudioSeguridad");

    if (contenedor) {
        contenedor.innerHTML = `
        <section class="container my-5" id="bloqueEstudio">
          <div class="text-center mb-4">
            <h2 class="fw-bold">Estudio sobre la seguridad en la impresión de documentos</h2>
            <p class="text-muted">190 personas participaron en esta encuesta que analiza la percepción de seguridad al imprimir archivos en copisterías y plataformas digitales.</p>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-10">
              <p>
                El estudio ha consistido en analizar la percepción de seguridad de los usuarios al imprimir documentos en servicios de papelería y plataformas online. A través de una encuesta, se ha evaluado cómo los usuarios perciben el manejo y almacenamiento de sus archivos una vez que los envían a imprimir. Se buscó entender sus preocupaciones sobre la protección de los documentos durante el proceso de impresión y qué medidas consideran esenciales para sentirse más seguros, como la eliminación automática de los archivos o la protección contra accesos no autorizados. El estudio también exploró la confianza que los usuarios tienen en que los establecimientos eliminan correctamente los archivos después de la impresión.
              </p>
              <p>
                Los resultados obtenidos revelaron que la mayoría de los usuarios valora tener control sobre la seguridad de sus documentos, siendo la confirmación de eliminación de los archivos después de la impresión una de las principales preocupaciones. Además, se destacó la importancia de asegurar que los archivos solo sean almacenados por un tiempo limitado, lo que subraya la necesidad de soluciones que garanticen tanto la privacidad como la seguridad de los documentos. Estos hallazgos proporcionan información clave para mejorar los servicios de impresión y fortalecer la confianza de los usuarios mediante medidas tecnológicas que aseguren la protección de sus archivos.
              </p>
            </div>
          </div>
        </section>
      `;
    }
}
