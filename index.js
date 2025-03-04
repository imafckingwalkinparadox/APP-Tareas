import { formulario } from "./Componentes/Formulario/formulario.js";
import { header } from "./Componentes/Header/header.js";
import { CargarTarea } from "./Componentes/Tarea/tarea.js";
import { marcarTarea } from "./Componentes/Tarea/funcionesTarea.js";
let DOM = document.getElementById("root");
DOM.className = "principal";

function cargarDom(){
DOM.appendChild(header());
DOM.appendChild(CargarTarea());
DOM.appendChild(formulario());

marcarTarea();
}

cargarDom();

export{cargarDom}