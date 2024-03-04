const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

const buttonInserir = document.querySelector('.form__button--add-task');

buttonInserir.addEventListener('click', function (event) {
  event.preventDefault()
  
    const title = document.querySelector('.form__input--text').value;
    const type = document.querySelector('.form__input--priority').value;

    if (title.trim() !== '') {

      const newTask = {
        title: title,
        type: type
      };

      tasks.push(newTask);

      renderElements(tasks);

      document.querySelector('#input_title').value = '';
      document.querySelector('.form__input--priority').value = '';    
     
    } else {
      alert('Por favor, insira um título para a tarefa.');
    }
  });






function renderElements(tasks) {

const ulElement = document.querySelector('.tasks__list');
    
    ulElement.innerText = '';
  
  for (let i = 0; i < tasks.length; i++) {   
    const taskItem = createTaskItem(tasks[i]);   
    ulElement.appendChild(taskItem);
  }
}

renderElements(tasks);




function createTaskItem(task) {
  
  const liElement = document.createElement('li');
  liElement.classList.add('task__item');
  
  const taskInfoContainer = document.createElement('div');
  taskInfoContainer.classList.add('task-info__container');
  
  const spanElement = document.createElement('span');
  spanElement.classList.add('task-type');
  
  if (task.type.toLowerCase() === 'urgente') {
    spanElement.classList.add('span-urgent');
  } else if (task.type.toLowerCase() === 'importante') {
    spanElement.classList.add('span-important');
  } else if (task.type.toLowerCase() === 'normal') {
    spanElement.classList.add('span-normal');
  }

  taskInfoContainer.appendChild(spanElement);
  
  const pElement = document.createElement('p');
  pElement.innerText = task.title;
  taskInfoContainer.appendChild(pElement);
  
  liElement.appendChild(taskInfoContainer);
 
  const buttonElement = document.createElement('button');
  buttonElement.classList.add('task__button--remove-task');
  liElement.appendChild(buttonElement);
 

  buttonElement.addEventListener('click', function(){     
      const index = tasks.indexOf(task);
      if(index !== -1) {
        tasks.splice(index, 1);
      }
    
    renderElements(tasks)

  })  

  return liElement;
}




















 