import { agregarTareas } from "./funcionesFormulario.js";

function formulario(){
    let formulario = document.createElement('footer');
    formulario.className = "div-formulario";


    let inputTexto = document.createElement('input');
    inputTexto.type = "text";
    inputTexto.placeholder = "Escribe tu tarea...";
    formulario.appendChild(inputTexto);

    return formulario;
}

export {formulario}
