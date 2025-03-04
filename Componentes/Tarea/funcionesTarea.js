function marcarTarea() {
    const items = document.querySelectorAll(".Item");
  
    items.forEach((item) => {
      const checkbox = item.querySelector(".task-checkbox");
      const taskText = item.querySelector(".task-text");
  
      item.addEventListener("click", (e) => {
        if (e.target === checkbox) {
          return;
        }
  
        checkbox.checked = !checkbox.checked;
        if (checkbox.checked) {
          taskText.style.textDecoration = "line-through";
        } else {
          taskText.style.textDecoration = "none";
        }
      });
    });
  }
  export{marcarTarea}