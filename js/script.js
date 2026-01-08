let todos = [];

function addTodo() {
  const todoInput = document.getElementById('todo-input');
  const todoDate = document.getElementById('todo-date');

  if (todoInput.value === '' || todoDate.value === '') {
    alert('Please fill both value of todo item and date.');
  } else {
    const newTodo = {
      item: todoInput.value,
      date: todoDate.value,
    }

    todos.push(newTodo);

    console.log('Todo Added:', todos);

    renderTodos();
  }
}

function renderTodos() {
  const todoList = document.getElementById('todo-list');

  todoList.innerHTML = '';

  todos.forEach((todo, _) => {
    todoList.innerHTML += `
    <li>
      <p class="text-2xl">${todo.item} <span class="text-sm" text-gray-500">(${todo.date})</span></p>
    </li>
    `
  });
}

function clearTodos() {
    todos = [];
    renderTodos();
}

function filterTodo() {}
