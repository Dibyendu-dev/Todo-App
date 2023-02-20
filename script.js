// const form = document.getElementById('todo-form');
// const todoInput = document.getElementById('todo-input');
// const todoList = document.getElementById('todo-list');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   // get the value of the input field
//   const todo = todoInput.value;

//   // create a new list item element
//   const li = document.createElement('li');

//   // set the text content of the list item to the todo text
//   li.textContent = todo;

//   // append the list item to the todo list
//   todoList.appendChild(li);

//   // clear the input field
//   todoInput.value = '';
// });
// ----------------------------------------

const form = document.querySelector('form');
const input = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', event => {
  event.preventDefault(); // prevent the form from submitting

  // create a new list item for the task
  const task = input.value;
  const li = document.createElement('li');
  li.textContent = task;

  // add a delete button to the list item
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');
  li.appendChild(deleteButton);

  // add the list item to the task list
  taskList.appendChild(li);

  // clear the input field
  input.value = '';
});

taskList.addEventListener('click', event => {
  if (event.target.className === 'delete-button') {
    const li = event.target.parentNode;
    taskList.removeChild(li);
  }
});
