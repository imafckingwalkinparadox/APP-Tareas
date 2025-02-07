import { formulario } from "./Componentes/Formulario/formulario.js";
import { header } from "./Componentes/Header/header.js";
import { tarea } from "./Componentes/Tarea/tarea.js";
let DOM = document.getElementById("root");
DOM.className = "principal";


DOM.appendChild(header());
DOM.appendChild(tarea());
DOM.appendChild(formulario());