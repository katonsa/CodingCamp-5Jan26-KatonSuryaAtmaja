const todos = [];

function addTodo() {
  const todoInput = document.getElementById('todo-input');
  const todoDate = document.getElementById('todo-date');
  const isFilteredHelperText = document.getElementById('is-filtered-helper-text');
  const filterText = document.getElementById('filter-text');
  const filterDate = document.getElementById('filter-date');

  const inputValue = todoInput.value.trim().toLowerCase();
  const dateValue = todoDate.value.trim();

  if (inputValue === '' || dateValue === '') {
    alert('Please fill both value of todo item and date.');
  } else {
    const newTodo = {
      item: inputValue,
      date: dateValue,
      completed: false,
    }

    todos.push(newTodo);

    console.log('Todo Added:', todos);

    isFilteredHelperText.classList.remove('block');
    isFilteredHelperText.classList.add('hidden');
    filterText.innerText = '';
    filterDate.innerText = '';
    renderTodos();
  }
}

function filterTodo() {
  const todoInput = document.getElementById('todo-input');
  const todoDate = document.getElementById('todo-date');
  const isFilteredHelperText = document.getElementById('is-filtered-helper-text');
  const filterText = document.getElementById('filter-text');
  const filterDate = document.getElementById('filter-date');

  const inputValue = todoInput.value.trim().toLowerCase();
  const dateValue = todoDate.value.trim();

  if (inputValue === '' && dateValue === '') {
    isFilteredHelperText.classList.remove('block');
    isFilteredHelperText.classList.add('hidden');
    filterText.innerText = '';
    filterDate.innerText = '';

    renderTodos();
    return;
  }

  const filteredTodos = todos.filter((todo) => {
    const matchItem = inputValue === '' || todo.item.toLowerCase().includes(inputValue);
    const matchDate = dateValue === '' || todo.date === dateValue;
    return matchItem && matchDate;
  });

  isFilteredHelperText.classList.remove('hidden');
  isFilteredHelperText.classList.add('block');
  filterText.innerText = inputValue;
  filterDate.innerText = dateValue;

  renderTodos('No todos found', filteredTodos);
}

function renderTodos(emptyStateMessage = 'No todos available', list = todos) {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  if (list.length > 0) {
    list.forEach((todo) => {
      const completedClass = todo.completed ? 'line-through text-gray-400' : '';
      const originalIndex = todos.indexOf(todo);

      todoList.innerHTML += `
      <li class="flex items-center gap-3">
        <input type="checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleCompleted(${originalIndex}, this.checked)" class="h-4 w-4 cursor-pointer">
        <p class="text-2xl ${completedClass}">
          ${todo.item} <span class="text-sm text-gray-500">(${todo.date})</span>
        </p>
      </li>
      `
    });
  } else {
    // Fallback (empty state) kalau tidak ada todo
    todoList.innerHTML = `<li><p>${emptyStateMessage}</p></li>`;
  }
}

function clearTodos() {
    todos.length = 0;
    renderTodos();
}

function toggleCompleted(index, checked) {
  if (!todos[index]) {
    return;
  }

  todos[index].completed = checked;
  renderTodos();
}
