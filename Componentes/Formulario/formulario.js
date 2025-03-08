import { cargarTareas } from "./funcionesFormulario.js";
import { consultarTareas } from "../Tarea/tarea.js";

export function cargarFormulario() {
    const formulario = document.createElement("div");
    formulario.className = "formulario";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Escribe una tarea...";

    const button = document.createElement("button");
    button.textContent = "Agregar";

    // Evento para agregar tareas al hacer clic en el botón
    button.addEventListener("click", () => {
        cargarTareas(input);
    });

    formulario.appendChild(input);
    formulario.appendChild(button);

    return formulario;
}