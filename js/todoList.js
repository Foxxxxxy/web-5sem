window.addEventListener("DOMContentLoaded", function() {
  let todoList = document.getElementById('todo-list');
  let todos = JSON.parse(localStorage.getItem('todos')) || [];

  todos.forEach(function(todo) {
    let todoItem = createTodoElement(todo);
    todoList.appendChild(todoItem);
  });

  document.getElementById('todo').addEventListener("submit", function(event) {
    event.preventDefault();

    let todoInput = document.getElementById('todo-input');
    if (todoInput.value !== '') {
      let todoItem = createTodoElement({ content: todoInput.value, completed: false });
      todoList.appendChild(todoItem);
      todos.push({ content: todoInput.value, completed: false });
      localStorage.setItem('todos', JSON.stringify(todos));
      todoInput.value = '';
      toastr.success('Added new todo') // Отобразить сообщение об добавлении todo
    } else {
      toastr.warning('Type anything to add todo')
    }
  });

  function createTodoElement(todo) {
    let todoItem = document.createElement('li');
    let todoCheckbox = document.createElement('input');
    let todoText = document.createElement('p')
    let deleteButton = document.createElement('button'); // Create delete button
    todoText.textContent = todo.content
    deleteButton.textContent = 'Remove'; // Set button text 
    deleteButton.classList.add('todo-list__item--delete')
    todoItem.classList.add('todo-list__item');
    todoCheckbox.type = "checkbox";
    todoCheckbox.checked = todo.completed;
    todoItem.appendChild(todoCheckbox);
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteButton); // Append delete button to the todo item

    todoCheckbox.addEventListener('change', function() {
      todo.completed = this.checked;
      updateLocalStorage();
      if (this.checked) {
        todoItem.classList.add('completed');
      } else {
        todoItem.classList.remove('completed');
      }
    });

    deleteButton.addEventListener('click', function() {
      todoList.removeChild(todoItem); // Remove the todo item from the list
      todos = todos.filter(item => item !== todo); // Remove the todo from the array
      updateLocalStorage();
      toastr.success('Deleted todo') // Отобразить сообщение об удалении todo
    });

    if (todo.completed) {
      todoItem.classList.add('completed');
    }

    return todoItem;
  }

  function updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
});
