"use strict" ;

const taskList = document.querySelector (".js-tasklist");

const tasks = [
    { name: "Recoger setas en el campo", completed: true, id: 1 },
    { name: "Comprar pilas", completed: true, id: 2 },
    { name: "Poner una lavadora de blancos", completed: true, id: 3 },
    {
      name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
      id: 4,
    },
  ];

  function renderTask () {
    taskList.innerHTML = "" ;
    for (const task of tasks) {
      if (task.completed === true) {
        taskList.innerHTML += `<li class='tachado'>
        <input type="checkbox" checked>
        ${task.name} 
        </li>`;
      } else{
          taskList.innerHTML += `<li>
          <input type="checkbox">
          ${task.name}
          </li>`;
        }    
    }
  }

renderTask();


 /*
 
Añadir un checkbox a cada tarea. Cada tarea en nuestra lista tendrá un checkbox, tal como se muestra en la imagen del enunciado. Este checkbox estará marcado si la tarea está completada y desmarcado si no lo está.

 */