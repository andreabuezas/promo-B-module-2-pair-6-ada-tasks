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
       taskList.innerHTML += `<li class="js-list-title"> ${task.name} </li>`;

    const listItem = document.querySelector (".js-list-title");
    if (task.completed === true) {
        listItem.classList.add ("tachado");
        }
        else{
            listItem.classList.remove ("tachado"); 
        }
    }

}

  renderTask();

  

 // .tachado