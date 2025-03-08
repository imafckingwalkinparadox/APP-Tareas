export function completarTarea(event) {
  const checkbox = event.target;
  const texto = checkbox.nextElementSibling;

  if (checkbox.checked) {
      texto.style.textDecoration = "line-through";
      texto.style.color = "red";
  } else {
      texto.style.textDecoration = "none";
      texto.style.color = "black";
  }
}