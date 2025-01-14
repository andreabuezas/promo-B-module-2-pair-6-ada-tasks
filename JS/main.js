"use strict" ;

const taskList = document.querySelector (".js-tasklist");
let msg = document.querySelector('.js-msg');
const GITHUB_USER = "Nymesia47";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;


  let tasks = [];
  let completedTasks = [];
  let toDoTasks = [];


  function countCompletedTasks(array) {
    completedTasks = array.filter((task) => task.completed === true);   
  }

  function countToDoTasks(array) {
    toDoTasks = array.filter((task) => task.completed !== true);

  }

  
  fetch(SERVER_URL)
  .then((response) => response.json())
  .then((data) => {
    tasks = data.results;

    renderTask(tasks);
    countCompletedTasks(tasks);
    countToDoTasks(tasks);
    msg.innerHTML = `Tienes ${tasks.length} tareas. ${completedTasks.length} completada y ${toDoTasks.length} por realizar.`
 
  });


  //Pintar Tareas

  function renderTask (array) {
    taskList.innerHTML = "" ;
    for (const task of array) {
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

renderTask(tasks);



/*
Completar tarea:

Cuando la usuaria marque una tarea como completada (evento):
Busca la tarea que tenga el id `taskId` en el array `tasks`
Una vez que has obtenido la tarea, actualiza la propiedad `completed`
Pinta de nuevo las tareas en el html
*/

const handleClickList = (event) => {
  const taskId = parseInt(event.target.id);
  if (!taskId) {
    return
  } 
    
  const checkedTask = tasks.findIndex((task) => task.id === taskId);
  console.log(checkedTask);
  console.log(tasks);
  console.log(taskId);
  tasks[checkedTask].completed = true;

  renderTask(tasks);
  countCompletedTasks(tasks);
  countToDoTasks(tasks);
  msg.innerHTML = `Tienes ${tasks.length} tareas. ${completedTasks.length} completada y ${toDoTasks.length} por realizar.`

};

taskList.addEventListener('click', handleClickList);


/*
Filtrar tareas:

Crea un evento asociado al botón de buscar de la interfaz gráfica.
Crea la función manejadora del evento anterior.

Dentro de esta función:
Obtén el valor del input de filtrar.
Filtra las tareas que coinciden con el valor introducido por el usuario.
Vuelve a pintar las tareas, esta vez utilizando el listado filtrado.
*/

const searchBtn = document.querySelector('.js-btn-filter');
const filterInput = document.querySelector('.js-text-task-filter');

function handleClickSearch (ev) {
  ev.preventDefault();
  let searchValue = filterInput.value;
  const filteredTasks = tasks.filter ((task) => task.name.toLowerCase().includes(searchValue.toLowerCase()));
  renderTask(filteredTasks);
}

searchBtn.addEventListener('click', handleClickSearch);



