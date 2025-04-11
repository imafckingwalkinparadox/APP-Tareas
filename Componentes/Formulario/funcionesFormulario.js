import { itemTarea } from "../Tarea/itemTarea.js";

// Función para cargar las tareas después de agregar una nueva
export function cargarTareas(input) {
    const nuevaTarea = input.value.trim(); 

    if (nuevaTarea !== "") {
        // Hacemos la solicitud POST para agregar la tarea
        fetch('http://localhost:3000/agregar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nuevaTarea,
                estado: 'falso', // Establecer un estado predeterminado
                usuario_id: 1  // Suponiendo que el usuario_id es 1, ajústalo si es necesario
            })
        })
        .then(response => response.json())
        .then(tareaAgregada => {
            // Una vez que la tarea se haya agregado correctamente, la mostramos en el frontend
            mostrarTarea(tareaAgregada);
        })
        .catch(error => console.error('Error al agregar la tarea:', error));

        // Limpiamos el input
        input.value = "";
    }
}

// Función para mostrar la tarea recién agregada
function mostrarTarea(tarea) {
    const contenedorTareas = document.querySelector(".laLista");

    // Crear el nuevo elemento de tarea
    const nuevaTareaElemento = itemTarea(tarea.nombre); // solo pasamos el nombre de la tarea

    // Agregarlo al contenedor de tareas
    contenedorTareas.appendChild(nuevaTareaElemento);
}
