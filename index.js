import { loginFormulario } from "./Componentes/login/login.js";
import { header } from "./Componentes/Header/header.js";
import { cargarFormulario } from "./Componentes/Formulario/formulario.js";
import { cargarTarea } from "./Componentes/Tarea/tarea.js";

let DOM = document.getElementById("root");
DOM.className = "principal";

// Función para verificar si el usuario está logueado
function usuarioLogueado() {
    return JSON.parse(localStorage.getItem("usuarioLogueado"));
}

function cargarDom() {
    DOM.innerHTML = "";
    if (usuarioLogueado()) {
        DOM.appendChild(header());
        DOM.appendChild(cargarTarea());
        DOM.appendChild(cargarFormulario());

        // Agregar botón de cerrar sesión
        const logoutBtn = document.createElement("button");
        logoutBtn.textContent = "Cerrar sesión";
        logoutBtn.className = "logout-btn";
        logoutBtn.addEventListener("click", cerrarSesion);
        DOM.appendChild(logoutBtn);

    } else {
        DOM.appendChild(loginFormulario());
    }
}

function cerrarSesion() {
    localStorage.removeItem("usuarioLogueado");
    window.location.reload();  // Recargar la página para volver al login
}

cargarDom();
