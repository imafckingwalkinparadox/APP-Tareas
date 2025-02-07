import { tareas } from './data.js';

function tarea(){
    let tareaDiv = document.createElement('div');
    tareaDiv.className = "div-tarea";

    let titulo = document.createElement('h1');
    titulo.innerText = "Hoy";
    titulo.className = "title";
    tareaDiv.appendChild(titulo);

    tareas.forEach(categoria => {
        let componente = document.createElement('div');
        componente.className = categoria.categoria === "Design" ? "cuadro1" : (categoria.categoria === "Personal" ? "cuadro2" : "cuadro3");
        
        let categoriaTitulo = document.createElement('h1');
        categoriaTitulo.innerText = categoria.categoria;
        componente.appendChild(categoriaTitulo);

        let label = document.createElement('label');
        categoria.tareas.forEach(tarea => {
            let divTarea = document.createElement('div');
            
            let input = document.createElement('input');
            input.type = "checkbox";
            input.checked = tarea.completada;
            divTarea.appendChild(input);

            let textoTarea = document.createElement('p');
            textoTarea.innerText = tarea.nombre;
            divTarea.appendChild(textoTarea);

            label.appendChild(divTarea);
        });
        
        componente.appendChild(label);
        tareaDiv.appendChild(componente);
    });

    let boton = document.createElement('button');
    boton.className = "bttn";
    boton.innerHTML = `
        <h3 class="title-bttn">Write a task...</h3>
        <button>Add</button>
    `;
    tareaDiv.appendChild(boton);
    
    return tareaDiv;
}

export {tarea};
