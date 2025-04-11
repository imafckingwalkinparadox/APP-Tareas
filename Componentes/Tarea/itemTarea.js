import { completarTarea } from "./funcionesTarea.js";

// Función para crear un elemento de tarea
export function itemTarea(contenido) {
    let label = document.createElement("label");
    label.className = "label";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let nombreTarea = document.createElement("h1");
    nombreTarea.className = "h1-1";
    nombreTarea.innerText = contenido; // Usamos directamente el contenido que es el nombre de la tarea

    // Evento para tachar la tarea al marcar el checkbox
    checkbox.addEventListener("change", completarTarea);

    label.appendChild(checkbox);
    label.appendChild(nombreTarea);

    return label;
}
