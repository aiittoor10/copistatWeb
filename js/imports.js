import { footer } from "./components/footer.js";
import { sidebar } from "./components/sidebar.js";
import { header } from "./components/encabezado.js";
import { infoApp } from "./components/infoApp.js";
import { negocio } from "./components/negocio.js";
import { cliente } from "./components/cliente.js";
import { porQueCopistat } from "./components/porqueCopistat.js";
import { funcionalidadesCopistat } from "./components/funcionalidades.js";
import { implementaloNegocio } from "./components/implementaloNegocio.js";
import { planesCopistat } from "./components/planesCopistat.js";
import { estudioSeguridad } from "./components/estudioSeguridad.js";
import { graficoSeguridad } from "./components/graficoSeguridad.js";
import { graficoConfianza } from "./components/graficoConfianza.js";
import { graficoMedidas } from "./components/graficoMedidas.js";
import { graficoEnvio } from "./components/graficoEnvio.js";
import { graficoPreocupacion } from "./components/graficoPreocupacion.js";
import { graficoEleccion } from "./components/graficoEleccion.js";
import { buscadorNegocios } from "./components/buscadorNegocios.js";






window.addEventListener("DOMContentLoaded", () => {
    // Cargar estructura base
    footer();
    sidebar();
    header();
    infoApp();
    negocio();
    cliente();
    porQueCopistat();
    funcionalidadesCopistat();
    implementaloNegocio();
    planesCopistat();
    estudioSeguridad();
    buscadorNegocios();

    // Seleccionamos el contenedor único de gráficos
    const graficosContenedor = document.getElementById("graficosEstudio");

    // Insertamos cada gráfico dentro del mismo contenedor (en columnas)
    graficoSeguridad(graficosContenedor);
    graficoConfianza(graficosContenedor);
    graficoMedidas(graficosContenedor);
    graficoEnvio(graficosContenedor);
    graficoPreocupacion(graficosContenedor);
    graficoEleccion(graficosContenedor);




});
