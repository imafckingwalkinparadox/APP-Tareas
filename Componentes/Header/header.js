function header(){
    let header = document.createElement("header");
    header.className = "div-header";


    let logo = document.createElement('img');
    logo.src = "https://i.scdn.co/image/ab67616d00001e023b494c1b464d41ef641de442";
    logo.alt = "logo";
    header.appendChild(logo);

    let h1 = document.createElement('div');
    h1.textContent = "Hola Mundo"; 
    h1.className = "h1"
    header.appendChild(h1);

    return header;
}

export {header}