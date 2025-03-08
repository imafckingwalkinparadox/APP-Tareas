import { header } from "./Componentes/Header/header.js";
import { cargarFormulario } from "./Componentes/Formulario/formulario.js";
import { cargarTarea } from "./Componentes/Tarea/tarea.js";

let DOM = document.getElementById("root");
DOM.className = "principal";

function cargarDom(){
    DOM.appendChild(header());

    DOM.appendChild(cargarTarea());

    DOM.appendChild(cargarFormulario());
}

cargarDom();

export { cargarDom };