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
        <input type="checkbox" id='${task.id}' checked>
        ${task.name} 
        </li>`;
      } else{
          taskList.innerHTML += `<li>
          <input type="checkbox" id='${task.id}'>
          ${task.name}
          </li>`;
        }    
    }
  }

renderTask();

// Busca la tarea que tenga el id `taskId` en el array `tasks`
// Una vez que has obtenido la tarea, actualiza la propiedad `completed`
// Pinta de nuevo las tareas en el html

const handleClickList = (event) => {
  const taskId = parseInt(event.target.id);
  if (!taskId) {
    return
  } else {
    for (const task of tasks) {
      const checkedTask = tasks.find((task) => task.id === taskId);
      console.log(checkedTask);

    }
    
  }

};

taskList.addEventListener('click', handleClickList);





  
