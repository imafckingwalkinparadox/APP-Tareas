export function loginFormulario() {
    const divLogin = document.createElement("div");
    divLogin.className = "login-container";

    const form = document.createElement("form");
    form.className = "login-form";

    const inputCorreo = document.createElement("input");
    inputCorreo.type = "email";
    inputCorreo.placeholder = "Correo electrónico";
    inputCorreo.required = true;

    const inputContraseña = document.createElement("input");
    inputContraseña.type = "password";
    inputContraseña.placeholder = "Contraseña";
    inputContraseña.required = true;

    const buttonLogin = document.createElement("button");
    buttonLogin.type = "submit";
    buttonLogin.textContent = "Iniciar sesión";

    const crearCuentaLink = document.createElement("a");
    crearCuentaLink.href = "#";
    crearCuentaLink.textContent = "¿No tienes cuenta? Crea una aquí";
    crearCuentaLink.addEventListener("click", mostrarFormularioRegistro);

    form.appendChild(inputCorreo);
    form.appendChild(inputContraseña);
    form.appendChild(buttonLogin);
    form.appendChild(crearCuentaLink);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const correo = inputCorreo.value;
        const contraseña = inputContraseña.value;
    
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ correo, contraseña })
        })
        .then(response => response.json())  // Convertir a JSON
        .then(data => {
            if (data.mensaje === 'Login exitoso') {
                localStorage.setItem("usuarioLogueado", JSON.stringify(data.usuario));
                window.location.reload();  // Recargar la página para reflejar el cambio
            } else {
                alert(data.error || 'Error al iniciar sesión');
            }
        })
        .catch(error => {
            console.error('Error al hacer login:', error);
            alert('Hubo un error al intentar iniciar sesión');
        });
    });
    

    divLogin.appendChild(form);
    return divLogin;
}

function mostrarFormularioRegistro() {
    const divRegistro = document.createElement("div");
    divRegistro.className = "registro-container";

    const formRegistro = document.createElement("form");
    formRegistro.className = "registro-form";

    const inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre";
    inputNombre.required = true;

    const inputCorreo = document.createElement("input");
    inputCorreo.type = "email";
    inputCorreo.placeholder = "Correo electrónico";
    inputCorreo.required = true;

    const inputContraseña = document.createElement("input");
    inputContraseña.type = "password";
    inputContraseña.placeholder = "Contraseña";
    inputContraseña.required = true;

    const buttonRegistro = document.createElement("button");
    buttonRegistro.type = "submit";
    buttonRegistro.textContent = "Registrar cuenta";

    formRegistro.appendChild(inputNombre);
    formRegistro.appendChild(inputCorreo);
    formRegistro.appendChild(inputContraseña);
    formRegistro.appendChild(buttonRegistro);

    formRegistro.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = inputNombre.value;
        const correo = inputCorreo.value;
        const contraseña = inputContraseña.value;

        console.log("Datos enviados al backend:", { nombre, correo, contraseña });

        fetch('http://localhost:3000/registro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre, correo, contraseña })
        })
        .then(response => {
            if (response.ok) {
                alert('Cuenta creada con éxito');
                document.getElementById("root").innerHTML = "";
                document.getElementById("root").appendChild(loginFormulario());
            } else {
                response.text().then(msg => alert(msg));
            }
        })
        .catch(error => {
            console.error('Error al registrar cuenta:', error);
            alert('Hubo un error al registrar la cuenta');
        });
    });

    divRegistro.appendChild(formRegistro);
    document.getElementById("root").innerHTML = "";
    document.getElementById("root").appendChild(divRegistro);
}
