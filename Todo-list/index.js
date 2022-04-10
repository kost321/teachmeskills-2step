 const root = document.getElementById('root')

// ----------------- Action Panel -----------------

 const bigWrapper = document.createElement('div')
bigWrapper.classList.add('container')

const wrapperRow = document.createElement('div')
wrapperRow.classList.add('container-wrapper')

const deleteAllButton = document.createElement('button')
deleteAllButton.textContent = 'Delete All'
deleteAllButton.classList.add('btn')

const addTodoTextField = document.createElement('input')
addTodoTextField.placeholder = 'Enter todo...'
addTodoTextField.setAttribute('id', 'todo-input')

const addTodoButton = document.createElement('button')
addTodoButton.textContent = 'Add'
addTodoButton.classList.add('btn')

wrapperRow.append(deleteAllButton, addTodoTextField, addTodoButton)

// ----------------- Todos -----------------

import { getTodo } from './export-function.js'; 

// ----------------- Render section -----------------

let todosFromStorage = localStorage.getItem('todos');
const todosDB = todosFromStorage ? JSON.parse(todosFromStorage) : [];

window.onclick = (event) => {
  console.log('click')
  saveTodos(todosDB);
}

console.log('todosDB', todosDB);
const transformedTodos = todosDB.map(getTodo)
console.log('transformedTodos', transformedTodos);

bigWrapper.append(wrapperRow, ...transformedTodos)
root.append(bigWrapper)

 function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos))
}

const createTodo = (todos) => {
  const text = addTodoTextField.value;
  const todoObject = {
    id: Math.floor(Math.random() * 1000) + 1,
    text: text,
    date: (new Date()).toLocaleString(),
    isChecked: false,
  }
  let length = todos.push(todoObject);
  const todo = getTodo(todoObject, length - 1, todos);
  bigWrapper.append(todo)
  addTodoTextField.value = '';
  // saveTodos(todos);
}

addTodoButton.addEventListener('click', () => createTodo(todosDB))

const deleteAll = () => {
  const todoItems = document.querySelectorAll('.todo-item');
  todoItems.forEach((item) => item.remove());
  todosDB.splice(0, todosDB.length);
  // saveTodos(todosDB)
}

deleteAllButton.addEventListener('click', deleteAll)
